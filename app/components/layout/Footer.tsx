export default function Footer() {
  return (
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
          <p className="text-xs text-white/25 text-center self-center w-full">
            © {new Date().getFullYear()} Warathah. Built for the Ummah. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
