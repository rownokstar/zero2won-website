"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-midnight/80 shadow-lg backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-baseline gap-0 text-2xl">
          <span className="font-outfit font-bold text-white">Zero</span>
          <span className="font-space-mono font-bold text-electric-blue">
            2
          </span>
          <span className="bg-gradient-to-r from-gold-win to-yellow-300 bg-clip-text font-outfit font-bold text-transparent">
            Won
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-muted-text transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden rounded-lg bg-electric-blue px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-electric-blue/90 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] lg:inline-flex"
        >
          Book a Call
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`h-0.5 w-6 rounded bg-white transition-all duration-300 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded bg-white transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded bg-white transition-all duration-300 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-midnight/95 backdrop-blur-lg transition-transform duration-300 lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-outfit text-2xl font-semibold text-white transition-colors hover:text-electric-blue"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 rounded-lg bg-electric-blue px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-electric-blue/90 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            Book a Call
          </Link>
        </div>
      </div>
    </header>
  );
}
