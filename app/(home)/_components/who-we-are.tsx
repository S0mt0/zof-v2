"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, HeartHandshake, HandCoins } from "lucide-react";

const featureItems = [
  {
    title: "Community Fundraising",
    description:
      "We rally partners, volunteers, and local champions around practical programs that create lasting support systems.",
    icon: HeartHandshake,
  },
  {
    title: "Targeted Donations",
    description:
      "Every contribution is directed toward education, relief, and empowerment initiatives that meet urgent and long-term needs.",
    icon: HandCoins,
  },
];

const stats = [
  { value: "15k+", label: "Lives Reached" },
  { value: "1k+", label: "Women Empowered" },
  { value: "400+", label: "Youth Supported" },
  { value: "35k+", label: "Volunteer Hours" },
];

export const WhoWeAre = () => {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 md:px-14 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/25 to-transparent" />
      <div className="absolute -left-16 top-16 h-56 w-56 rounded-full bg-primary/8 blur-3xl" />
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative mx-auto w-full max-w-xl lg:max-w-none"
          >
            <div className="absolute -left-6 top-8 hidden h-44 w-24 rounded-full border-4 border-secondary/70 lg:block" />
            <div className="absolute -left-10 top-12 hidden h-44 w-44 rounded-full bg-primary/15 blur-2xl lg:block" />
            <div className="absolute -bottom-8 left-6 flex flex-col gap-3">
              <span className="h-4 w-4 rounded-full border-4 border-secondary" />
              <span className="h-7 w-7 rounded-full border-4 border-secondary" />
              <span className="h-5 w-5 rounded-full border-4 border-secondary" />
            </div>

            <div className="relative min-h-[520px]">
              <div className="relative h-[420px] w-[72%] overflow-hidden rounded-[2rem] border-4 border-white shadow-[0_28px_70px_rgba(15,23,42,0.18)] sm:h-[500px]">
                <Image
                  src="/assets/img/zof_child.jpg"
                  alt="Children gathered at a community support center"
                  fill
                  sizes="(max-width: 1024px) 100vw, 35vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute right-0 top-6 h-[190px] w-[45%] overflow-hidden rounded-[1.75rem] border-4 border-white bg-zinc-900 shadow-2xl sm:h-[215px]">
                <Image
                  src="/assets/img/child_group.jpg"
                  alt="Children smiling together during a foundation activity"
                  fill
                  sizes="(max-width: 1024px) 45vw, 18vw"
                  className="object-cover grayscale"
                />
              </div>

              <div className="absolute bottom-0 right-8 h-[190px] w-[52%] overflow-hidden rounded-[1.75rem] border-4 border-white bg-zinc-900 shadow-2xl sm:h-[215px]">
                <Image
                  src="/assets/img/zof_led_community.jpg"
                  alt="A mother and children receiving support from the foundation"
                  fill
                  sizes="(max-width: 1024px) 52vw, 20vw"
                  className="object-cover grayscale"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="absolute right-0 top-2 hidden text-[8rem] leading-none text-primary/5 lg:block">
              ❤
            </div>

            <p className="font-semibold uppercase tracking-[0.24em] text-secondary">
              Welcome to Zita-Onyeka Foundation
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              Transforming lives, one opportunity at a time.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              We invest in women, youth, and underserved families through
              education, skills development, and community-centered support.
              Every initiative is designed to move people from vulnerability to
              confidence, dignity, and sustainable growth.
            </p>

            <div className="mt-10 space-y-6">
              {featureItems.map(({ title, description, icon: Icon }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-primary/15 bg-white text-primary shadow-sm">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-900">
                      {title}
                    </h3>
                    <p className="mt-1 max-w-xl text-base leading-7 text-slate-600">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/who-we-are"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Learn More
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20 grid gap-6 rounded-[2rem] border border-slate-200/80 bg-white/90 px-8 py-10 shadow-[0_25px_80px_rgba(15,23,42,0.08)] md:grid-cols-4 md:gap-0"
        >
          {stats.map(({ value, label }, index) => (
            <div
              key={label}
              className={[
                "text-center",
                index !== stats.length - 1
                  ? "md:border-r md:border-slate-200"
                  : "",
              ].join(" ")}
            >
              <p
                className={
                  index % 2 === 1
                    ? "text-5xl font-bold text-secondary"
                    : "text-5xl font-bold text-primary"
                }
              >
                {value}
              </p>
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                {label}
              </p>
            </div>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};
