"use client";

import Link from "next/link";

// import Link from "next/link";

export default function Hero() {
  return (
    <main className="bg-gray-50">
      {/* ─── HERO SECTION ─── */}
      <section className="relative bg-linear-to-br from-[#0f281b] via-[#0f281b] to-[#1a3a2a] min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24">
        {/* Background Glow */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#c9a84c]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#c9a84c]/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-full px-4 py-2 mb-8">
            <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full"></span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#c9a84c]">
              SAFE SPACE FOR MUSLIMS
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
            Inherit the{" "}
            <em className="text-[#c9a84c] font-bold italic">Knowledge</em> of
            the Prophets.
          </h1>

          {/* Description */}
          <p className="text-lg text-white/65 mb-12 leading-relaxed max-w-lg mx-auto">
            A digital space for Muslims who want to adhere to the Quran and
            Sunnah... Learn structured Islamic knowledge and have access to a
            community of like-minded muslims.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              className="bg-[#c9a84c] text-[#0f281b] px-8 py-3 rounded-md font-semibold hover:bg-[#dab968] transition-all duration-200 transform hover:scale-105"
              href="/get-started"
            >
              Begin Your Journey
            </Link>
          </div>
        </div>
      </section>

      {/* ─── HADITH STRIP ─── */}
      <section className="bg-[#c9a84c] py-8 px-6 text-center">
        <p className="text-lg italic font-serif text-[#0f281b] mb-2 max-w-3xl mx-auto">
          &quot;The scholars are the inheritors of the Prophets.&quot;
        </p>
        <p className="text-sm font-semibold text-[#0f281b]/70 uppercase tracking-widest">
          — Sunan Abī Dāwūd 3641 | Declared Sahīh by Al-Albānī
        </p>
      </section>

      {/* ─── THREE PILLARS SECTION ─── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-[#c9a84c] mb-3">
              What Warathah Offers
            </p>
            <h2 className="text-5xl font-bold text-[#0f281b] mb-4">
              Three pillars. <br /> One platform.
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Everything a Muslim upon the Sunnah needs — structured, clean, and
              rooted in authentic knowledge.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid md:grid-cols-3 gap-px bg-[#c9a84c]/20 p-px border border-[#c9a84c]/20">
            {[
              {
                number: "01",
                icon: "📚",
                title: "Learn",
                desc: "Structured short courses on Aqeedah, Fiqh, Seerah, and Arabic Basics. Progress tracked. Knowledge that builds — not random lectures that go nowhere.",
              },
              {
                number: "02",
                icon: "🌙",
                title: "Remember",
                desc: "Daily morning and evening adhkar at the correct times. Hadith of the day. Quranic verse with brief tafsir. Structured around the Sunnah.",
              },
              {
                number: "03",
                icon: "🤝",
                title: "Community",
                desc: "Topic-based rooms moderated by people of knowledge. A purposeful space to ask questions and find brothers and sisters upon the same manhaj.",
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white p-12 hover:bg-[#0f281b] transition-colors duration-300 cursor-pointer group"
              >
                <p className="text-6xl font-bold text-[#0f281b]/5 group-hover:text-[#c9a84c]/20 transition-colors mb-4">
                  {pillar.number}
                </p>
                <div className="text-4xl mb-6 bg-[#c9a84c]/10 group-hover:bg-[#c9a84c]/20 w-14 h-14 flex items-center justify-center rounded-lg transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#0f281b] group-hover:text-white mb-3 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-300 leading-relaxed transition-colors">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COURSES SECTION ─── */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-[#c9a84c] mb-3">
              The Knowledge Library
            </p>
            <h2 className="text-5xl font-bold text-[#0f281b] mb-4">
              Start learning. <br /> Build your foundation.
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              All courses curated and verified upon the methodology of Ahlus
              Sunnah wal Jamā&apos;ah. Begin at your level.
            </p>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                badge: "Most Popular",
                icon: "🕌",
                tag: "Aqeedah",
                title: "The Three Fundamental Principles",
                desc: "Based on the famous text of Imām Muhammad ibn Abd al-Wahhāb. Know your Lord, your religion, and your Prophet ﷺ.",
                lessons: "18 lessons · 3hrs",
                level: "Beginner",
              },
              {
                icon: "📖",
                tag: "Fiqh",
                title: "Purification & Prayer — A Complete Guide",
                desc: "Learn the rulings of Tahārah and Salāh correctly, with evidences from the Quran and authentic Sunnah.",
                lessons: "24 lessons · 4hrs",
                level: "Beginner",
              },
              {
                icon: "✨",
                tag: "Seerah",
                title: "The Life of the Prophet ﷺ",
                desc: "A structured journey through the biography of the Prophet Muhammad ﷺ from birth to his passing.",
                lessons: "32 lessons · 6hrs",
                level: "Intermediate",
              },
            ].map((course, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg overflow-hidden border border-[#c9a84c]/20 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2 cursor-pointer"
              >
                {/* Course Thumbnail */}
                <div className="h-36 bg-linear-to-br from-[#0f281b] to-[#1a3a2a] relative flex items-center justify-center">
                  {course.badge && (
                    <span className="absolute top-3 left-3 bg-[#c9a84c] text-[#0f281b] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {course.badge}
                    </span>
                  )}
                  <span className="text-5xl">{course.icon}</span>
                </div>

                {/* Course Body */}
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#c9a84c] mb-2">
                    {course.tag}
                  </p>
                  <h3 className="text-lg font-bold text-[#0f281b] mb-3 leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                    {course.desc}
                  </p>

                  {/* Course Meta */}
                  <div className="border-t border-[#c9a84c]/20 pt-4 flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {course.lessons}
                    </span>
                    <span
                      className={`text-xs font-bold uppercase px-3 py-1 rounded-full tracking-wider ${
                        course.level === "Beginner"
                          ? "bg-[#c9a84c]/15 text-[#a07c1e]"
                          : "bg-[#0f281b]/10 text-[#1a3a2a]"
                      }`}
                    >
                      {course.level}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMMUNITY SECTION ─── */}
      <section className="py-24 px-6 bg-[#0f281b]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 text-white">
            <p className="text-xs font-bold uppercase tracking-widest text-[#c9a84c] mb-3">
              The Community
            </p>
            <h2 className="text-5xl font-bold mb-4">
              Find your people. <br /> Upon the same path.
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Moderated rooms for specific topics. No chaos. No bid&apos;ah.
              Just Muslims growing together upon knowledge.
            </p>
          </div>

          {/* Community Rooms */}
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                icon: "📖",
                name: "Students of Knowledge",
                desc: "For those currently studying Islamic sciences — share what you are learning, ask questions, find study partners.",
                members: "1,240 members",
                online: "84 online now",
              },
              {
                icon: "🌱",
                name: "New to the Sunnah",
                desc: "A safe, welcoming space for those new to Salafiyyah. Ask basic questions without fear of judgment.",
                members: "876 members",
                online: "41 online now",
              },
              {
                icon: "🤲",
                name: "Daily Benefits",
                desc: "Share short beneficial reminders, ayāt, and ahādīth. No debates. Just spreading good.",
                members: "2,100 members",
                online: "156 online now",
              },
              {
                icon: "🇳🇬",
                name: "Nigeria & West Africa",
                desc: "For Muslims in Nigeria, Ghana, and across West Africa. Local scholars, local events, local community.",
                members: "634 members",
                online: "29 online now",
              },
            ].map((room, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-[#c9a84c]/15 rounded-lg p-6 hover:bg-[#c9a84c]/8 hover:border-[#c9a84c]/40 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-[#c9a84c]/20 group-hover:bg-[#c9a84c]/30 rounded-lg flex items-center justify-center text-2xl shrink-0 transition-colors">
                    {room.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {room.name}
                    </h3>
                    <p className="text-sm text-white/50 mb-4 leading-relaxed">
                      {room.desc}
                    </p>
                    <div className="flex gap-4 text-xs">
                      <span className="text-[#c9a84c] font-semibold">
                        {room.members}
                      </span>
                      <span className="text-white/40">
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        {room.online}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── REMINDER SECTION ─── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#c9a84c] mb-3">
              The Remembrance
            </p>
            <h2 className="text-5xl font-bold text-[#0f281b] mb-4">
              Remember Allah. <br /> Every single day.
            </h2>
            <p className="text-lg text-gray-600">
              Structured morning and evening adhkar delivered at the right time.
              Reminders you actually make.
            </p>
          </div>

          {/* Reminder Widget */}
          <div className="bg-[#0f281b] rounded-2xl p-12 border border-[#c9a84c]/20 relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#c9a84c]/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#c9a84c]/20">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#c9a84c]">
                  Wednesday · 22 Shawwāl 1447
                </p>
                <span className="bg-[#c9a84c]/15 border border-[#c9a84c]/30 text-[#c9a84c] text-xs font-bold px-4 py-2 rounded-full uppercase">
                  🌅 Morning Adhkar
                </span>
              </div>

              {/* Content */}
              <p className="text-xs font-bold uppercase tracking-widest text-[#c9a84c] mb-4">
                Adhkar — Sayyidul Istighfār
              </p>
              <p className="text-3xl font-serif text-[#c9a84c]/80 mb-4 rtl text-right leading-relaxed">
                اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ خَلَقْتَنِي
                وَأَنَا عَبْدُكَ
              </p>
              <p className="text-sm italic text-white/50 mb-6">
                Allāhumma anta rabbī, lā ilāha illā ant, khalaqtanī wa anā
                abduk...
              </p>

              <div className="border-t border-[#c9a84c]/20 my-6"></div>

              <p className="text-lg font-serif text-white/70 italic mb-2">
                &quot;O Allah, You are my Lord. There is no god worthy of
                worship except You. You created me and I am Your slave...&quot;
              </p>
              <p className="text-xs text-[#c9a84c]/60 font-semibold mb-8">
                Sahīh al-Bukhārī 6306 · Recommended: Once every morning
              </p>

              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex-1 bg-[#c9a84c] text-[#0f281b] py-3 rounded-md font-semibold hover:bg-[#dab968] transition-all duration-200">
                  ✓ Mark as Done
                </button>
                <button className="flex-1 bg-white/10 text-white py-3 rounded-md font-semibold border border-white/20 hover:bg-white/20 transition-all duration-200">
                  Share Benefit
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#0f281b] border-t border-[#c9a84c]/15 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12 pb-8 border-b border-white/10">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold text-[#c9a84c] mb-4">
                Warathah <span className="text-sm opacity-80">وَرَثَة</span>
              </h3>
              <p className="text-sm text-white/40 leading-relaxed">
                A digital home for Muslims upon the Quran and Sunnah. Built with
                sincerity. Moderated with care.
              </p>
            </div>

            {/* Links */}
            {[
              {
                title: "Platform",
                links: ["Courses", "Community", "Daily Adhkar", "Scholars"],
              },
              {
                title: "Company",
                links: [
                  "About Warathah",
                  "Our Manhaj",
                  "Contact",
                  "Privacy Policy",
                ],
              },
              {
                title: "Community",
                links: [
                  "Join as a Member",
                  "Submit a Benefit",
                  "Become a Moderator",
                  "Scholar Partnership",
                ],
              },
            ].map((col, idx) => (
              <div key={idx}>
                <h4 className="text-xs font-bold uppercase tracking-widest text-[#c9a84c] mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-sm text-white/45 hover:text-[#c9a84c] transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div className="flex items-center justify-between">
            <p className="text-xs text-white/25">
              © 2025 Warathah. Built for the Ummah. All rights reserved.
            </p>
            <p className="text-sm font-serif text-[#c9a84c]/40 rtl">
              وَرَثَةُ الْأَنْبِيَاءِ
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
