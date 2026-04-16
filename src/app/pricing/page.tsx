"use client";

import { useState } from "react";
import Link from "next/link";

const tiers = [
  {
    name: "Starter",
    price: "$500",
    period: "/mo",
    tagline: "Perfect for solopreneurs getting started",
    popular: false,
    features: [
      "AI Content Repurposing (10 pieces/mo)",
      "1 Social Platform Setup",
      "Monthly Strategy Call",
      "Email Support",
    ],
  },
  {
    name: "Growth",
    price: "$1,000",
    period: "/mo",
    tagline: "Best for growing businesses ready to scale",
    popular: true,
    features: [
      "Everything in Starter",
      "AI Content Repurposing (30+ pieces/mo)",
      "3 Social Platforms",
      "Marketing Automation Setup",
      "Lead Generation Funnel",
      "Bi-weekly Strategy Calls",
      "Priority Support",
    ],
  },
  {
    name: "Scale",
    price: "$1,500",
    period: "/mo",
    tagline: "For teams ready to dominate their market",
    popular: false,
    features: [
      "Everything in Growth",
      "Unlimited Content Repurposing",
      "Full Marketing Automation Suite",
      "Advanced Analytics Dashboard",
      "Custom AI Workflows",
      "Weekly Strategy Calls",
      "Dedicated Account Manager",
    ],
  },
];

const faqs = [
  {
    question: "Are there any long-term contracts?",
    answer:
      "No. All plans are month-to-month. You can cancel at any time with 30 days' notice. We believe in earning your business every single month — not locking you in.",
  },
  {
    question: "What happens if I need to change my plan?",
    answer:
      "You can upgrade or downgrade at any time. Changes take effect at the start of your next billing cycle. If you upgrade mid-cycle, we'll prorate the difference.",
  },
  {
    question: "Is there a setup fee?",
    answer:
      "No setup fees, ever. The monthly price is all-inclusive. We invest in onboarding because we know that when you succeed, we succeed.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Most clients see measurable improvements within the first 30 days. Content systems are typically live within the first week, and automation workflows are fully operational by week two.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/5">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-[#06D6A0]"
      >
        <span className="font-outfit text-lg font-semibold pr-4">
          {question}
        </span>
        <span
          className={`shrink-0 text-2xl text-[#94A3B8] transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="font-dm-sans text-[#94A3B8] leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0A0E1A] text-[#F8FAFC]">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-28 sm:py-36 lg:py-44">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2563EB]/10 to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="font-space-mono text-sm uppercase tracking-widest text-[#06D6A0] mb-4">
            Pricing
          </p>
          <h1 className="font-outfit text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            Simple Pricing.{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#06D6A0] bg-clip-text text-transparent">
              Powerful Results.
            </span>
          </h1>
          <p className="font-dm-sans text-lg text-[#94A3B8] max-w-xl mx-auto">
            No hidden fees. No long-term contracts. Just systems that work.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-6 pb-20 sm:pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-3 items-start">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border p-8 transition-all duration-300 ${
                  tier.popular
                    ? "border-[#2563EB] bg-[#1A1F35] shadow-[0_0_40px_rgba(37,99,235,0.15)] lg:scale-105"
                    : "border-white/5 bg-[#1A1F35] hover:border-white/10"
                }`}
              >
                {/* Most Popular badge */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-block rounded-full bg-gradient-to-r from-[#2563EB] to-[#06D6A0] px-5 py-1.5 font-space-mono text-xs font-bold uppercase tracking-wider text-[#0A0E1A]">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="mb-8">
                  <h3 className="font-outfit text-xl font-bold mb-2">
                    {tier.name}
                  </h3>
                  <p className="font-dm-sans text-sm text-[#94A3B8] mb-6">
                    {tier.tagline}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-outfit text-5xl font-bold">
                      {tier.price}
                    </span>
                    <span className="font-dm-sans text-[#94A3B8]">
                      {tier.period}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="mb-10 space-y-4">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 font-dm-sans text-sm text-[#94A3B8]"
                    >
                      <svg
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#06D6A0]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/contact"
                  className={`block w-full rounded-full py-3.5 text-center font-outfit font-semibold transition-all duration-300 ${
                    tier.popular
                      ? "bg-[#2563EB] text-[#F8FAFC] hover:bg-[#1d4ed8] hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]"
                      : "border border-white/10 text-[#F8FAFC] hover:border-[#2563EB] hover:bg-[#2563EB]/10"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Sure CTA */}
      <section className="px-6 py-16 sm:py-20 bg-[#0D1224]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-outfit text-2xl font-bold sm:text-3xl mb-4">
            Not sure which plan?
          </h2>
          <p className="font-dm-sans text-[#94A3B8] mb-8">
            Book a free audit and we&apos;ll recommend the right fit.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full border border-[#F4B942] px-8 py-3.5 font-outfit font-semibold text-[#F4B942] transition-all duration-300 hover:bg-[#F4B942] hover:text-[#0A0E1A]"
          >
            Book a Free Audit
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-14">
            <p className="font-space-mono text-sm uppercase tracking-widest text-[#06D6A0] mb-4">
              FAQ
            </p>
            <h2 className="font-outfit text-3xl font-bold sm:text-4xl">
              Common Pricing Questions
            </h2>
          </div>

          <div>
            {faqs.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
