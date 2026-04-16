import Link from "next/link";
import ScrollFadeIn from "@/components/ScrollFadeIn";

/* ================================================================
   Zero2Won — Home Page (Server Component)
   ================================================================ */

const toolLogos = [
  "Make.com",
  "n8n",
  "ChatGPT",
  "Claude",
  "Webflow",
  "Zapier",
];

const painPoints = [
  {
    icon: "📢",
    title: "Content Chaos",
    description:
      "You post once, hope for the best, and wonder why nothing's working.",
  },
  {
    icon: "⚙️",
    title: "Manual Everything",
    description:
      "Hours wasted on repetitive tasks that should run themselves.",
  },
  {
    icon: "🔗",
    title: "No Clear System",
    description:
      "You're doing bits of everything but nothing is connected.",
  },
];

const services = [
  {
    icon: "🎬",
    title: "AI Content Repurposing",
    description:
      "One video becomes 30+ pieces of content — automatically.",
  },
  {
    icon: "🤖",
    title: "Marketing Automation",
    description: "Eliminate repetitive tasks. Save 15+ hours/week.",
  },
  {
    icon: "🎯",
    title: "Lead Generation Systems",
    description:
      "Attract, capture, and convert leads while you focus on delivery.",
  },
];

const stats = [
  { value: "30+", label: "Content pieces per video" },
  { value: "15+", label: "Hours saved weekly" },
  { value: "3x", label: "Lead increase" },
  { value: "60", label: "Day setup" },
];

const testimonials = [
  {
    quote:
      "We went from posting once a week to having a full content calendar running on autopilot. Our inbound leads tripled in 60 days.",
    name: "Sarah M.",
    role: "Founder, Digital Agency",
    note: "Representative result based on industry benchmarks",
  },
  {
    quote:
      "Zero2Won automated our entire lead pipeline. We saved over 20 hours a week and closed more deals than ever.",
    name: "James T.",
    role: "CEO, SaaS Startup",
    note: "Representative result based on industry benchmarks",
  },
  {
    quote:
      "The content repurposing alone paid for the service ten times over. One video now fuels our entire marketing for the month.",
    name: "Priya K.",
    role: "Marketing Director",
    note: "Representative result based on industry benchmarks",
  },
];

const steps = [
  {
    number: "01",
    title: "We Diagnose",
    description: "Free audit to find your growth bottleneck",
  },
  {
    number: "02",
    title: "We Build",
    description: "Custom AI systems tailored to your business",
  },
  {
    number: "03",
    title: "Watch It Win",
    description: "Sit back as your automated systems deliver results",
  },
];

