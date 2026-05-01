"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpenText,
  HandHeart,
  HeartHandshake,
  Quote,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

const pillars = [
  {
    title: "Education Support",
    description:
      "We help children and young people stay connected to learning through practical support, school-focused outreach, and encouragement.",
    icon: BookOpenText,
  },
  {
    title: "Women Empowerment",
    description:
      "Our programs create space for women to access skills, confidence, and opportunities that strengthen families and communities.",
    icon: HandHeart,
  },
  {
    title: "Community Care",
    description:
      "We respond with dignity to urgent needs through relief efforts, partnerships, and volunteer-led community initiatives.",
    icon: HeartHandshake,
  },
];

const approach = [
  {
    title: "We listen first",
    description:
      "Every intervention begins with understanding the real needs of people and communities, not assumptions.",
  },
  {
    title: "We respond practically",
    description:
      "From educational support to outreach and empowerment, we focus on actions that people can feel in everyday life.",
  },
  {
    title: "We build for continuity",
    description:
      "Our goal is not one-off visibility, but long-term support systems that continue creating value over time.",
  },
];

const teamHighlights = [
  {
    name: "Program Leadership",
    role: "Mission stewards",
    description:
      "The team shapes each initiative around real needs, clear priorities, and responsible follow-through.",
  },
  {
    name: "Community Volunteers",
    role: "On-ground support",
    description:
      "Our volunteers bring warmth, presence, and practical help to the people and communities we serve.",
  },
  {
    name: "Partners & Supporters",
    role: "Sustained impact",
    description:
      "Through collaboration and generosity, our wider support network helps turn compassion into action.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden px-4 pb-20 pt-32 lg:pb-24 lg:pt-40">
        <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(25,95,74,0.95),rgba(15,23,42,0.92))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_28%)]" />
        <div className="absolute -left-10 top-18 h-56 w-56 rounded-full border border-secondary/25" />
        <div className="absolute -right-12 bottom-8 h-72 w-72 rounded-full bg-secondary/12 blur-3xl" />
        <div className="absolute right-10 top-8 hidden h-72 w-72 rounded-full border border-white/10 lg:block" />
        <div className="absolute left-[18%] top-0 hidden h-64 w-64 lg:block">
          <svg
            viewBox="0 0 260 220"
            className="h-full w-full text-secondary/25"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M15 10c38 27 62 66 78 116M45 10c25 38 55 70 121 104M88 12c32 28 69 44 149 63M52 44c60 0 122 24 178 71M90 82c43 23 72 58 99 114"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className="max-w-2xl text-white"
            >
              <p className="inline-flex items-center gap-2 text-sm font-medium text-secondary">
                <span className="h-2 w-2 rounded-full bg-[#f36a3d]" />
                About Us
              </p>
              <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                A foundation built on compassion, dignity, and practical change.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
                Zita-Onyeka Foundation exists to support women, youth, and
                underserved families through education, empowerment, and
                community-centered outreach that improves everyday life.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#ea5f31]"
                >
                  Partner With Us
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/events"
                  className="inline-flex items-center gap-2 rounded-full border border-white/14 px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/8"
                >
                  See Our Events
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.25 }}
              className="relative mx-auto w-full max-w-xl lg:max-w-none"
            >
              <div className="absolute -left-6 top-10 hidden h-32 w-32 rounded-full border border-secondary/40 lg:block" />
              <div className="relative min-h-[460px]">
                <div className="relative ml-auto h-[420px] w-[82%] overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_30px_90px_rgba(15,23,42,0.18)]">
                  <Image
                    src="/assets/img/zof-team.jpeg"
                    alt="Zita-Onyeka Foundation team members together"
                    fill
                    sizes="(max-width: 1024px) 100vw, 38vw"
                    className="object-cover"
                  />
                </div>

                <div className="absolute bottom-0 left-0 h-[210px] w-[54%] overflow-hidden rounded-[1.75rem] border-4 border-white bg-white shadow-[0_25px_60px_rgba(15,23,42,0.18)]">
                  <Image
                    src="/assets/img/zof_led_community.jpg"
                    alt="Community outreach led by the foundation"
                    fill
                    sizes="(max-width: 1024px) 54vw, 22vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-20 lg:py-24">
        <div className="absolute -left-14 top-12 h-52 w-52 rounded-full bg-primary/6 blur-3xl" />
        <div className="absolute right-0 top-16 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.25 }}
              className="relative"
            >
              <div className="absolute -left-3 top-8 hidden h-24 w-24 rounded-full border border-secondary/50 lg:block" />
              <div className="relative overflow-hidden rounded-[2rem]">
                <Image
                  src="/assets/img/ZOF_WOMEN_SKILL_AQ.jpg"
                  alt="Women participating in a foundation empowerment activity"
                  width={900}
                  height={1000}
                  className="h-auto w-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.08 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <p className="font-caveat text-3xl font-semibold tracking-tight text-[#e6a12d]">
                Who We Are
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
                We serve people with empathy, structure, and purpose.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600">
                The Zita-Onyeka Foundation is a non-profit organization focused
                on helping communities move forward through support that is both
                compassionate and practical. We believe that meaningful change
                happens when people are equipped with resources, encouragement,
                and access to real opportunities.
              </p>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Our work spans outreach, education support, women empowerment,
                and youth-focused programs designed to strengthen dignity,
                resilience, and long-term wellbeing.
              </p>

              <div className="mt-8 space-y-6 border-l-2 border-[#eadfcb] pl-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f36a3d]">
                    Our Mission
                  </p>
                  <p className="mt-2 text-base leading-8 text-slate-600">
                    To uplift lives through education, empowerment, and
                    compassionate community support.
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f36a3d]">
                    Our Vision
                  </p>
                  <p className="mt-2 text-base leading-8 text-slate-600">
                    A society where women, youth, and families have the tools
                    to thrive with dignity.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5ee] px-4 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="inline-flex items-center gap-2 text-sm font-medium text-primary">
              <span className="h-2 w-2 rounded-full bg-[#f36a3d]" />
              What Guides Us
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
              The values behind every program and every outreach.
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {pillars.map(({ title, description, icon: Icon }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.75,
                  ease: "easeOut",
                  delay: index * 0.08,
                }}
                viewport={{ once: true, amount: 0.18 }}
                className="rounded-[1.8rem] border border-[#eadfcb] bg-white p-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fff1e8] text-[#f36a3d]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-3 text-base leading-8 text-slate-600">
                  {description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-20 lg:py-24">
        <div className="absolute left-0 top-10 hidden h-64 w-64 rounded-full border border-secondary/20 lg:block" />

        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="font-caveat text-3xl font-semibold tracking-tight text-[#e6a12d]">
              How We Work
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Our approach is simple, human, and community-rooted.
            </h2>

            <div className="mt-10 space-y-8">
              {approach.map(({ title, description }, index) => (
                <div
                  key={title}
                  className="grid gap-4 border-b border-slate-200 pb-8 sm:grid-cols-[72px_1fr]"
                >
                  <div className="text-4xl font-bold leading-none text-primary/20">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900">
                      {title}
                    </h3>
                    <p className="mt-2 text-base leading-8 text-slate-600">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.08 }}
            viewport={{ once: true, amount: 0.25 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="absolute -right-4 -top-6 h-24 w-24 rounded-full bg-secondary/35 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem]">
              <Image
                src="/assets/img/classroom.jpg"
                alt="Children gathered in a classroom during a support program"
                width={900}
                height={1000}
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="mt-6 rounded-[1.6rem] border border-slate-200 bg-[#fdf8f1] p-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                    <UsersRound className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-lg font-semibold text-slate-900">
                    Volunteer-driven
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Built with people who care deeply about sustained service.
                  </p>
                </div>
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-lg font-semibold text-slate-900">
                    Accountability-focused
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Guided by stewardship, clarity, and measurable impact.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#f8f5ee] px-4 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="inline-flex items-center gap-2 text-sm font-medium text-primary">
              <span className="h-2 w-2 rounded-full bg-[#f36a3d]" />
              Meet Our Team
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
              The people behind the care, structure, and follow-through.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Our work is carried by thoughtful leadership, committed
              volunteers, and supporters who believe communities deserve
              consistency, dignity, and hope.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.22 }}
              className="relative overflow-hidden rounded-[2rem]"
            >
              <Image
                src="/assets/img/zof_volunteer.jpg"
                alt="Zita-Onyeka Foundation team and volunteers"
                width={1100}
                height={900}
                className="h-full w-full object-cover"
              />
            </motion.div>

            <div className="space-y-5">
              {teamHighlights.map(({ name, role, description }, index) => (
                <motion.article
                  key={name}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.75,
                    ease: "easeOut",
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="rounded-[1.6rem] border border-[#e7ddca] bg-white px-6 py-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff1e8] text-[#f36a3d]">
                      <Quote className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-slate-900">
                        {name}
                      </p>
                      <p className="mt-1 text-sm font-medium text-[#f36a3d]">
                        {role}
                      </p>
                      <p className="mt-3 text-base leading-8 text-slate-600">
                        {description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 pt-4">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="inline-flex items-center gap-2 text-sm font-medium text-primary">
            <span className="h-2 w-2 rounded-full bg-[#f36a3d]" />
            Join the Mission
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Help us keep building stronger communities.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Whether you give, volunteer, partner, or advocate, your support
            helps extend dignity, opportunity, and care to more people.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
            >
              Contact Us
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-4 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
            >
              Read Our Stories
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
