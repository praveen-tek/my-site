"use client";

import Image from "next/image";
import { useState } from "react";
import logo from "./logo.svg";
import {
  ArrowRight,
  ArrowSquareOut,
  Briefcase,
  Certificate,
  Check,
  Code,
  Copy,
  Cpu,
  EnvelopeSimple,
  GithubLogo,
  MapPin,
  Phone,
  X,
} from "@phosphor-icons/react";

interface AccordionItem {
  id: string;
  title: string;
  subtitle?: string;
  tags?: string[];
  content: string[];
}

interface SectionData {
  title: string;
  description: string;
  items: AccordionItem[];
}

export default function Home() {
  // Accordion open states initialized so key projects and experiences are visible on first load
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "proj-aloext": true,
    "exp-delta": true,
    "skill-languages": true,
    "skill-frameworks": true,
  });

  const [consoleOpen, setConsoleOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("praveen.kumar.tek@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Fallback
    }
  };

  const copyPhone = async () => {
    try {
      await navigator.clipboard.writeText("+919627887345");
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } catch {
      // Fallback
    }
  };

  const sections: SectionData[] = [
    {
      title: "Projects",
      description:
        "Full-stack browser extensions, AI exam simulation, and open-source embedded hardware",
      items: [
        {
          id: "proj-aloext",
          title: "AloeXT",
          subtitle: "Full-Stack Browser Extension Product · 2024 – Present",
          tags: [
            "WXT",
            "Next.js",
            "Hono",
            "Supabase",
            "Drizzle ORM",
            "Better Auth",
            "Dodo Payments",
          ],
          content: [
            "Architected and engineered a full-stack browser extension product featuring a Chrome extension built with WXT, paired with a Next.js web app and high-throughput Hono backend.",
            "Implemented multi-tier subscription billing (Free, Aloe Lite, Aloe Pro, Aloe Neural) powered by Dodo Payments and Supabase Edge Functions for webhook processing.",
            "Solved cross-origin authentication challenges by reusing Better Auth session cookies from the web app directly inside the extension, mirroring the Ground News architecture pattern.",
          ],
        },
        {
          id: "proj-mockcrack",
          title: "MockCrack",
          subtitle: "AI-Driven CBT Examination Platform · 2024",
          tags: ["Next.js", "AI Analytics", "CBT Simulation", "Adaptive Testing"],
          content: [
            "Designed and developed an all-in-one AI-driven learning and examination platform simulating real-time Computer Based Test (CBT) environments for competitive exam preparation.",
            "Bridged the gap between independent study and test-day performance with adaptive question distribution and detailed diagnostic analytics.",
          ],
        },
        {
          id: "proj-mangermaki",
          title: "Manger Maki",
          subtitle: "Browser Extension & Knowledge Management · 2024",
          tags: ["Next.js", "TypeScript", "Tailwind CSS", "pnpm", "GitHub Actions"],
          content: [
            "Built a browser extension and knowledge management tool structured as a modern Next.js monorepo.",
            "Established automated CI/CD release pipelines via GitHub Actions with continuous deployment to GitHub Pages.",
          ],
        },
        {
          id: "proj-clack",
          title: "CLACK — Open Source Low Profile Keyboard",
          subtitle: "Hardware & Embedded Firmware · 2023",
          tags: ["Raspberry Pi Pico", "KMK Firmware", "Python", "3D CAD"],
          content: [
            "Designed and fabricated an open-source low-profile mechanical keyboard with a 75% layout and integrated macro pad with dual rotary encoders.",
            "Delivered the complete engineering package including custom KMK / CircuitPython firmware, keymap configuration files, and 3D enclosure CAD files.",
          ],
        },
        {
          id: "proj-opensource",
          title: "Open-Source Contributions",
          subtitle: "Community Collaboration & Systems · Ongoing",
          tags: ["Video Streaming", "Open Phone Project", "Community OSS"],
          content: [
            "Contributed to an open-source video streaming platform and an open-source phone project.",
            "Developed new features, resolved issues, and enhanced software architecture in collaboration with public developer communities.",
          ],
        },
      ],
    },
    {
      title: "Experience",
      description:
        "Selective innovation fellowships, commercial tech consulting, and builder programs",
      items: [
        {
          id: "exp-delta",
          title: "Residency Delta Program",
          subtitle: "Selected Participant · Remote · Oct. 2025 – Present",
          content: [
            "Selected from 1,000+ applicants for a 21-day intensive program focused on innovation, high-leverage leadership, and impactful project development under expert mentorship.",
          ],
        },
        {
          id: "exp-wealthy-bites",
          title: "Wealthy Bites",
          subtitle: "Developer & Tech Consultant · India · Jul. 2024 – Jul. 2025",
          content: [
            "Collaborated with a homegrown chocolate brand to build and maintain internal web apps and operational software tools.",
            "Oversaw core tech infrastructure, workflow automation, and digital brand operations.",
          ],
        },
        {
          id: "exp-buildspace",
          title: "Buildspace Days & Nights",
          subtitle: "Participant · Remote · Summer 2024",
          content: [
            "Built and shipped products during an intensive summer entrepreneurship program.",
            "Received direct mentorship on technical development, rapid product prototyping, and business strategy.",
          ],
        },
      ],
    },
    {
      title: "Skills & Stack",
      description:
        "Full-stack web, extensions, databases, and physical computing",
      items: [
        {
          id: "skill-languages",
          title: "Programming Languages",
          subtitle: "JavaScript, Python, TypeScript",
          content: [
            "TypeScript & JavaScript for strictly typed full-stack applications, modern browser extensions, and backend microservices.",
            "Python for embedded microcontroller firmware (KMK/CircuitPython), automation scripts, and systems engineering.",
          ],
        },
        {
          id: "skill-frameworks",
          title: "Frameworks & Libraries",
          subtitle: "React, Next.js, Node.js, Hono, WXT",
          content: [
            "React & Next.js for high-performance user interfaces and server-rendered architectures.",
            "Hono & Node.js for edge-native, sub-millisecond API endpoints and webhook microservices.",
            "WXT for modern, cross-browser web extension development with type safety.",
          ],
        },
        {
          id: "skill-tools",
          title: "Tools & Platforms",
          subtitle: "Supabase, Drizzle ORM, Better Auth, Dodo Payments, ngrok, Git, GitHub",
          content: [
            "Supabase & Drizzle ORM for type-safe relational schemas, SQL migrations, and Edge Functions.",
            "Better Auth for secure cookie-based session management across domains.",
            "Dodo Payments for global multi-tier SaaS checkout and subscription lifecycles.",
          ],
        },
        {
          id: "skill-creative",
          title: "Creative & Hardware Design",
          subtitle: "UI/UX Design, 2D/3D Design, Blender, Raspberry Pi Pico",
          content: [
            "UI/UX Design: Clean typography, micro-interactions, responsive editorial layouts.",
            "2D/3D & Hardware: 3D CAD modeling in Blender, Raspberry Pi Pico embedded electronics, and KMK keyboard firmware.",
          ],
        },
        {
          id: "skill-leadership",
          title: "Leadership & Collaboration",
          subtitle: "Team Leadership, Problem-Solving, Product Management",
          content: [
            "Demonstrated track record of coordinating multi-contributor projects, leading game development teams, and managing products from conception to deployment.",
          ],
        },
      ],
    },
    {
      title: "Education & Honors",
      description:
        "Academic qualifications, leadership initiatives, and recognized awards",
      items: [
        {
          id: "edu-theosophical",
          title: "Theosophical Inter College",
          subtitle: "Higher Secondary Certificate · Etawah, UP · Jul. 2023 – May 2025",
          content: [
            "Actively participated in a student coding community, contributing to multiple development projects.",
            "Led a team to build a collaborative game, overseeing design, development, and team coordination.",
          ],
        },
        {
          id: "edu-gyansthali",
          title: "Gyan Sthali Academy",
          subtitle: "Secondary School Certificate · Etawah, UP · Apr. 2021 – Jul. 2023",
          content: [
            "Led and participated in multiple science projects including three major school-fair projects, one of which received city-level recognition.",
            "Developed teamwork, leadership, and technical presentation skills through collaborative exhibits.",
          ],
        },
        {
          id: "edu-awards",
          title: "Awards & Achievements",
          subtitle: "Etawah Mahotsav & School Competitions · Dec. 2021",
          content: [
            "Best Performance Award (Etawah Mahotsav & Science Exhibition): Led a team to design and develop an innovative science model that earned city-level recognition for innovation and design.",
            "Art Competition Winner (Certificate for Creativity): Awarded for outstanding artistic skills and creative expression in a school-level competition.",
          ],
        },
        {
          id: "edu-languages",
          title: "Languages",
          subtitle: "Hindi & English",
          content: [
            "Hindi: Full Professional Proficiency.",
            "English: Full Professional Proficiency.",
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased selection:bg-neutral-900 selection:text-white">
      {/* 
        Container with 20% margin on desktop (lg:mx-[20%] / w-[60%])
        Scales gracefully on mobile and tablet
      */}
      <div className="w-full px-5 sm:px-8 md:px-10 lg:w-[60%] lg:mx-[20%] lg:px-0 pt-10 sm:pt-14 pb-16">
        {/* Main Grid: Left Column & Right Column */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:divide-x md:divide-neutral-200">
          {/* ================= LEFT COLUMN ================= */}
          <section className="md:col-span-5 md:pr-10 pb-12 md:pb-6 flex flex-col justify-between">
            <div>
              {/* Brand Logo */}
              <div className="mb-8">
                <Image
                  src={logo}
                  alt="Praveen Kumar Logo"
                  width={36}
                  height={36}
                  priority
                  className="h-9 w-auto"
                />
              </div>

              {/* Eyebrow Label */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[11px] font-semibold tracking-wider text-neutral-500 uppercase">
                  SYSTEM SPECIFICATION / RESUME
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-[2.65rem] font-medium tracking-tight text-neutral-900 leading-[1.08] mb-6">
                Meet Praveen
                <span className="block text-neutral-700 font-normal mt-1 text-[1.35rem] sm:text-[1.6rem] leading-[1.25]">
                  Full-stack developer, extension builder &amp; systems tinkerer
                </span>
              </h1>

              {/* Editorial Bio Body */}
              <div className="space-y-4 text-[0.84rem] leading-[1.62] text-neutral-600 font-normal">
                <p>
                  I build end-to-end web applications, production browser
                  extensions, AI-driven learning platforms, and open-source
                  embedded hardware.
                </p>

                <p>
                  Selected from <strong>1,000+ applicants</strong> for the 21-day{" "}
                  <strong>Residency Delta Program</strong>, an alumnus of{" "}
                  <strong>Buildspace Days &amp; Nights</strong>, and former
                  developer &amp; tech consultant for chocolate brand{" "}
                  <strong>Wealthy Bites</strong>.
                </p>

                <p>
                  Currently developing <strong>AloeXT</strong> — a full-stack
                  browser extension SaaS with WXT, Next.js, Hono, Supabase, and
                  Dodo Payments, featuring cross-origin cookie authentication.
                  On the hardware side, I designed <strong>CLACK</strong>, an
                  open-source 75% low-profile mechanical keyboard with KMK firmware
                  on Raspberry Pi Pico.
                </p>

                <p className="pt-1 text-neutral-700">
                  Reliable software, thoughtful design &amp; honest engineering,
                </p>
              </div>

              {/* Location & Quick Meta */}
              <div className="mt-6 pt-5 border-t border-neutral-100 space-y-2 text-xs text-neutral-600">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-neutral-400 shrink-0" />
                  <span>Vijay Nagar, Etawah, UP, India · 206001</span>
                </div>
                <div className="flex items-center gap-2">
                  <Briefcase size={14} className="text-neutral-400 shrink-0" />
                  <span>Residency Delta Program (Participant)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Certificate size={14} className="text-neutral-400 shrink-0" />
                  <span>Hindi &amp; English (Full Professional)</span>
                </div>
              </div>
            </div>

            {/* Handwritten Signature and Sign-off */}
            <div className="mt-8 pt-2">
              <div className="w-48 h-14 relative my-2">
                <svg
                  viewBox="0 0 200 60"
                  className="w-full h-full text-neutral-900"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-label="Signature of Praveen Kumar"
                >
                  {/* Organic cursive signature stroke: Praveen */}
                  <path d="M12 42 C16 28, 22 14, 25 8 C27 4, 33 6, 31 16 C29 25, 20 45, 18 52 C17 55, 20 54, 24 45 C28 35, 34 30, 42 32 C48 34, 45 42, 49 41 C53 40, 56 31, 62 33 C66 34, 65 42, 70 41 C76 40, 80 27, 84 35 C88 41, 95 38, 102 33 C108 30, 114 36, 119 35 C124 34, 127 28, 132 30 C138 32, 142 41, 148 40" />
                  {/* Crossing loop and flourish */}
                  <path d="M15 24 C40 22, 90 20, 150 25 C162 26, 175 29, 182 34 C187 37, 182 43, 172 44 C158 45, 140 43, 130 46" />
                  <path d="M78 20 C85 14, 94 12, 100 15 C104 17, 98 26, 92 28" />
                </svg>
              </div>
              <p className="text-[0.84rem] text-neutral-800 font-medium">
                — Praveen Kumar
              </p>
            </div>
          </section>

          {/* ================= RIGHT COLUMN ================= */}
          <section className="md:col-span-7 md:pl-10 space-y-10 md:space-y-12">
            {sections.map((section, sIdx) => (
              <div
                key={section.title}
                className={sIdx !== 0 ? "pt-10 border-t border-neutral-200" : ""}
              >
                {/* 2-column layout inside each section: Label on left, Accordion on right */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 sm:gap-6">
                  {/* Section Label & Subtitle */}
                  <div className="sm:col-span-5">
                    <h2 className="text-[1.35rem] font-medium tracking-tight text-neutral-900">
                      {section.title}
                    </h2>
                    <p className="text-[0.82rem] leading-[1.4] text-neutral-500 mt-1.5 max-w-[240px]">
                      {section.description}
                    </p>
                  </div>

                  {/* Accordion Items List */}
                  <div className="sm:col-span-7 space-y-1.5">
                    {section.items.map((item) => {
                      const isOpen = !!openItems[item.id];
                      return (
                        <div
                          key={item.id}
                          className={`-mx-2.5 px-2.5 rounded-sm transition-colors duration-150 ${
                            isOpen
                              ? "bg-neutral-100/90 py-2"
                              : "py-1.5 hover:bg-neutral-50/70"
                          }`}
                        >
                          <button
                            type="button"
                            onClick={() => toggleItem(item.id)}
                            className="w-full text-left flex items-start justify-between gap-3 group cursor-pointer focus:outline-none"
                            aria-expanded={isOpen}
                          >
                            <div className="flex-1 pr-1">
                              <span
                                className={`text-[0.88rem] leading-snug text-neutral-900 group-hover:text-black transition-colors block ${
                                  isOpen ? "font-medium" : "font-normal"
                                }`}
                              >
                                {item.title}
                              </span>
                              {item.subtitle && (
                                <span className="text-[0.75rem] text-neutral-500 block mt-0.5 leading-tight">
                                  {item.subtitle}
                                </span>
                              )}
                            </div>
                            <span className="text-neutral-500 group-hover:text-neutral-900 text-base font-light select-none transition-transform duration-150 leading-none pt-0.5">
                              {isOpen ? "−" : "+"}
                            </span>
                          </button>

                          {/* Accordion Content */}
                          {isOpen && (
                            <div className="pt-2 pb-1 space-y-2 text-[0.81rem] leading-[1.58] text-neutral-600 animate-in fade-in duration-150">
                              {/* Optional Tags */}
                              {item.tags && item.tags.length > 0 && (
                                <div className="flex flex-wrap gap-1.5 pb-1">
                                  {item.tags.map((tag) => (
                                    <span
                                      key={tag}
                                      className="inline-block px-1.5 py-0.5 text-[10px] font-medium bg-neutral-200/70 text-neutral-700 rounded"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}

                              {/* Bullet points */}
                              <ul className="space-y-1.5 pl-3 list-disc marker:text-neutral-400">
                                {item.content.map((point, pIdx) => (
                                  <li key={pIdx} className="leading-relaxed">
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>

        {/* ================= BOTTOM BAR / BANNER ================= */}
        <div className="mt-14 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl sm:text-[1.75rem] font-medium tracking-tight text-neutral-900">
              Ready to collaborate or test my work?
            </h3>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-[0.82rem] text-neutral-600">
              <a
                href="https://github.com/praveen-tek"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral-900 underline-offset-4 hover:underline transition-colors flex items-center gap-1.5"
              >
                <GithubLogo size={14} />
                github.com/praveen-tek
              </a>
              <span className="text-neutral-300">•</span>
              <a
                href="mailto:praveen.kumar.tek@gmail.com"
                className="hover:text-neutral-900 underline-offset-4 hover:underline transition-colors flex items-center gap-1.5"
              >
                <EnvelopeSimple size={14} />
                praveen.kumar.tek@gmail.com
              </a>
              <span className="text-neutral-300">•</span>
              <a
                href="tel:+919627887345"
                className="hover:text-neutral-900 underline-offset-4 hover:underline transition-colors flex items-center gap-1.5"
              >
                <Phone size={14} />
                +91 9627887345
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://cal.com/praveen-tek/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#111827] text-white px-5 py-2.5 text-sm font-medium hover:bg-black transition-colors rounded-none cursor-pointer shadow-sm active:translate-y-[1px]"
            >
              <span>Book a Call</span>
              <ArrowSquareOut size={15} weight="bold" />
            </a>
          </div>
        </div>
      </div>

      {/* ================= INTERACTIVE PROJECT CONSOLE MODAL ================= */}
      {consoleOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4"
          onClick={() => setConsoleOpen(false)}
        >
          <div
            className="w-full max-w-xl bg-white border border-neutral-200 p-6 sm:p-8 shadow-xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-4 border-b border-neutral-200 mb-6">
              <div>
                <p className="text-[11px] font-semibold tracking-wider text-neutral-500 uppercase">
                  PROJECT CONSOLE / PORTFOLIO
                </p>
                <h3 className="text-xl font-medium tracking-tight text-neutral-900 mt-1">
                  Praveen Kumar&apos;s Engineering Work
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setConsoleOpen(false)}
                className="text-neutral-400 hover:text-neutral-900 p-1 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-3 mb-6">
              {/* AloeXT */}
              <div className="p-3.5 border border-neutral-200 hover:border-neutral-900 transition-all bg-white">
                <div className="flex items-center justify-between text-sm font-medium text-neutral-900">
                  <span className="flex items-center gap-2">
                    <Code size={16} className="text-neutral-700" />
                    AloeXT
                  </span>
                  <span className="text-[11px] font-mono uppercase px-2 py-0.5 bg-neutral-100 text-neutral-700">
                    2024 – Present
                  </span>
                </div>
                <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                  Full-stack browser extension SaaS (Chrome WXT + Next.js + Hono). Multi-tier subscription billing with Dodo Payments, Supabase Edge Functions, and cross-origin auth cookie synchronization.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {["WXT", "Next.js", "Hono", "Supabase", "Better Auth", "Dodo Payments"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-1.5 py-0.5 bg-neutral-100 text-neutral-600"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* MockCrack */}
              <div className="p-3.5 border border-neutral-200 hover:border-neutral-900 transition-all bg-white">
                <div className="flex items-center justify-between text-sm font-medium text-neutral-900">
                  <span className="flex items-center gap-2">
                    <Cpu size={16} className="text-neutral-700" />
                    MockCrack
                  </span>
                  <span className="text-[11px] font-mono uppercase px-2 py-0.5 bg-neutral-100 text-neutral-700">
                    2024
                  </span>
                </div>
                <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                  AI-driven learning and Computer Based Test (CBT) examination platform simulating real-time competitive exam testbeds with adaptive questioning and deep performance analytics.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {["Next.js", "AI Analytics", "Adaptive CBT", "TypeScript"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-1.5 py-0.5 bg-neutral-100 text-neutral-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Manger Maki */}
              <div className="p-3.5 border border-neutral-200 hover:border-neutral-900 transition-all bg-white">
                <div className="flex items-center justify-between text-sm font-medium text-neutral-900">
                  <span className="flex items-center gap-2">
                    <Code size={16} className="text-neutral-700" />
                    Manger Maki
                  </span>
                  <span className="text-[11px] font-mono uppercase px-2 py-0.5 bg-neutral-100 text-neutral-700">
                    2024
                  </span>
                </div>
                <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                  Browser extension and knowledge management tool with a Next.js monorepo architecture, CI/CD automated via GitHub Actions, and deployment to GitHub Pages.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {["Next.js", "TypeScript", "Tailwind CSS", "GitHub Actions"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-1.5 py-0.5 bg-neutral-100 text-neutral-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* CLACK */}
              <div className="p-3.5 border border-neutral-200 hover:border-neutral-900 transition-all bg-white">
                <div className="flex items-center justify-between text-sm font-medium text-neutral-900">
                  <span className="flex items-center gap-2">
                    <Cpu size={16} className="text-neutral-700" />
                    CLACK Keyboard
                  </span>
                  <span className="text-[11px] font-mono uppercase px-2 py-0.5 bg-neutral-100 text-neutral-700">
                    2023
                  </span>
                </div>
                <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                  Open-source low-profile 75% mechanical keyboard and macro pad with dual rotary encoders, powered by KMK firmware on Raspberry Pi Pico, with 3D CAD case designs.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2.5">
                  {["Raspberry Pi Pico", "KMK Firmware", "Python", "Blender CAD"].map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-1.5 py-0.5 bg-neutral-100 text-neutral-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Open-Source Contributions */}
              <div className="p-3.5 border border-neutral-200 bg-neutral-50/70">
                <div className="flex items-center justify-between text-sm font-medium text-neutral-900">
                  <span>Open-Source Ecosystem Contributions</span>
                  <span className="text-[11px] font-mono text-neutral-500">Ongoing</span>
                </div>
                <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                  Active contributions to community open-source projects including a video streaming platform and an open-source phone project.
                </p>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="pt-4 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-700 hover:text-black border border-neutral-200 px-3 py-2 hover:border-neutral-400 transition-colors cursor-pointer bg-white"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={14} className="text-emerald-600" />
                      <span>Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={copyPhone}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-700 hover:text-black border border-neutral-200 px-3 py-2 hover:border-neutral-400 transition-colors cursor-pointer bg-white"
                >
                  {copiedPhone ? (
                    <>
                      <Check size={14} className="text-emerald-600" />
                      <span>Phone Copied!</span>
                    </>
                  ) : (
                    <>
                      <Phone size={14} />
                      <span>Copy Phone</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/praveen-tek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 border border-neutral-200 px-3 py-2 text-xs font-medium text-neutral-700 hover:text-neutral-900 hover:border-neutral-400 transition-colors bg-white"
                >
                  <GithubLogo size={14} />
                  <span>GitHub</span>
                  <ArrowSquareOut size={12} />
                </a>

                <a
                  href="https://cal.com/praveen-tek/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#111827] text-white px-4 py-2 text-xs font-medium hover:bg-black transition-colors"
                >
                  <span>Book a Call</span>
                  <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
