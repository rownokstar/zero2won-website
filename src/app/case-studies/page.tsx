import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Zero2Won — Real Results, Real Businesses",
  description:
    "See how businesses have transformed with AI-powered content, automation, and lead generation systems.",
};

const caseStudies = [
  {
    id: "ecommerce-brand",
    category: "E-commerce",
    title: "E-commerce Brand",
    headline: "From 2 posts/week to 30+ pieces of content",
    challenge:
      "The brand was spending 20+ hours per week creating content manually. Their small marketing team couldn't keep up with the demand for fresh content across Instagram, TikTok, LinkedIn, and their blog — leading to inconsistent posting and declining engagement.",
    solution:
      "We implemented an AI content repurposing pipeline. One weekly video shoot now generates short-form clips, blog posts, social captions, carousels, and Twitter/X threads — all automatically adapted for each platform's format and audience.",
    stats: [
      { value: "1,400%", label: "Content output increase" },
      { value: "3x", label: "Social engagement" },
      { value: "15 hrs", label: "Saved per week" },
    ],
    tools: ["ChatGPT", "Claude", "CapCut", "Canva"],
    accentColor: "#06D6A0",
  },
  {
    id: "coaching-business",
    category: "Coaching",
    title: "Coaching Business",
    headline: "From cold outreach to automated lead machine",
    challenge:
      "The coaching business relied entirely on manual cold outreach and word-of-mouth referrals. Lead flow was unpredictable, follow-ups were inconsistent, and the founder was spending more time on marketing than coaching clients.",
    solution:
      "We built a complete lead generation and nurture system — a high-converting landing page with a lead magnet, automated email sequences, lead scoring, and CRM automation. Warm leads now book calls without any manual intervention.",
    stats: [
      { value: "200+", label: "Leads per month" },
      { value: "40%", label: "Email open rate" },
      { value: "$12K", label: "MRR increase" },
    ],
    tools: ["Make.com", "Kit", "Webflow", "Zapier"],
    accentColor: "#2563EB",
  },
  {
    id: "saas-startup",
    category: "SaaS",
    title: "SaaS Startup",
    headline: "From scattered marketing to systematic growth",
    challenge:
      "The startup had no structured marketing process. Blog posts were sporadic, there was no analytics tracking, and the team had no visibility into which channels were driving demo bookings. Marketing budget was being wasted on guesswork.",
    solution:
      "We implemented a full-stack growth system: AI-powered blog content pipeline, marketing automation workflows, custom analytics dashboards with attribution tracking, and a retargeting funnel to re-engage website visitors.",
    stats: [
      { value: "5x", label: "Blog traffic" },
      { value: "300%", label: "More demo bookings" },
      { value: "60 days", label: "Implementation time" },
    ],
    tools: ["n8n", "Webflow", "Claude", "Custom Dashboards"],
    accentColor: "#F4B942",
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[#0A0E1A]">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2563EB]/10 to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="font-space-mono text-sm uppercase tracking-widest text-[#06D6A0] mb-4">
            Case Studies
          </p>
          <h1 className="font-outfit text-4xl font-bold tracking-tight text-[#F8FAFC] sm:text-5xl lg:text-6xl">
            Real Results.{" "}
            <span className="text-[#2563EB]">Real Businesses.</span>
          </h1>
          <p className="mt-6 font-dm-sans text-lg leading-8 text-[#94A3B8] max-w-2xl mx-auto">
            See how we&apos;ve helped businesses transform with AI-powered
            systems.
          </p>

          {/* Disclaimer Badge */}
          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1A1F35] border border-[rgba(37,99,235,0.15)] px-5 py-2.5">
            <svg
              className="w-4 h-4 text-[#F4B942] shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
            <span className="font-dm-sans text-xs text-[#94A3B8]">
              Results shown are representative of industry benchmarks and
              projected outcomes based on our methodology.
            </span>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="group flex flex-col rounded-2xl border border-[rgba(37,99,235,0.15)] bg-[#1A1F35] overflow-hidden transition-all hover:border-blue-500/30"
            >
              {/* Header */}
              <div
                className="px-6 pt-6 pb-4"
                style={{
                  borderBottom: `1px solid ${study.accentColor}25`,
                }}
              >
                <span
                  className="font-space-mono inline-block text-xs uppercase tracking-wider px-2.5 py-1 rounded-full mb-4"
                  style={{
                    color: study.accentColor,
                    backgroundColor: `${study.accentColor}15`,
                  }}
                >
                  {study.category}
                </span>
                <h2 className="font-outfit text-xl font-bold text-[#F8FAFC]">
                  {study.title}
                </h2>
                <p
                  className="font-dm-sans text-sm font-medium mt-1"
                  style={{ color: study.accentColor }}
                >
                  {study.headline}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 divide-x divide-[rgba(37,99,235,0.15)] bg-[#0A0E1A]/50 px-2 py-5">
                {study.stats.map((stat) => (
                  <div key={stat.label} className="text-center px-2">
                    <p
                      className="font-outfit text-xl font-bold"
                      style={{ color: study.accentColor }}
                    >
                      {stat.value}
                    </p>
                    <p className="font-dm-sans text-[10px] text-[#94A3B8] mt-1 leading-tight">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 px-6 py-6 space-y-5">
                {/* Challenge */}
                <div>
                  <h3 className="font-space-mono text-xs uppercase tracking-wider text-[#F4B942] mb-2">
                    Challenge
                  </h3>
                  <p className="font-dm-sans text-sm text-[#94A3B8] leading-6">
                    {study.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h3 className="font-space-mono text-xs uppercase tracking-wider text-[#06D6A0] mb-2">
                    Solution
                  </h3>
                  <p className="font-dm-sans text-sm text-[#94A3B8] leading-6">
                    {study.solution}
                  </p>
                </div>

                {/* Tools - pushed to bottom */}
                <div className="mt-auto pt-4">
                  <p className="font-space-mono text-[10px] uppercase tracking-wider text-[#94A3B8] mb-2">
                    Tools Used
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {study.tools.map((tool) => (
                      <span
                        key={tool}
                        className="font-space-mono inline-flex items-center rounded-full bg-[#0A0E1A] px-2.5 py-0.5 text-[10px] text-[#2563EB] border border-[rgba(37,99,235,0.15)]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="rounded-2xl border border-[rgba(37,99,235,0.15)] bg-[#1A1F35] p-8 sm:p-12">
            <h2 className="font-outfit text-3xl font-bold text-[#F8FAFC] sm:text-4xl">
              Want results like these?
            </h2>
            <p className="mt-4 font-dm-sans text-lg text-[#94A3B8]">
              Book a free audit and we&apos;ll map out a custom growth plan for
              your business.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#06D6A0] px-8 py-4 font-dm-sans text-base font-bold text-[#0A0E1A] transition-colors hover:bg-[#05c493]"
            >
              Book a Free Audit
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