export default function Home() {
  return (
    <>
      {/* ──────────────────────────────────────────
          SECTION 1 — HERO
          ────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center bg-midnight overflow-hidden"
        aria-label="Hero"
      >
        {/* Animated grid overlay */}
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none" />

        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-electric-blue/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          {/* Badge */}
          <span className="inline-block mb-6 px-4 py-1.5 text-xs tracking-[0.2em] font-space-mono font-bold uppercase rounded-full border border-electric-blue/30 bg-electric-blue/10 text-electric-blue animate-fade-in">
            AI-Powered Growth Agency
          </span>

          {/* Heading */}
          <h1 className="font-outfit font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 animate-fade-in-delay-1">
            Grow Your Business{" "}
            <span className="text-gradient">While You Sleep</span>
          </h1>

          {/* Subheadline */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-text leading-relaxed mb-10 animate-fade-in-delay-2">
            AI-powered automation that turns your content into leads, and leads
            into wins — on autopilot.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-delay-3">
            <Link
              href="#cta"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-electric-blue text-white font-semibold text-base hover:bg-electric-blue/90 transition-colors shadow-lg shadow-electric-blue/25"
            >
              Book a Free Audit
            </Link>
            <Link
              href="#how-it-works"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-white/20 text-white-off font-semibold text-base hover:border-electric-blue hover:text-electric-blue transition-colors"
            >
              See How It Works
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-hint z-10">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-muted-text"
            aria-hidden="true"
          >
            <path
              d="M12 5v14m0 0l-6-6m6 6l6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Tool logos bar */}
        <div className="relative z-10 w-full border-t border-white/5 mt-auto">
          <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <span className="text-xs text-muted-text font-space-mono uppercase tracking-wider shrink-0">
              Trusted tools we use:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {toolLogos.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 text-xs font-space-mono rounded-md border border-white/10 bg-white/5 text-muted-text"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          SECTION 2 — PROBLEM STATEMENT
          ────────────────────────────────────────── */}
      <section
        className="py-24 sm:py-32 bg-midnight"
        aria-label="Problem Statement"
      >
        <div className="max-w-6xl mx-auto px-6">
          <ScrollFadeIn className="text-center mb-16">
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
              Sound Familiar?
            </h2>
            <p className="text-muted-text text-lg max-w-xl mx-auto">
              Most businesses hit these walls before they find the right system.
            </p>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {painPoints.map((item, i) => (
              <ScrollFadeIn key={item.title} delay={(i + 1) as 1 | 2 | 3}>
                <article className="h-full rounded-2xl border border-card-border bg-card-bg p-8 card-hover">
                  <div className="text-4xl mb-5" aria-hidden="true">
                    {item.icon}
                  </div>
                  <h3 className="font-outfit font-semibold text-xl mb-3 text-white-off">
                    {item.title}
                  </h3>
                  <p className="text-muted-text leading-relaxed">
                    {item.description}
                  </p>
                </article>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          SECTION 3 — SERVICES OVERVIEW
          ────────────────────────────────────────── */}
      <section
        className="py-24 sm:py-32 bg-deep-navy"
        aria-label="Services"
      >
        <div className="max-w-6xl mx-auto px-6">
          <ScrollFadeIn className="text-center mb-16">
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
              What We Build For You
            </h2>
            <p className="text-muted-text text-lg max-w-xl mx-auto">
              End-to-end AI systems that work while you focus on what matters.
            </p>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {services.map((item, i) => (
              <ScrollFadeIn key={item.title} delay={(i + 1) as 1 | 2 | 3}>
                <article className="h-full rounded-2xl border border-card-border bg-card-bg p-8 card-hover flex flex-col">
                  <div className="text-4xl mb-5" aria-hidden="true">
                    {item.icon}
                  </div>
                  <h3 className="font-outfit font-semibold text-xl mb-3 text-white-off">
                    {item.title}
                  </h3>
                  <p className="text-muted-text leading-relaxed mb-6 flex-1">
                    {item.description}
                  </p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-electric-blue font-semibold text-sm hover:underline"
                  >
                    Learn More
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M5 12h14m0 0l-6-6m6 6l-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </article>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          SECTION 4 — RESULTS / SOCIAL PROOF
          ────────────────────────────────────────── */}
      <section
        className="py-24 sm:py-32 bg-midnight"
        aria-label="Results"
      >
        <div className="max-w-6xl mx-auto px-6">
          <ScrollFadeIn className="text-center mb-16">
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
              Results That Speak
            </h2>
          </ScrollFadeIn>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-20">
            {stats.map((stat, i) => (
              <ScrollFadeIn
                key={stat.label}
                delay={((i % 3) + 1) as 1 | 2 | 3}
              >
                <div className="text-center p-6 rounded-2xl border border-card-border bg-card-bg">
                  <span className="block font-outfit font-extrabold text-4xl sm:text-5xl text-gradient mb-2">
                    {stat.value}
                  </span>
                  <span className="text-muted-text text-sm">{stat.label}</span>
                </div>
              </ScrollFadeIn>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {testimonials.map((t, i) => (
              <ScrollFadeIn key={t.name} delay={(i + 1) as 1 | 2 | 3}>
                <blockquote className="h-full rounded-2xl border border-card-border bg-card-bg p-8 flex flex-col card-hover">
                  <svg
                    className="w-8 h-8 text-electric-blue/40 mb-4 shrink-0"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M6 18h4l-2 8h4l2-8h2V10H6v8zm12 0h4l-2 8h4l2-8h2V10H18v8z" />
                  </svg>
                  <p className="text-white-off leading-relaxed mb-6 flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer>
                    <cite className="not-italic">
                      <span className="block font-semibold text-white-off">
                        {t.name}
                      </span>
                      <span className="block text-sm text-muted-text">
                        {t.role}
                      </span>
                    </cite>
                    <span className="block mt-2 text-xs text-muted-text/60 italic">
                      {t.note}
                    </span>
                  </footer>
                </blockquote>
              </ScrollFadeIn>
            ))}
          </div>

          {/* Trust badges */}
          <ScrollFadeIn className="flex flex-wrap items-center justify-center gap-4">
            {[
              "AI-Certified",
              "100+ Automations Built",
              "Data-Driven",
              "GDPR Compliant",
            ].map((badge) => (
              <span
                key={badge}
                className="px-4 py-2 text-xs font-space-mono rounded-full border border-cyan-accent/20 bg-cyan-accent/5 text-cyan-accent uppercase tracking-wider"
              >
                {badge}
              </span>
            ))}
          </ScrollFadeIn>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          SECTION 5 — HOW IT WORKS
          ────────────────────────────────────────── */}
      <section
        id="how-it-works"
        className="py-24 sm:py-32 bg-deep-navy"
        aria-label="How It Works"
      >
        <div className="max-w-5xl mx-auto px-6">
          <ScrollFadeIn className="text-center mb-20">
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
              How Zero2Won Works
            </h2>
            <p className="text-muted-text text-lg max-w-xl mx-auto">
              Three simple steps from stuck to scaling.
            </p>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {steps.map((step, i) => (
              <ScrollFadeIn key={step.number} delay={(i + 1) as 1 | 2 | 3}>
                <div
                  className={`text-center ${
                    i < steps.length - 1 ? "step-connector" : ""
                  }`}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-electric-blue/10 border-2 border-electric-blue text-electric-blue font-space-mono font-bold text-lg mb-6">
                    {step.number}
                  </div>
                  <h3 className="font-outfit font-semibold text-2xl mb-3 text-white-off">
                    {step.title}
                  </h3>
                  <p className="text-muted-text leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          SECTION 6 — FINAL CTA
          ────────────────────────────────────────── */}
      <section
        id="cta"
        className="py-24 sm:py-32 bg-midnight relative overflow-hidden"
        aria-label="Call to Action"
      >
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-electric-blue/10 blur-[160px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <ScrollFadeIn>
            <h2 className="font-outfit font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Ready to Go From{" "}
              <span className="text-gradient">Zero to Won</span>?
            </h2>
            <p className="text-muted-text text-lg sm:text-xl mb-10 max-w-xl mx-auto">
              Let us show you exactly where AI can transform your business — in
              a free, no-obligation audit.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#cta"
                className="inline-flex items-center justify-center px-10 py-4 rounded-lg bg-electric-blue text-white font-bold text-lg hover:bg-electric-blue/90 transition-colors shadow-lg shadow-electric-blue/25"
              >
                Book a Free AI Audit
              </Link>
              <Link
                href="/work"
                className="inline-flex items-center justify-center px-8 py-4 text-muted-text font-semibold hover:text-white-off transition-colors"
              >
                See Our Work
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="ml-2"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14m0 0l-6-6m6 6l-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </ScrollFadeIn>
        </div>
      </section>
    </>
  );
}
