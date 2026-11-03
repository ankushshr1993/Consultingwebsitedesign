import puppeteer from 'puppeteer-core';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
import fs from 'node:fs';
import assert from 'node:assert/strict';
import { enquiryFields } from '../apps/defence-fund/lib/contact.ts';
const root=fileURLToPath(new URL('../', import.meta.url));
const results=[];
const failures=[];
const browser=await puppeteer.launch({executablePath:process.env.CHROME_PATH || '/usr/bin/chromium',headless:true});
const check=(condition,message)=>{if(!condition)failures.push(message);};
try {
 for(const [app,port] of [['consulting',3000],['defence-fund',3001]]) {
  for(const file of fs.readdirSync(`${root}/apps/${app}/app`,{recursive:true}).filter(f=>f.endsWith('page.tsx')&&!f.includes('['))) {
   const route='/'+file.replace(/\/?page.tsx$/,'');
   const page=await browser.newPage();
   await page.setViewport({width:1280,height:800});
   const response=await page.goto(`http://127.0.0.1:${port}${route}`,{waitUntil:'networkidle0'});
   check(response.status()===200||response.status()===304,`${app}${route}: HTTP ${response.status()}`);
   const data=await page.evaluate(()=>({title:document.title,canonical:document.querySelector('link[rel="canonical"]')?.href,og:document.querySelector('meta[property="og:url"]')?.content,h1:[...document.querySelectorAll('h1')].map(e=>e.innerText),unlabelled:[...document.querySelectorAll('input,select,textarea')].filter(e=>e.getBoundingClientRect().height>0&&!e.labels?.length).map(e=>e.name)}));
   check(data.h1.length===1,`${app}${route}: ${data.h1.length} h1 elements`);
   check(!!data.canonical,`${app}${route}: missing canonical`);
   if(app==='defence-fund')check(data.og?.replace(/\/$/,'')===`https://deftech.regressionconsulting.com${route}`.replace(/\/$/,''),`${route}: incorrect OG ${data.og}`);
   check(!data.unlabelled.length,`${app}${route}: unlabelled fields ${data.unlabelled}`);
   const violations=[];
   for(const width of [320,375,768,1024,1280,1920]) {
    await page.setViewport({width,height:800});
    const layout=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,buttons:[...document.querySelectorAll('button')].filter(e=>e.getBoundingClientRect().height>0&&!e.innerText.trim()&&!e.getAttribute('aria-label')).length}));
    check(layout.scroll<=width,`${app}${route}: overflow ${layout.scroll} at ${width}`);
    check(!layout.buttons,`${app}${route}: unnamed button at ${width}`);
    if(width===375||width===1280) {
     await page.addScriptTag({path:require.resolve('axe-core/axe.min.js')});
     const a11y=await page.evaluate(async()=>{const r=await axe.run(document.body,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}});return r.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))}));});
     violations.push({width,findings:a11y});
     check(!a11y.length,`${app}${route}: axe at ${width}: ${a11y.map(v=>v.id)}`);
    }
   }
   results.push({app,route,status:response.status(),...data,violations});
   console.log(app,route,'checked');
   await page.close();
  }
 }
 for(const [alias,target] of [['what-we-do','services'],['how-we-work','approach'],['who-we-are','about']]) {
  const response=await fetch(`http://127.0.0.1:3000/${alias}`,{redirect:'manual'});
  check(response.status===308,`${alias}: expected permanent redirect`);
  check(new URL(response.headers.get('location'),'http://127.0.0.1:3000').pathname===`/${target}`,`${alias}: wrong redirect target`);
 }
 for(const port of [3000,3001]) {
  const response=await fetch(`http://127.0.0.1:${port}/api/contact`,{method:'POST',headers:{'Content-Type':'application/json'},body:'{}'});
  const data=await response.json();check(response.status===400&&data.error?.code==='VALIDATION_ERROR',`${port}: empty API request not rejected`);
 }
 for(const kind of ['founder','investor']) {
  const response=await fetch('http://127.0.0.1:3001/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({kind,fields:{email:'audit@example.invalid',name:'Audit',founderName:'Audit'}})});
  const data=await response.json();check(response.status===400&&Object.keys(data.error?.details?.fieldErrors||{}).length>0,`${kind}: incomplete structured API request not rejected`);
 }
 // Consulting: invalid input stays local; errors preserve answers; accepted requests reset.
 {
  const page=await browser.newPage();await page.goto('http://127.0.0.1:3000/contact',{waitUntil:'networkidle0'});
  let posts=0,accepted=false;await page.setRequestInterception(true);
  page.on('request',async req=>{if(req.url().endsWith('/api/contact')){posts++;await req.respond({status:accepted?200:500,contentType:'application/json',body:JSON.stringify(accepted?{ok:true}:{ok:false,error:{message:'Provider rejection simulated'}})});}else await req.continue();});
  await page.click('form button[type="submit"]');await page.waitForSelector('[aria-invalid="true"]');check(posts===0,'consulting: invalid form submitted');
  for(const name of ['name','email','company','role','message'])await page.type(`[name="${name}"]`,name==='email'?'audit@example.invalid':'Initial enquiry test response.');
  await page.click('form button[type="submit"]');await page.waitForFunction(()=>document.querySelector('[role="status"]').textContent.includes('Provider rejection'));
  check(await page.$eval('[name="email"]',e=>e.value==='audit@example.invalid'),'consulting: errors erased answers');
  accepted=true;await page.click('form button[type="submit"]');await page.waitForFunction(()=>document.querySelector('[role="status"]').textContent.includes('accepted'));
  check(await page.$eval('[name="email"]',e=>e.value===''),'consulting: success did not reset');check(posts===2,'consulting: wrong submission count');await page.close();
 }
 // Client validation, accessible field errors, failure preservation, success reset, analytics.
 for(const [route,kind] of [['/founder-intake','founder'],['/investor-intake','investor'],['/contact-us','contact']]) {
  const page=await browser.newPage();
  await page.goto('http://127.0.0.1:3001'+route,{waitUntil:'networkidle0'});
  let posts=0,accepted=false;
  await page.setRequestInterception(true);
  page.on('request',async req=>{
   if(req.url().endsWith('/api/contact')){posts++;await req.respond({status:accepted?200:500,contentType:'application/json',body:JSON.stringify(accepted?{ok:true}:{ok:false,error:{code:'EMAIL_SEND_FAILED',message:'Provider rejection simulated'}})});}
   else await req.continue();
  });
  await page.click('form button[type="submit"]');
  await page.waitForSelector('[aria-invalid="true"]');
  check(posts===0,`${kind}: invalid form posted`);
  check(await page.$eval('[aria-invalid="true"]',e=>e.id===document.activeElement.id),`${kind}: first error not focused`);
  for(const field of enquiryFields[kind]) {
   if(field.optional)continue;
   if(field.options)await page.select(`[name="${field.name}"]`,field.options[0]);
   else await page.type(`[name="${field.name}"]`,field.type==='email'?'audit@example.invalid':field.type==='textarea'?'This is a detailed response for testing the enquiry form.':'Audit example');
  }
  await page.click('form button[type="submit"]');
  await page.waitForFunction(()=>document.querySelector('[role="status"]').textContent.includes('Provider rejection'));
  check(await page.$eval('[name="email"]',e=>e.value==='audit@example.invalid'),`${kind}: error erased values`);
  accepted=true;
  await page.click('form button[type="submit"]');
  await page.waitForFunction(()=>document.querySelector('[role="status"]').textContent.includes('accepted'));
  check(await page.$eval('[name="email"]',e=>e.value===''),`${kind}: success did not clear form`);
  const events=await page.evaluate(()=>window.dataLayer.map(e=>e.event));
  check(events.filter(e=>e.endsWith('_submit_success')).length===1,`${kind}: duplicate or missing success event`);
  check(posts===2,`${kind}: expected exactly failure and success requests`);
  results.push({test:'form lifecycle',route,posts,events});
  await page.close();
 }
 for(const [port,route] of [[3000,'/'],[3001,'/']]){
  const page=await browser.newPage();await page.setViewport({width:375,height:812});
  await page.goto(`http://127.0.0.1:${port}${route}`,{waitUntil:'networkidle0'});
  const button=await page.$('button[aria-controls]');await button.click();
  check(await button.evaluate(e=>e.getAttribute('aria-expanded')==='true'),`${port}: menu did not open`);
  await page.keyboard.press('Tab');await page.keyboard.press('Escape');
  check(await button.evaluate(e=>e.getAttribute('aria-expanded')==='false'&&document.activeElement===e),`${port}: Escape/focus restoration failed`);
  await page.close();
 }
} finally {
 await browser.close();
 fs.writeFileSync(process.env.WEB_CHECK_RESULTS || '/tmp/regression-web-verification.json',JSON.stringify({results,failures},null,2));
 console.log(JSON.stringify({pages:results.filter(r=>r.app).length,failures},null,2));
}
assert.equal(failures.length,0,failures.join('\n'));
