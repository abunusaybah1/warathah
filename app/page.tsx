"use client";

import Link from "next/link";
import { features, forums } from "../lib/landing";
import { courses } from "../lib/landing";

export default function Hero() {
  return (
    <main className="bg-gray-50">
      <section className="relative bg-linear-to-br from-[#0f281b] via-[#0f281b] to-[#1a3a2a] min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#c9a84c]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#c9a84c]/5 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-full px-4 py-2 mb-8">
            <span className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full"></span>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-[#c9a84c]">
              SPACE FOR MUSLIMS
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
            Inherit the{" "}
            <em className="text-[#c9a84c] font-bold italic">Knowledge</em> of
            the Prophets.
          </h1>

          <p className="text-lg text-[#c9a84c] mb-12 leading-relaxed max-w-lg mx-auto">
            A digital space for Muslims who want to adhere to the Quran and
            Sunnah upon the understanding of the pious predecessors... Get
            premium access to structured Islamic content and a community of
            like-minded muslims.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              className="bg-[#c9a84c] text-[#0f281b] px-8 py-3 rounded-md font-semibold hover:bg-[#dab968] transition-all duration-200 transform hover:scale-105"
              href="/get-started"
            >
              Begin Your Journey Today!
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#c9a84c] py-8 px-6 text-center">
        <p className="text-lg italic font-serif text-[#0f281b] mb-2 max-w-3xl mx-auto">
          &quot;The scholars are the
          <span className="text-[#0f281b] font-bold underline">
            {" "}
            inheritors
          </span>{" "}
          of the Prophets.&quot;
        </p>
        <p className="text-sm font-semibold text-[#0f281b]/70 uppercase tracking-widest">
          — Riyad as-Salihin 1388
        </p>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-[#c9a84c] mb-3">
              What Warathah Offers
            </p>
            <h2 className="text-5xl font-bold text-[#0f281b] mb-4">
              Three pillars. <br /> One platform.
            </h2>
            <p className="text-lg text-[#0f281b] max-w-xl mx-auto">
              Everything a Muslim who wants to thread upon the authentic Sunnah
              needs — structured, clean, and rooted in authentic knowledge.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[#c9a84c]/20 p-px border border-[#c9a84c]/20">
            {features.map((pillar, ind) => (
              <div
                key={ind}
                className="bg-[#c9a84c] p-12 hover:bg-[#0f281b] transition-colors duration-300 cursor-pointer group"
              >
                <div className="text-4xl mb-6 bg-[#0f281b]/10 group-hover:bg-[#c9a84c]/80 w-14 h-14 flex items-center justify-center rounded-lg transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#0f281b] group-hover:text-[#c9a84c] mb-3 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#0f281b] group-hover:text-[#c9a84c] leading-relaxed transition-colors">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-[#c9a84c] mb-3">
              The Knowledge Library
            </p>
            <h2 className="text-5xl font-bold text-[#0f281b] mb-4">
              Start learning. <br /> Build your foundation.
            </h2>
            <p className="text-lg text-[#0f281b] max-w-2xl">
              All courses curated and verified upon the methodology of Ahlus
              Sunnah wal Jamā&apos;ah. Begin at your level.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course, ind) => (
              <div
                key={ind}
                className="bg-white rounded-lg overflow-hidden border border-[#c9a84c]/20 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2 cursor-pointer"
              >
                <div className="h-36 bg-linear-to-br from-[#0f281b] to-[#1a3a2a] relative flex items-center justify-center">
                  {course.badge && (
                    <span className="absolute top-3 left-3 bg-[#c9a84c] text-[#0f281b] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {course.badge}
                    </span>
                  )}
                  <span className="text-5xl ">{course.icon}</span>
                </div>

                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#c9a84c] mb-2">
                    {course.tag}
                  </p>
                  <h3 className="text-lg font-bold text-[#0f281b] mb-3 leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-sm text-[#0f281b] mb-6 leading-relaxed">
                    {course.desc}
                  </p>

                  <div className="border-t border-[#c9a84c]/20 pt-4 flex items-center justify-between">
                    <span className="text-xs text-[#0f281b] flex items-center justify-center gap-1">
                      {course.lessons} lessons{" "}
                      <span className="w-1 h-1 inline-block  bg-gray-500 rounded-full"></span>{" "}
                      {course.duration}
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

      <section className="py-24 px-6 bg-[#0f281b]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 text-white">
            <p className="text-xs font-bold uppercase tracking-widest text-[#c9a84c] mb-3">
              The Forums
            </p>
            <h2 className="text-5xl font-bold mb-4">
              Find your people. <br /> Upon the same path.
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Purposeful topic-based rooms moderated by people of knowledge. No
              random debates. Just discussions to strenghten your knowledge and
              adherence to the Quran and Sunnah.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {forums.map((room, ind) => (
              <div
                key={ind}
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
    </main>
  );
}
