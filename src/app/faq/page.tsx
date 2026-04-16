"use client";

import { useState } from "react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What exactly does Zero2Won do?",
    answer:
      "We build AI-powered growth systems for small businesses. From content repurposing to marketing automation to lead generation — we create systems that work on autopilot so you can focus on your business.",
  },
  {
    question: "How is this different from hiring a traditional agency?",
    answer:
      "Traditional agencies sell hours. We sell systems. Our AI-first approach means you get more output, faster results, and lower costs than traditional methods.",
  },
  {
    question: "What tools do you use?",
    answer:
      "We use best-in-class AI and automation tools including ChatGPT, Claude, Make.com, n8n, Webflow, Zapier, and more. We pick the right tool for each job.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Most clients see their first results within 2-4 weeks of system deployment. Full implementation typically takes 60 days.",
  },
  {
    question: "Do I need to be tech-savvy?",
    answer:
      "Not at all. We handle all the technical setup. You just need to show up for strategy calls and approve content.",
  },
  {
    question: "What if I'm not happy with the results?",
    answer:
      "We don't do long-term contracts. If you're not seeing value, you can cancel anytime. But our track record speaks for itself.",
  },
  {
    question: "Do you work with businesses outside the US?",
    answer:
      "Absolutely. We're based in Bangladesh and serve clients globally, with a focus on the US, UK, and Australia.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a free AI audit. We'll analyze your current setup, identify opportunities, and recommend a plan.",
  },
];

function AccordionItem({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#1A1F35] rounded-xl border border-white/5 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
      >
        <span className="text-lg font-semibold text-[#F8FAFC] pr-4">
          {item.question}
        </span>
        <span
          className={`text-[#2563EB] text-xl shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-6 pb-6 text-[#94A3B8] leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#0A0E1A]">
      {/* Hero */}
      <section className="px-6 pt-28 pb-16 text-center">
        <p className="font-mono text-sm uppercase tracking-widest text-[#06D6A0] mb-4">
          FAQ
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
          Everything you need to know about working with Zero2Won.
        </p>
      </section>

      {/* Accordion */}
      <section className="px-6 pb-20 max-w-3xl mx-auto">
        <div className="space-y-4">
          {faqItems.map((item, i) => (
            <AccordionItem key={i} item={item} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 max-w-3xl mx-auto text-center">
        <div className="bg-[#1A1F35] rounded-2xl p-10 border border-white/5">
          <h2 className="text-2xl md:text-3xl font-bold text-[#F8FAFC] mb-4">
            Still have questions?
          </h2>
          <p className="text-[#94A3B8] mb-8 max-w-md mx-auto">
            We&apos;re happy to help. Reach out and we&apos;ll get back to you
            within 4 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-[#1A1F35] border border-white/10 hover:border-[#2563EB] text-[#F8FAFC] font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="#calendly-placeholder"
              className="inline-block bg-[#2563EB] hover:bg-[#2563EB]/90 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Book a Free Audit
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
