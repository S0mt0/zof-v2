"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

import { getTeamMembers } from "@/lib/api";

const guidingValues = [
  {
    title: "Empathy",
    description:
      "We begin by listening closely so our response is shaped by real needs, lived experience, and human dignity.",
  },
  {
    title: "Integrity",
    description:
      "We take stewardship seriously and aim to communicate our intentions, work, and impact with honesty and care.",
  },
  {
    title: "Collaboration",
    description:
      "We work with volunteers, families, local partners, and supporters because lasting change is built together.",
  },
  {
    title: "Practical Action",
    description:
      "Our goal is not just visibility. We focus on support people can feel in education, empowerment, and community life.",
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

const fallbackTeamMembers: ITeamMember[] = [
  {
    name: "Zita Onyeka",
    role: "Founder & Executive Lead",
    email: "onyekazita@gmail.com",
    bio: "Provides the vision, stewardship, and leadership behind the foundation's work across women, youth, and community-focused programs.",
    avatar: "/assets/img/zof-team.jpeg",
  },
  {
    name: "Somto Nwosu",
    role: "Programs Coordinator",
    email: "onyekazita@gmail.com",
    bio: "Supports planning, coordination, and follow-through across outreach, education support, and empowerment initiatives.",
    avatar: "/assets/img/somto.jpeg",
  },
  {
    name: "Zinny Okeke",
    role: "Community Outreach Lead",
    email: "onyekazita@gmail.com",
    bio: "Helps connect the foundation's mission to communities, volunteers, and field-based support efforts with warmth and structure.",
    avatar: "/assets/img/zinny.jpeg",
  },
  {
    name: "Daniel Obi",
    role: "Volunteer & Field Support",
    email: "onyekazita@gmail.com",
    bio: "Works closely with volunteers and on-ground activities to make sure service is coordinated, practical, and people-centered.",
    avatar: "/assets/img/unknown-user.png",
  },
];

export default function AboutPage() {
  const [teamMembers, setTeamMembers] =
    useState<ITeamMember[]>(fallbackTeamMembers);

  useEffect(() => {
    let ignore = false;

    getTeamMembers()
      .then((data) => {
        if (!ignore && data?.length) {
          setTeamMembers(data);
        }
      })
      .catch(() => {
        // Fall back to the local team list when API data is unavailable.
      });

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <main className="bg-white">
      <section className="px-4 pb-16 pt-32 lg:pb-20 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto max-w-4xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f36a3d]">
              About Us
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              We support communities
              <br />
              with care that lasts.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Zita-Onyeka Foundation supports women, youth, and underserved
              families through education, empowerment, and practical outreach
              that improves everyday life.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
              >
                Partner With Us
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 rounded-full border border-[#d9ccb5] px-6 py-4 text-sm font-semibold text-slate-800 transition-colors hover:bg-white/70"
              >
                See Our Events
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mt-14 border-t border-[#ece2d1] pt-10"
          >
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div className="relative min-h-[300px] overflow-hidden rounded-[2rem] lg:min-h-[430px]">
                <Image
                  src="/assets/img/zof-team.jpeg"
                  alt="Zita-Onyeka Foundation team members together"
                  fill
                  sizes="(max-width: 1024px) 100vw, 56vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-between px-1 lg:pb-2">
                <p className="max-w-md text-lg leading-9 text-slate-700">
                  We believe meaningful support should feel human, dignified,
                  and close to the realities people face.
                </p>
                <div className="mt-8 grid gap-6 border-t border-[#e8decb] pt-6 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f36a3d]">
                      Focus
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Education, women empowerment, and practical community
                      care.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f36a3d]">
                      Approach
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Thoughtful partnerships, direct outreach, and sustained
                      follow-through.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* <section className="px-4 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.22 }}
              className="max-w-3xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f36a3d]">
                Who We Are
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
                We exist to make support feel tangible, respectful, and close
                to home.
              </h2>

              <div className="mt-8 grid gap-8 border-t border-[#ece2d1] pt-8 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="space-y-5 text-base leading-8 text-slate-600">
                  <p>
                    The Zita-Onyeka Foundation is a non-profit organization
                    committed to helping communities move forward through
                    support that is compassionate, practical, and rooted in real
                    everyday needs.
                  </p>
                  <p>
                    We work across education, women empowerment, outreach, and
                    youth-focused initiatives that strengthen dignity,
                    resilience, and long-term wellbeing.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="border-b border-[#ece2d1] pb-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f36a3d]">
                      Mission
                    </p>
                    <p className="mt-3 text-base leading-8 text-slate-600">
                      To uplift lives through education, empowerment, and
                      compassionate community support.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f36a3d]">
                      Vision
                    </p>
                    <p className="mt-3 text-base leading-8 text-slate-600">
                      A society where women, youth, and families have the tools
                      to thrive with dignity.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: "easeOut", delay: 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              className="lg:pt-5"
            >
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
          </div>
        </div>
      </section> */}

      <section className="bg-[#f8f5ee] px-4 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="max-w-xl"
            >
              <p className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                <span className="h-2 w-2 rounded-full bg-[#f36a3d]" />
                What Guides Us
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
                The values shaping the way we show up.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Our work is guided by values that keep our programs grounded in
                people, accountability, and meaningful action.
              </p>
            </motion.div>

            <div className="space-y-6">
              {guidingValues.map(({ title, description }, index) => (
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
                  className="border-b border-[#e4d9c6] pb-6 last:border-b-0 last:pb-0"
                >
                  <div className="grid gap-4 sm:grid-cols-[170px_1fr]">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f36a3d]">
                      {title}
                    </p>
                    <p className="text-base leading-8 text-slate-600">
                      {description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
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
                  {/* <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                    <UsersRound className="h-5 w-5" />
                  </div> */}
                  <p className="mt-4 text-lg font-semibold text-slate-900">
                    Volunteer-driven
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Built with people who care deeply about sustained service.
                  </p>
                </div>
                <div>
                  {/* <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                    <ShieldCheck className="h-5 w-5" />
                  </div> */}
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

      <section className="overflow-hidden bg-white px-4 py-20 lg:py-24">
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
              Meet the people helping shape the mission, coordinate the work,
              and keep support efforts thoughtful, practical, and consistent.
            </p>
          </motion.div>

          <div className="mt-14 divide-y divide-[#e9dfcf] border-y border-[#e9dfcf]">
            {teamMembers.map((member, index) => {
              const avatar =
                member.avatar && member.avatar.startsWith("/")
                  ? member.avatar
                  : "/assets/img/unknown-user.png";

              return (
                <motion.article
                  key={`${member.name}-${member.role}`}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.75,
                    ease: "easeOut",
                    delay: index * 0.06,
                  }}
                  viewport={{ once: true, amount: 0.18 }}
                  className="py-8 first:pt-0 last:pb-0"
                >
                  <div
                    className={`flex flex-col gap-8 lg:items-center ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                    }`}
                  >
                    <div
                      className="relative min-h-[280px] overflow-hidden rounded-[1.8rem] bg-[#f3ede3] lg:h-[280px] lg:w-[220px] lg:min-w-[220px] lg:min-h-0"
                    >
                      <Image
                        src={avatar}
                        alt={member.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 220px"
                        className="object-cover"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f36a3d]">
                        {member.role}
                      </p>
                      <h3 className="mt-3 text-3xl font-semibold text-slate-950">
                        {member.name}
                      </h3>
                      <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                        {member.bio ||
                          "Supports the mission through thoughtful leadership, practical coordination, and community-rooted service."}
                      </p>

                      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
                        <Link
                          href={`mailto:${member.email}`}
                          className="inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-[#f36a3d]"
                        >
                          <Mail className="h-4 w-4" />
                          {member.email}
                        </Link>
                        <span className="text-slate-300">/</span>
                        <span className="text-slate-500">
                          Serving through coordination, care, and follow-through
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
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
