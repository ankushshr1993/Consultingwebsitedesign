# Website audit remediation

This implements the 3 November 2026 Hallmark audit across both applications. No routes or component files were deleted. Existing enquiry endpoints and intentional retirement of Insights remain in place.

## Implemented

- Both Resend integrations now require a provider acceptance ID and reject resolved SDK errors. Missing sender configuration also fails explicitly.
- Founder and investor intake now submit structured fields. The server validates each required answer, length, email, URL, and selection before constructing an email. Old label-only intake payloads are rejected. General contact payloads remain compatible.
- Forms have persistent labels, grouped fields, autocomplete, inline errors linked to controls, focus on the first invalid field, announced submission status, loading/disabled states, and preserved answers after failures.
- Consulting navigation stays compact until the full desktop links fit. Both mobile menus have accessible names, expanded/control state, and Escape/focus behavior. Skip links are available on both sites.
- New input borders, solid accessible primary buttons, focus rings, and reduced-motion rules replace weak contrast and decorative motion. The unrelated consulting video and abstract signal visualization were removed.
- Consulting's opening is shorter and uses the existing two-week diagnostic and actual service deliverables. Existing service and engagement detail remains available. Repeated homepage detail uses disclosures; nested frames and announcing labels were reduced.
- Defence uses one warm accent, solid surfaces, a persistent brand name, current-page navigation, and quieter sections. Its previously occluded positioning line is visible.
- Defence defaults to its documented `deftech.regressionconsulting.com` hostname, with distinct page titles/descriptions, route-specific canonical/Open Graph URLs, and a sitemap covering the public content and intake pages. Legal policy pages remain linked in the footer rather than promoted in the sitemap.
- Consulting's three old aliases permanently redirect to services/approach/about. Main pages have canonical and share metadata.
- Resource checklists include concrete preparation questions and relevant next actions. Thesis has a real h1, on-page navigation, and audience-specific intake links. Criteria and process link directly to intake.
- Ankush Sharma and the owner-supplied `https://www.linkedin.com/in/ankush-shr/` are used as the named contact. Consulting email/phone details are actionable links, and the defence social-link label wraps sensibly.
- Form-start, validation, attempt, error, and accepted-submission events are available. Duplicate sends to `gtag` plus `dataLayer` were removed. Optional GA initialization is described below.

## Owner information still needed

These are factual prerequisites, not unfinished code fixes:

1. **Biography:** the owner supplied Ankush Sharma's name and LinkedIn URL. No approved employment history, qualifications, achievements, or role titles were available in this conversation. Other private chats cannot be accessed from this environment. Publish further biography only after approval.
2. **Case evidence:** existing anonymous contexts and the eight-week example were retained rather than replaced with invented results. Defence now calls them operating examples, consistent with its existing legal disclosure, rather than proof. The owner should supply approved context, evidence, attribution/permission, and confirm whether they are illustrative or actual engagements before stronger claims are made.
3. **Policies:** legal/privacy/terms wording was preserved. The responsible entity, retention periods, contact for data requests, processors, jurisdictions, and actual handling practices need owner/professional review before any policy expansion. The UI does not claim practices that were not verified.
4. **Email service:** real delivery requires existing documented Resend bindings and an approved sender. Tests mock the provider and send no real email. Provider acceptance is not a guarantee of inbox delivery.
5. **Production measurement:** no GA measurement ID or deployed analytics access was supplied. Collector activation and receipt in the live account remain deployment checks.

## Analytics configuration

The defence app optionally reads `NEXT_PUBLIC_GA_MEASUREMENT_ID` (format `G-...`) at build time. With no ID it loads no remote analytics script; application events remain available in `window.dataLayer` for an existing tag-manager integration. With an ID it loads the configured GA collector and emits each event once through `gtag`. Configure it through the normal deployment process, together with the site's chosen privacy/consent requirements. No form answers, names, email addresses, or message bodies are attached to these events.

Key events use `founder_intake_*`, `investor_intake_*`, and `contact_*`: `start`, `validation_error`, `submit_attempt`, `submit_error`, and `submit_success`. `submit_error` includes a failure code so validation/configuration/provider/network failures can be distinguished without logging answers. `submit_success` means the server accepted the request after provider acceptance. Confirm events in the deployed account before using them to assess conversions.

## Verification

Use Node.js 24 (the verified environment runtime):

```sh
npm test
# With both built apps running on ports 3000 and 3001, and Chromium installed:
npm run test:browser
NEXT_TELEMETRY_DISABLED=1 npm run build
```

The tests cover required structured fields, whitespace/type/length errors, valid and invalid choices, email/website validation, legacy intake bypass, provider rejection, missing acceptance IDs, network failure, and accepted mail. All provider responses are mocked. `CHROME_PATH` can select an installed Chromium/Chrome binary for the browser checks; the default is `/usr/bin/chromium`. `WEB_CHECK_RESULTS` can select the JSON evidence path (default `/tmp/regression-web-verification.json`).

Stop development processes before production builds because both use `.next`. Run each built app with its existing `start` script on separate ports when validating production output. The browser checks exercise every route, six widths (320–1920px), mobile and desktop Axe WCAG A/AA, accessible field labels, form failure preservation and success reset, event counts, and mobile-menu Escape handling. Form requests are intercepted, so no real enquiry is sent.

Hallmark's long-form hero/fold warnings on intake/document pages and token-block reports on the legacy `.dark` theme are not visitor defects. They should not be “fixed” by removing required answers, hiding content, or reducing the tests. New website-specific colours and fonts use shared tokens. A full composition redesign is deferred until approved biography/case material exists, as recommended by the audit.

## Final results (3 November 2026)

- `npm test`: 11 tests passed; no skipped tests. The provider tests execute against both mail helpers with mocked responses.
- `NEXT_TELEMETRY_DISABLED=1 npm run build`: both production builds and their TypeScript checks passed.
- `npm run test:browser`: 23 routes checked at six widths; all 46 mobile/desktop Axe scans returned no A/AA findings. No horizontal overflow or unnamed visible buttons were found at the tested widths.
- All three aliases returned HTTP 308 to the intended canonical route. Empty contact requests and incomplete structured intakes were rejected by the actual local API with HTTP 400.
- All four forms passed local-invalid-input rejection, simulated provider-failure preservation, and accepted-response reset checks. Founder/investor/general defence event counts passed. No real email was sent.
- Both mobile menus passed open-state and Escape/focus-restoration checks.
- Final Hallmark rendered checks on both homepages and defence contact found no rendered Floor failures. The full earlier post-change sweeps also covered consulting services/about/approach/contact and defence intake/thesis/resources. The final mechanical command still exits nonzero for 32 token-scope reports in the imported legacy `.dark` theme block; these do not represent rendered defects. It is not described as a full static Hallmark pass.
- `git diff --check` passed. Application changes remain local and have not been deployed.

Local machine evidence is saved under `/workspace/hallmark-audit/`: `build-after.log`, `final-browser-results.json`, `final-browser.log`, `final-visual.json`, and the before/after Hallmark screenshots in the checkout's ignored `.hallmark/` directory. The repeatable functional and browser checks are saved under `tests/` and `scripts/`; they do not rely on the external audit directory.
