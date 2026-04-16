import Link from "next/link";

const values = [
  {
    title: "AI-First, Not AI-Hype",
    description:
      "We use AI where it genuinely moves the needle — not as a buzzword to inflate proposals.",
  },
  {
    title: "Results Over Retainers",
    description:
      "We measure success in growth metrics, not hours billed. If it doesn't drive results, we don't do it.",
  },
  {
    title: "Global Reach, Lean Operations",
    description:
      "Based in Dhaka, serving the world. Low overhead means more budget goes toward your growth.",
  },
  {
    title: "Transparency Always",
    description:
      "No black-box strategies. You see exactly what we do, why we do it, and how it performs.",
  },
];

const founders = [
  {
    name: "Rownok Shahriar",
    role: "Founder & CEO",
    initials: "RS",
  },
  {
    name: "Yeasir Arafat",
    role: "Co-Founder & Operations",
    initials: "YA",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0A0E1A] text-[#F8FAFC]">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-28 sm:py-36 lg:py-44">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2563EB]/10 to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="font-space-mono text-sm uppercase tracking-widest text-[#06D6A0] mb-4">
            About Us
          </p>
          <h1 className="font-outfit text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            The Story Behind{" "}
            <span className="bg-gradient-to-r from-[#2563EB] to-[#06D6A0] bg-clip-text text-transparent">
              Zero2Won
            </span>
          </h1>
        </div>
      </section>

      {/* Founder Story */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl space-y-8">
          <h2 className="font-outfit text-3xl font-bold sm:text-4xl">
            How it started
          </h2>
          <p className="font-dm-sans text-lg leading-relaxed text-[#94A3B8]">
            Founded by{" "}
            <span className="text-[#F8FAFC] font-semibold">
              Rownok Shahriar
            </span>{" "}
            &amp;{" "}
            <span className="text-[#F8FAFC] font-semibold">
              Yeasir Arafat
            </span>
            . Based in Dhaka, Bangladesh.
          </p>
          <p className="font-dm-sans text-lg leading-relaxed text-[#94A3B8]">
            We started Zero2Won because we saw a gap — small business owners
            drowning in marketing tasks while AI tools that could help them were
            going unused. We&apos;re not a traditional agency. We&apos;re AI
            enthusiasts who turned their obsession with automation into a growth
            engine for businesses worldwide.
          </p>
          <p className="font-dm-sans text-lg leading-relaxed text-[#94A3B8]">
            You won&apos;t find Fortune 500 tech backgrounds here. What you will
            find is{" "}
            <span className="text-[#F4B942] font-semibold">passion</span>,{" "}
            <span className="text-[#06D6A0] font-semibold">AI expertise</span>,
            and a{" "}
            <span className="text-[#2563EB] font-semibold">
              relentless drive
            </span>{" "}
            to prove that the best growth systems don&apos;t need the biggest
            budgets.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 py-20 sm:py-28 bg-[#0D1224]">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-space-mono text-sm uppercase tracking-widest text-[#06D6A0] mb-4">
            The Team
          </p>
          <h2 className="font-outfit text-3xl font-bold sm:text-4xl mb-16">
            Meet the Founders
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 max-w-2xl mx-auto">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="group rounded-2xl border border-white/5 bg-[#1A1F35] p-8 text-center transition-all duration-300 hover:border-[#2563EB]/30 hover:shadow-[0_0_30px_rgba(37,99,235,0.08)]"
              >
                {/* Photo placeholder */}
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#2563EB] to-[#06D6A0] text-2xl font-bold font-outfit text-[#0A0E1A] transition-transform duration-300 group-hover:scale-105">
                  {founder.initials}
                </div>
                <h3 className="font-outfit text-xl font-bold mb-1">
                  {founder.name}
                </h3>
                <p className="font-space-mono text-sm text-[#94A3B8]">
                  {founder.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <p className="font-space-mono text-sm uppercase tracking-widest text-[#06D6A0] mb-4">
              What We Believe
            </p>
            <h2 className="font-outfit text-3xl font-bold sm:text-4xl">
              Our Values
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="rounded-2xl border border-white/5 bg-[#1A1F35] p-8 transition-all duration-300 hover:border-[#06D6A0]/20"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#06D6A0]/10 font-space-mono text-sm font-bold text-[#06D6A0]">
                  0{index + 1}
                </div>
                <h3 className="font-outfit text-xl font-bold mb-3">
                  {value.title}
                </h3>
                <p className="font-dm-sans text-[#94A3B8] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 py-20 sm:py-28 bg-[#0D1224]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-space-mono text-sm uppercase tracking-widest text-[#F4B942] mb-6">
            Our Mission
          </p>
          <blockquote className="font-outfit text-2xl font-bold leading-snug sm:text-3xl lg:text-4xl">
            &ldquo;We exist to make AI-powered growth accessible to every
            ambitious business owner, regardless of their starting point.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-outfit text-3xl font-bold sm:text-4xl mb-6">
            Want to work with us?
          </h2>
          <p className="font-dm-sans text-lg text-[#94A3B8] mb-10">
            Let&apos;s talk about how Zero2Won can accelerate your growth.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-[#2563EB] px-8 py-4 font-outfit font-semibold text-[#F8FAFC] transition-all duration-300 hover:bg-[#1d4ed8] hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]"
          >
            Book a Call
          </Link>
        </div>
      </section>
    </div>
  );
}
