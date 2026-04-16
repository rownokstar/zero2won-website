"use client";

import { useState } from "react";
import Link from "next/link";

const categories = ["All", "AI Strategy", "Automation", "Content Marketing", "Lead Generation"] as const;

type Category = (typeof categories)[number];

interface BlogPost {
  title: string;
  category: Exclude<Category, "All">;
  readTime: string;
  date: string;
  excerpt: string;
}

const posts: BlogPost[] = [
  {
    title: "Why Your Business Needs AI Content Repurposing in 2026",
    category: "AI Strategy",
    readTime: "5 min read",
    date: "April 10, 2026",
    excerpt:
      "Content creation is expensive. AI repurposing lets you turn one piece into dozens — saving time, money, and sanity.",
  },
  {
    title: "The Complete Guide to Marketing Automation for Small Businesses",
    category: "Automation",
    readTime: "8 min read",
    date: "April 5, 2026",
    excerpt:
      "Stop doing repetitive tasks manually. This guide covers everything you need to automate your marketing from day one.",
  },
  {
    title: "How to Generate 30+ Content Pieces from One Video",
    category: "Content Marketing",
    readTime: "6 min read",
    date: "March 28, 2026",
    excerpt:
      "One long-form video can fuel your entire content calendar. Here's the exact system we use for our clients.",
  },
  {
    title: "Lead Generation Funnels That Actually Convert",
    category: "Lead Generation",
    readTime: "7 min read",
    date: "March 20, 2026",
    excerpt:
      "Most funnels leak leads at every stage. We break down the high-converting funnel architecture that turns visitors into customers.",
  },
  {
    title: "The Cost of Not Automating: What You're Losing Every Month",
    category: "AI Strategy",
    readTime: "4 min read",
    date: "March 14, 2026",
    excerpt:
      "Manual processes are silently draining your revenue. We calculated the real cost — and the numbers are staggering.",
  },
  {
    title: "From Zero to 200 Leads: A 60-Day Blueprint",
    category: "Lead Generation",
    readTime: "10 min read",
    date: "March 7, 2026",
    excerpt:
      "A step-by-step playbook we used to generate 200+ qualified leads in 60 days for a coaching business.",
  },
];

const categoryColors: Record<string, string> = {
  "AI Strategy": "bg-[#2563EB]/20 text-[#2563EB]",
  Automation: "bg-[#06D6A0]/20 text-[#06D6A0]",
  "Content Marketing": "bg-[#F4B942]/20 text-[#F4B942]",
  "Lead Generation": "bg-[#A78BFA]/20 text-[#A78BFA]",
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((post) => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0A0E1A]">
      {/* Hero */}
      <section className="px-6 pt-28 pb-16 text-center">
        <p className="font-mono text-sm uppercase tracking-widest text-[#06D6A0] mb-4">
          Our Blog
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#F8FAFC] mb-4">
          Insights &amp; Tutorials
        </h1>
        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
          AI growth strategies, automation guides, and real-world case studies.
        </p>
      </section>

      {/* Category Filter */}
      <div className="px-6 max-w-6xl mx-auto mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-[#2563EB] text-white"
                  : "bg-[#1A1F35] text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1A1F35]/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, i) => (
            <article
              key={i}
              className="bg-[#1A1F35] rounded-2xl overflow-hidden border border-white/5 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#2563EB]/5 transition-all duration-300"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[post.category]}`}
                  >
                    {post.category}
                  </span>
                  <span className="font-mono text-xs text-[#94A3B8]">
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-[#F8FAFC] mb-3 leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-[#94A3B8] mb-6 flex-1">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs text-[#94A3B8]">{post.date}</span>
                  <Link
                    href="#"
                    className="text-sm font-semibold text-[#2563EB] hover:text-[#06D6A0] transition-colors"
                  >
                    Read More &rarr;
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="text-center text-[#94A3B8] mt-12">
            No posts found in this category yet.
          </p>
        )}
      </section>
    </div>
  );
}
