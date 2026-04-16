import type { Metadata } from "next";
import { Outfit, DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zero2Won — AI-Powered Business Growth Agency",
  description:
    "We help small businesses scale with AI automation, content systems, and growth marketing — turning zero traction into measurable wins.",
  openGraph: {
    title: "Zero2Won — AI-Powered Business Growth Agency",
    description:
      "We help small businesses scale with AI automation, content systems, and growth marketing — turning zero traction into measurable wins.",
    url: "https://zero2won.com",
    siteName: "Zero2Won",
    locale: "en_US",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zero2Won",
  url: "https://zero2won.agency",
  logo: "https://zero2won.agency/logo.png",
  description:
    "AI-Powered Business Growth Agency helping small businesses scale with automation, content systems, and growth marketing.",
  foundingDate: "2026",
  founders: [
    { "@type": "Person", name: "Rownok Shahriar" },
    { "@type": "Person", name: "Yeasir Arafat" },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  sameAs: [
    "https://linkedin.com/company/zero2won",
    "https://twitter.com/zero2won",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${dmSans.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="relative min-h-full flex flex-col font-dm-sans bg-midnight text-[#F8FAFC]">
        {/* Animated grid overlay */}
        <div
          className="bg-grid-pattern pointer-events-none fixed inset-0 z-0"
          aria-hidden="true"
        />

        <Navbar />

        <main className="relative z-10 flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
