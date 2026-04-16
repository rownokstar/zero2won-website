"use client";

import { useState } from "react";
import Link from "next/link";

const businessTypes = ["E-commerce", "Coaching/Consulting", "SaaS", "Agency", "Other"];
const revenueRanges = [
  "Under $5,000/mo",
  "$5,000 - $15,000/mo",
  "$15,000 - $50,000/mo",
  "$50,000 - $100,000/mo",
  "$100,000+/mo",
];

const faqs = [
  {
    q: "How long does the free audit take?",
    a: "The audit call is 30 minutes. We'll review your current setup, identify quick wins, and outline a growth plan — no strings attached.",
  },
  {
    q: "Do I need to prepare anything before booking?",
    a: "Just have a rough idea of your current marketing setup and goals. We'll guide the conversation from there.",
  },
  {
    q: "Is there really no commitment?",
    a: "Zero commitment. The audit is genuinely free. If we're a good fit, we'll propose a plan. If not, you still walk away with actionable insights.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    revenueRange: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-[#0A0E1A]">
      {/* Hero */}
      <section className="px-6 pt-28 pb-16 text-center">
        <p className="font-mono text-sm uppercase tracking-widest text-[#06D6A0] mb-4">
          Get In Touch
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
          Let&apos;s Build Your Growth Engine
        </h1>
        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
          Book a free audit or send us a message.
        </p>
      </section>

      {/* Two-Column Layout */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT: Contact Form */}
          <div className="bg-[#1A1F35] rounded-2xl p-8 border border-white/5">
            <h2 className="text-2xl font-bold text-[#F8FAFC] mb-6">
              Send Us a Message
            </h2>
            {submitted ? (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">&#10003;</div>
                <h3 className="text-xl font-bold text-[#F8FAFC] mb-2">
                  Message Sent!
                </h3>
                <p className="text-[#94A3B8]">
                  We&apos;ll get back to you within 4 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-[#94A3B8] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#0A0E1A] border border-white/10 rounded-lg px-4 py-3 text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#2563EB] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-[#94A3B8] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#0A0E1A] border border-white/10 rounded-lg px-4 py-3 text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#2563EB] transition-colors"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-[#94A3B8] mb-2">
                    Business Type
                  </label>
                  <select
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full bg-[#0A0E1A] border border-white/10 rounded-lg px-4 py-3 text-[#F8FAFC] focus:outline-none focus:border-[#2563EB] transition-colors"
                  >
                    <option value="" disabled>
                      Select your business type
                    </option>
                    {businessTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-[#94A3B8] mb-2">
                    Monthly Revenue Range
                  </label>
                  <select
                    name="revenueRange"
                    required
                    value={formData.revenueRange}
                    onChange={handleChange}
                    className="w-full bg-[#0A0E1A] border border-white/10 rounded-lg px-4 py-3 text-[#F8FAFC] focus:outline-none focus:border-[#2563EB] transition-colors"
                  >
                    <option value="" disabled>
                      Select revenue range
                    </option>
                    {revenueRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-[#94A3B8] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#0A0E1A] border border-white/10 rounded-lg px-4 py-3 text-[#F8FAFC] placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#2563EB] transition-colors resize-none"
                    placeholder="Tell us about your business and goals..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#2563EB] hover:bg-[#2563EB]/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* RIGHT: Booking & Info */}
          <div className="space-y-8">
            {/* Book a Free Audit Card */}
            <div className="bg-[#1A1F35] rounded-2xl p-8 border border-white/5">
              <h2 className="text-2xl font-bold text-[#F8FAFC] mb-3">
                Book a Free AI Audit
              </h2>
              <p className="text-[#94A3B8] mb-6">
                Get a personalized analysis of your current marketing setup. We&apos;ll
                identify automation opportunities, content gaps, and quick wins to
                accelerate your growth.
              </p>
              <a
                href="#calendly-placeholder"
                className="inline-block bg-[#06D6A0] hover:bg-[#06D6A0]/90 text-[#0A0E1A] font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Schedule on Calendly
              </a>
            </div>

            {/* Contact Info */}
            <div className="bg-[#1A1F35] rounded-2xl p-8 border border-white/5 space-y-5">
              <h3 className="text-lg font-bold text-[#F8FAFC] mb-2">
                Contact Info
              </h3>
              <div className="flex items-start gap-3">
                <span className="text-[#2563EB] text-lg mt-0.5">&#9993;</span>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-[#94A3B8] mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:hello@zero2won.agency"
                    className="text-[#F8FAFC] hover:text-[#2563EB] transition-colors"
                  >
                    hello@zero2won.agency
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#06D6A0] text-lg mt-0.5">&#9742;</span>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-[#94A3B8] mb-1">
                    WhatsApp
                  </p>
                  <a
                    href="#"
                    className="text-[#F8FAFC] hover:text-[#06D6A0] transition-colors"
                  >
                    Message us on WhatsApp
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#F4B942] text-lg mt-0.5">&#9872;</span>
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-[#94A3B8] mb-1">
                    Location
                  </p>
                  <p className="text-[#F8FAFC]">Dhaka, Bangladesh</p>
                  <p className="text-sm text-[#94A3B8]">
                    Serving clients in the US, UK, and Australia
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Response Badge */}
            <div className="bg-[#06D6A0]/10 border border-[#06D6A0]/20 rounded-2xl p-5 flex items-center gap-4">
              <span className="text-2xl text-[#06D6A0]">&#9889;</span>
              <div>
                <p className="font-semibold text-[#F8FAFC]">Quick Response</p>
                <p className="text-sm text-[#94A3B8]">
                  We typically respond within 4 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 pb-24 max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#F8FAFC] text-center mb-10">
          Common Questions Before Booking
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-[#1A1F35] rounded-xl p-6 border border-white/5"
            >
              <h3 className="text-lg font-semibold text-[#F8FAFC] mb-2">
                {faq.q}
              </h3>
              <p className="text-[#94A3B8]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
