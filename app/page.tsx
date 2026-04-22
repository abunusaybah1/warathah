export default function Hero() {
  return (
    <div>
      {/* HERO */}
      <section className="relative bg-gradient-to-br from-green-dark via-green-mid to-green-light text-cream py-24 px-6 text-center overflow-hidden">
        {/* Soft glow effects */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            The inheritors of the Prophets now have a home
          </h1>

          <p className="text-text-muted text-lg max-w-xl mx-auto mb-6">
            Learn authentic Islam based on the Quran and Sunnah upon the
            understanding of the Salaf — structured and distraction-free.
          </p>

          <p className="italic text-gold-light mb-10">
            “The scholars are the inheritors of the Prophets.”
          </p>

          <div className="flex justify-center gap-4">
            <button className="bg-gold text-green-dark px-8 py-3 rounded-xl font-semibold hover:bg-gold-light transition">
              Start Learning
            </button>

            <button className="border border-gold px-8 py-3 rounded-xl hover:bg-gold/10 transition">
              Join Community
            </button>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20 px-6 bg-cream text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">
          The Problem
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            "No structure — endless content",
            "No trust — mixed sources",
            "No community — toxic spaces",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur border border-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              ❌ {item}
            </div>
          ))}
        </div>

        <p className="mt-10 text-text-muted max-w-xl mx-auto">
          Your learning is scattered. Your foundation is weak. And the people of
          Sunnah are disconnected.
        </p>
      </section>

      {/* SOLUTION */}
      <section className="bg-green-mid text-cream py-20 px-6">
        <h2 className="text-3xl md:text-4xl text-center mb-12">The Solution</h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
          {[
            {
              title: "📚 Learn",
              desc: "Structured courses with progress tracking.",
            },
            {
              title: "🔔 Remember",
              desc: "Daily adhkar, hadith, and Quran reminders.",
            },
            {
              title: "🤝 Community",
              desc: "Moderated spaces for beneficial discussions.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur hover:bg-white/10 transition"
            >
              <h3 className="text-xl mb-3">{item.title}</h3>
              <p className="text-sm text-text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DIFFERENT */}
      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-3xl md:text-4xl mb-6">
          What Makes Warathah Different
        </h2>

        <p className="text-lg mb-8">Not for everyone. And that’s the point.</p>

        <ul className="space-y-4 text-text-muted max-w-xl mx-auto">
          <li>✔ Built specifically for Ahlus Sunnah</li>
          <li>✔ No debates, no confusion</li>
          <li>✔ Clean, focused environment</li>
        </ul>
      </section>

      {/* VISION */}
      <section className="bg-green-light text-cream py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl mb-6">The Vision</h2>

        <p className="max-w-xl mx-auto text-text-muted">
          We are building a global home for structured Islamic learning and
          community upon the Sunnah.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-green-dark text-cream py-24 text-center">
        <h2 className="text-3xl md:text-4xl mb-6">Begin your journey</h2>

        <button className="bg-gold text-green-dark px-10 py-4 rounded-xl font-semibold hover:bg-gold-light transition">
          Get Started
        </button>
      </section>
    </div>
  );
}
