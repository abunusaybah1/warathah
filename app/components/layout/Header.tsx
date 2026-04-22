// green #0f281b
// gold #c9a84c

"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { BiMenu, BiX } from "react-icons/bi";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Learn", href: "/learn" },
  { label: "Forums", href: "/forums" },
  { label: "Worship", href: "/worship" },
  { label: "Contact us", href: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 w-full bg-[#0f281b] border-b border-gray-200 z-50">
      <div className="absolute bottom-0 left-0 w-full h-0.75 bg-linear-to-r from-[#07522e] via-[#07522e] to-[#c9a84c]" />

      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-18">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo-gold-trans.png"
            alt="NDPC LASU Chapter"
            width={70}
            height={50}
            className="object-contain"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13.5px] font-medium text-[#c9a84c] tracking-wide pb-0.5 border-b-2 border-transparent hover:border-[#c9a84c] transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center bg-[#c9a84c] text-[#0f281b] text-[13px] font-bold px-5 py-2.5 rounded-md border-2 border-[#c9a84c] hover:bg-transparent hover:text-[#c9a84c] transition-all duration-200 tracking-wide"
        >
          Get in Touch
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#c9a84c] focus:outline-none cursor-pointer hover:scale-110"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <BiX className="text-4xl" />
          ) : (
            <BiMenu className="text-4xl" />
          )}
        </button>
      </div>

      {isOpen && (
        <div
          className="md:hidden absolute top-full left-0 w-full bg-[#0f281b]
          shadow-lg border-t border-gray-100 flex flex-col items-center
          gap-1 py-4 animate-in fade-in slide-in-from-top-2 duration-500"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className=" text-center py-3 text-[14px] font-medium
                text-[#c9a84c] w-fit hover:text-[#c9a84c] hover:border-b hover:border-[#c9a84c] transition"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 w-[80%]">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-[#c9a84c] text-[#0f281b] text-[14px] font-bold
                text-sm px-4 py-3 rounded-md border-2 border-[#c9a84c]
                hover:bg-transparent hover:text-[#c9a84c] transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
