"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  HeartHandshake,
  Lightbulb,
  Users,
} from "lucide-react";

const values = [
  {
    title: "Empathy First",
    description:
      "We begin by listening closely, so every intervention responds to real needs with dignity and care.",
    icon: HeartHandshake,
  },
  {
    title: "Trust Through Integrity",
    description:
      "Our work is transparent, accountable, and rooted in doing what is right even when it is difficult.",
    icon: BadgeCheck,
  },
  {
    title: "Community Collaboration",
    description:
      "Sustainable change grows faster when families, volunteers, and partners build solutions together.",
    icon: Users,
  },
  {
    title: "Practical Innovation",
    description:
      "We adapt creatively, using bold ideas and grounded action to meet today’s challenges effectively.",
    icon: Lightbulb,
  },
];

export const OurValues = () => {
  return (
    <section className="relative overflow-hidden px-6 py-20 md:px-14 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(174,159,76,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(25,95,74,0.12),transparent_24%)]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl"
        >
          <p className="font-semibold uppercase tracking-[0.24em] text-secondary">
            What guides our work
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
            Built on values that turn compassion into lasting impact.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
            Our programs are shaped by the principles that help communities feel
            seen, supported, and equipped for long-term growth. These values
            influence how we serve, how we partner, and how we measure success.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-5 md:grid-cols-2"
          >
            {values.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="group rounded-[1.75rem] border border-slate-200/80 bg-white/90 p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {description}
                </p>
              </article>
            ))}
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-8 text-white shadow-[0_30px_80px_rgba(15,23,42,0.18)]"
          >
            <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(25,95,74,0.95),rgba(15,23,42,0.9))]" />
            <div className="absolute -right-16 top-10 h-40 w-40 rounded-full border border-white/10" />
            <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-secondary/15 blur-3xl" />

            <div className="relative flex h-full flex-col">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                Our promise
              </div>

              <h3 className="mt-6 text-3xl font-bold leading-tight">
                Values are only meaningful when they show up in action.
              </h3>

              <p className="mt-5 text-base leading-8 text-white/78">
                From direct support for families to empowerment programs for
                women and youth, we stay intentional about creating help that is
                human-centered, measurable, and sustainable.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5">
                  <p className="text-3xl font-bold text-secondary">100%</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/70">
                    People-centered approach
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/8 p-5">
                  <p className="text-3xl font-bold text-secondary">4</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/70">
                    Core values in every program
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-6 py-4 text-sm font-semibold text-slate-950 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-secondary/90"
              >
                Partner With Us
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
};
