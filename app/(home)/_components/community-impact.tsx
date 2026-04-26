"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  HandPlatter,
  HeartHandshake,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

const stats = [
  {
    value: "50+",
    label: "Communities Supported",
    icon: HeartHandshake,
  },
  {
    value: "2000+",
    label: "Meals Served",
    icon: HandPlatter,
  },
  {
    value: "100+",
    label: "Volunteers",
    icon: UsersRound,
  },
  {
    value: "100%",
    label: "Non-Profit & Transparent",
    icon: ShieldCheck,
  },
];

const highlights = [
  "Relief outreach",
  "Education support",
  "Women empowerment",
  "Volunteer-led service",
];

export const CommunityImpact = () => {
  return (
    <section className="overflow-visible bg-white px-4 py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[97%]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-10 text-white shadow-[0_35px_90px_rgba(15,23,42,0.12)] md:px-10 lg:px-14 lg:py-12"
        >
          {/* bg color start */}
          <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(25,95,74,0.95),rgba(15,23,42,0.9))]" />
          <div className="absolute -right-16 top-10 h-40 w-40 rounded-full border border-white/10" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-secondary/15 blur-3xl" />
          {/* bg color end */}

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_28%)]" />
          <div className="absolute left-0 top-0 hidden h-72 w-72 rounded-full border border-secondary/20 lg:block" />

          <div className="absolute left-[22%] top-0 hidden h-64 w-64 lg:block">
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

          <div className="absolute -right-2 -top-5 w-full max-w-[35%] hidden lg:block">
            <div className="relative h-full w-full">
              <Image
                src="/assets/img/polygon.png"
                alt=""
                className="object-cover object-left w-full h-auto"
                width={800}
                height={800}
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_45%)]" />
            </div>
          </div>

          <div className="relative z-10 mx-auto grid max-w-7xl gap-10 pt-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:pt-10">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-sm font-medium text-secondary">
                <span className="h-2 w-2 rounded-full bg-orange-400" />
                Volunteer movement
              </p>
              <h2 className="mt-4 max-w-lg text-4xl font-bold leading-tight sm:text-5xl">
                Communities making a difference together.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/80">
                Our volunteer network fuels outreach, relief, education, and
                women-focused support programs across communities. Every person
                who joins expands what we can do on the ground.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-4 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#ea5f31]"
                >
                  Join Our Community Now
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <p className="text-sm text-white/70">
                  Become part of the people powering lasting change.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 px-4 pt-18 md:grid-cols-2 lg:grid-cols-4 lg:pt-28 max-w-7xl mx-auto"
        >
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="flex items-center gap-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#fff4ec] text-[#f36a3d]">
                <Icon className="h-7 w-7" />
              </div>
              <div>
                <p className="text-4xl font-extrabold tracking-tight text-primary">
                  {value}
                </p>
                <p className="mt-1 text-sm text-slate-500">{label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
