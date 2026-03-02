export function ContactPage() {
  return (
    <section>
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <p className="text-gray-300 mb-8">Tell us your growth priorities and we will reply with a tailored engagement outline.</p>
      <form className="space-y-4 max-w-2xl">
        <input className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md" placeholder="Name" />
        <input className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md" placeholder="Email" type="email" />
        <textarea className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-md" rows={5} placeholder="What outcome are you targeting?" />
        <button className="bg-gradient-to-r from-indigo-500 to-rose-500 text-white px-6 py-3 rounded-md">Send inquiry</button>
      </form>
    </section>
  );
}
