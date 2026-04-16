import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Zero2Won — AI-Powered Business Growth",
  description:
    "AI content repurposing, marketing automation, lead generation, and analytics services that scale your business.",
};

const services = [
  {
    id: "content-repurposing",
    icon: (
      <svg
        className="w-8 h-8 text-[#06D6A0]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9A2.25 2.25 0 0013.5 5.25h-9A2.25 2.25 0 002.25 7.5v9A2.25 2.25 0 004.5 18.75z"
        />
      </svg>
    ),
    title: "AI Content Repurposing",
    tagline: "One video becomes 30+ pieces of content.",
    description:
      "Record once and let AI do the heavy lifting. We take a single video and extract short-form clips, pull-quotes, full blog posts, social captions, Twitter/X threads, and carousel graphics — giving you weeks of content from one recording session.",
    workflow: [
      "Record one long-form video or podcast episode",
      "AI extracts short-form clips optimized per platform",
      "Pull-quotes and key insights turned into social posts",
      "Full blog post drafted and SEO-optimized",
      "Twitter/X threads and LinkedIn carousels generated",
      "Branded graphics and captions created automatically",
    ],
    tools: ["ChatGPT", "Claude", "CapCut", "Canva"],
    cta: "Multiply Your Content",
  },
  {
    id: "marketing-automation",
    icon: (
      <svg
        className="w-8 h-8 text-[#2563EB]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Marketing Automation",
    tagline: "Eliminate manual work. Scale what matters.",
    description:
      "Stop spending hours on repetitive marketing tasks. We build intelligent automation workflows that handle email sequences, social media scheduling, CRM updates, and lead scoring — so your team can focus on strategy and closing deals.",
    workflow: [
      "Automated email sequences triggered by user behavior",
      "Social media scheduling across all platforms",
      "CRM updates and contact enrichment on autopilot",
      "Lead scoring that prioritizes your hottest prospects",
      "Follow-up sequences that never let a lead go cold",
      "Cross-platform workflow orchestration",
    ],
    tools: ["Make.com", "n8n", "Zapier"],
    cta: "Automate Your Marketing",
  },
  {
    id: "lead-generation",
    icon: (
      <svg
        className="w-8 h-8 text-[#F4B942]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
    title: "Lead Generation Systems",
    tagline: "Strategic funnels that attract and convert.",
    description:
      "We design and build complete lead generation systems — from high-converting landing pages and irresistible lead magnets to nurture email sequences and retargeting campaigns. Every piece is engineered to move prospects through your funnel.",
    workflow: [
      "High-converting landing pages designed for your offer",
      "Lead magnets that attract your ideal customers",
      "Nurture email sequences that build trust and authority",
      "Retargeting campaigns to recapture lost visitors",
      "A/B testing to continuously improve conversion rates",
      "Full-funnel analytics and optimization",
    ],
    tools: ["Webflow", "Kit", "Mailchimp"],
    cta: "Build Your Funnel",
  },
  {
    id: "ai-analytics",
    icon: (
      <svg
        className="w-8 h-8 text-[#2563EB]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
    title: "AI-Powered Analytics",
    tagline: "Know exactly what's working — and what's not.",
    description:
      "Stop guessing and start making data-driven decisions. We build custom analytics dashboards that give you real-time visibility into every marketing channel, with AI-powered insights that tell you where to double down and where to cut.",
    workflow: [
      "Custom dashboards tailored to your KPIs",
      "Multi-touch attribution tracking across channels",
      "ROI reporting for every campaign and channel",
      "AI-generated insights and recommendations",
      "Automated weekly and monthly performance reports",
      "Predictive analytics for forecasting growth",
    ],
    tools: ["Custom Dashboards", "AI Models", "Data Pipelines"],
    cta: "Get Clarity on Your Data",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#0A0E1A]">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2563EB]/10 to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="font-space-mono text-sm uppercase tracking-widest text-[#06D6A0] mb-4">
            What We Do
          </p>
          <h1 className="font-outfit text-4xl font-bold tracking-tight text-[#F8FAFC] sm:text-5xl lg:text-6xl">
            Services That Scale{" "}
            <span className="text-[#2563EB]">Your Business</span>
          </h1>
          <p className="mt-6 font-dm-sans text-lg leading-8 text-[#94A3B8] max-w-2xl mx-auto">
            We combine AI tools with proven marketing strategies to help you
            create more content, generate more leads, and grow faster — without
            adding headcount.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="rounded-2xl border border-[rgba(37,99,235,0.15)] bg-[#1A1F35] p-8 sm:p-10 lg:p-12"
            >
              <div
                className={`flex flex-col gap-10 lg:flex-row lg:items-start ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Left / Content Side */}
                <div className="flex-1 space-y-6">
                  {/* Icon + Title */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0A0E1A] border border-[rgba(37,99,235,0.15)]">
                      {service.icon}
                    </div>
                    <div>
                      <h2 className="font-outfit text-2xl font-bold text-[#F8FAFC] sm:text-3xl">
                        {service.title}
                      </h2>
                      <p className="font-dm-sans text-[#06D6A0] text-sm font-medium mt-1">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-dm-sans text-[#94A3B8] leading-7">
                    {service.description}
                  </p>

                  {/* Tools */}
                  <div>
                    <p className="font-space-mono text-xs uppercase tracking-wider text-[#94A3B8] mb-3">
                      Tools We Use
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.tools.map((tool) => (
                        <span
                          key={tool}
                          className="font-space-mono inline-flex items-center rounded-full bg-[#0A0E1A] px-3 py-1 text-xs text-[#2563EB] border border-[rgba(37,99,235,0.15)]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-lg bg-[#2563EB] px-6 py-3 font-dm-sans text-sm font-semibold text-white transition-colors hover:bg-[#1d4ed8]"
                    >
                      {service.cta}
                      <svg
                        className="w-4 h-4"
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

                {/* Right / Checklist Side */}
                <div className="flex-1">
                  <div className="rounded-xl bg-[#0A0E1A] border border-[rgba(37,99,235,0.15)] p-6 sm:p-8">
                    <h3 className="font-outfit text-lg font-semibold text-[#F8FAFC] mb-5">
                      What&apos;s Included
                    </h3>
                    <ul className="space-y-4">
                      {service.workflow.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <svg
                            className="w-5 h-5 text-[#06D6A0] mt-0.5 shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="font-dm-sans text-sm text-[#94A3B8] leading-6">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="px-6 pb-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="rounded-2xl border border-[rgba(37,99,235,0.15)] bg-[#1A1F35] p-8 sm:p-10">
            <p className="font-space-mono text-sm uppercase tracking-widest text-[#F4B942] mb-3">
              Pricing
            </p>
            <h2 className="font-outfit text-2xl font-bold text-[#F8FAFC] sm:text-3xl">
              Flexible packages for every stage of growth
            </h2>
            <p className="mt-4 font-dm-sans text-[#94A3B8]">
              Whether you&apos;re just getting started or ready to scale
              aggressively, we have a plan that fits.
            </p>
            <Link
              href="/pricing"
              className="mt-6 inline-flex items-center gap-2 font-dm-sans text-[#2563EB] font-semibold hover:text-[#06D6A0] transition-colors"
            >
              See our packages
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

      {/* Bottom CTA */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-outfit text-3xl font-bold text-[#F8FAFC] sm:text-4xl">
            Ready to grow smarter?
          </h2>
          <p className="mt-4 font-dm-sans text-lg text-[#94A3B8]">
            Book a free audit and we&apos;ll show you exactly where AI can save
            you time and make you money.
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
      </section>
    </main>
  );
}
