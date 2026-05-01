"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const focusAreas = [
  {
    number: "01",
    title: "Support Where It Matters Most",
    description:
      "We respond to urgent realities in homes and communities with help that is practical, timely, and rooted in dignity.",
  },
  {
    number: "02",
    title: "Create Pathways, Not Moments",
    description:
      "Our goal is not one-time visibility, but long-term growth through education, skills, and sustained community support.",
  },
  {
    number: "03",
    title: "Build With People, Not Around Them",
    description:
      "We work in collaboration with families, local leaders, volunteers, and partners so solutions are shared and lasting.",
  },
];

export const OurValues = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8f4ec] px-6 py-20 md:px-14 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(174,159,76,0.2),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(25,95,74,0.18),transparent_22%)]" />
      <div
        className="absolute inset-0 opacity-[0.18] mix-blend-multiply"
        style={{ backgroundImage: "url('/assets/img/bg-grey-texture.png')" }}
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-12 xl:grid-cols-[0.95fr_1.05fr]"
        >
          <div className="flex flex-col justify-between">
            <div>
              <p className="font-caveat text-2xl font-semibold tracking-tight text-[#f36a3d]">
                How change happens
              </p>
              <h2 className="mt-4 max-w-xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
                We focus on steady, human-centered progress.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-slate-600">
                This work is not driven by noise. It is shaped by listening,
                consistency, and the kind of support that helps communities move
                from immediate need toward lasting stability.
              </p>
            </div>

            <div className="mt-10 rounded-[2rem] border border-white/70 bg-white/80 p-3 shadow-[0_22px_60px_rgba(15,23,42,0.06)] sm:p-6">
              <div className="relative overflow-hidden rounded-[1.6rem]">
                <div className="relative h-[280px] sm:h-[340px]">
                  <Image
                    src="/assets/img/classroom.jpg"
                    alt="Children gathered in a classroom supported by the foundation"
                    fill
                    sizes="(max-width: 1280px) 100vw, 34vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent p-6 text-white">
                  <p className="max-w-sm text-sm uppercase tracking-[0.2em] text-secondary">
                    Real outcomes
                  </p>
                  <p className="mt-2 max-w-md text-lg leading-7 text-white/92">
                    We design initiatives that nourish, educate, and strengthen
                    families over time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-5 top-10 bottom-10 hidden w-px bg-slate-300/70 xl:block" />

            <div className="space-y-6 xl:pl-14">
              {focusAreas.map(({ number, title, description }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="relative rounded-[2rem] border border-white/70 bg-white/85 p-7 shadow-[0_20px_50px_rgba(15,23,42,0.05)]"
                >
                  <div className="absolute left-0 top-8 hidden h-10 w-10 -translate-x-1/2 rounded-full border-8 border-[#F8F3EC] bg-primary xl:block" />

                  <div className="flex items-start gap-4 xs:gap-5">
                    <div className="min-w-12 xs:min-w-14 text-3xl xs:text-4xl font-bold leading-none text-primary/20">
                      {number}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-900">
                        {title}
                      </h3>
                      <p className="mt-3 max-w-xl text-base xs:leading-8 text-slate-600">
                        {description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
                className="relative mt-8 overflow-hidden rounded-[2rem] border border-[#efe4d5] bg-[#fff8ee] p-8 text-slate-900 shadow-[0_24px_60px_rgba(15,23,42,0.06)]"
                style={{
                  backgroundImage: "url('/assets/img/bg-grey-texture.png')",
                }}
              >
                <div className="absolute -right-10 top-0 h-28 w-28 rounded-full bg-primary/7 blur-2xl" />
                <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-[#f36a3d]/8 blur-3xl" />

                <div className="isolate">
                  <p className="text-sm uppercase tracking-[0.18em] text-[#f36a3d]">
                    Why it works
                  </p>
                  <p className="mt-4 max-w-2xl text-2xl font-semibold leading-tight text-slate-900">
                    We care about help that lasts beyond the campaign, the
                    event, and the photo.
                  </p>
                  <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">
                    Lasting change comes from thoughtful collaboration,
                    sustained commitment, and support that remains useful long
                    after attention moves on.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-primary/92"
                  >
                    Start A Partnership
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
