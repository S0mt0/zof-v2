"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  Heart,
  HeartHandshake,
} from "lucide-react";

const upcomingEvents = [
  {
    title: "Back-to-School Support Event",
    description:
      "A community-centered gathering focused on helping children return to school with the resources, encouragement, and practical support they need.",
    topic: "Children's Education & Learning Resources",
    time: "09:00pm - 10:00pm",
    day: "25",
    month: "Nov",
    image: "/assets/img/classroom.jpg",
  },
  {
    title: "Community Learning Center",
    description:
      "An outreach session designed to strengthen everyday learning through shared reading spaces, mentorship, and child-friendly support activities.",
    topic: "Children's Education & Learning Resources",
    time: "09:00pm - 10:00pm",
    day: "27",
    month: "Nov",
    image: "/assets/img/child_group.jpg",
  },
];

export const UpcomingEventsShowcase = () => {
  return (
    <section className="relative overflow-hidden px-4 py-20 lg:py-24">
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(243,106,61,0.08),transparent_20%),radial-gradient(circle_at_bottom_left,rgba(25,95,74,0.08),transparent_24%)]" /> */}

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-3 font-caveat text-3xl font-semibold tracking-tight text-[#e6a12d]">
              Our Event
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
              Be Part of Our Upcoming Events
            </h2>
          </div>

          <Link
            href="/events"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#f36a3d] px-6 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[#ea5f31]"
          >
            {/* <HeartHandshake className="h-4 w-4" /> */}
            View All Event
          </Link>
        </motion.div>

        <div className="mt-12 space-y-8">
          {upcomingEvents.map((event, index) => (
            <motion.article
              key={event.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              viewport={{ once: true, amount: 0.18 }}
              className="relative overflow-hidden rounded-[2rem] border border-border/60 p-6 md:p-8 group"
            >
              <div className="grid gap-8 lg:grid-cols-[0.12fr_0.48fr_0.4fr] lg:items-center">
                <div className="flex justify-center lg:justify-start">
                  <div className="flex xs:min-h-[210px] xs:w-[100px] gap-6 justify-center flex-row xs:flex-col items-center rounded-[999px] bg-[#faf5ec] group-hover:bg-primary group-hover:text-white transition-all duration-300 px-4 py-5 text-center text-primary">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f36a3d] text-white m-0">
                      <CalendarDays className="xs:h-6 h-5 xs:w-6 w-5" />
                    </div>
                    <div className="text-4xl xs:text-5xl font-bold leading-none m-0">
                      {event.day}
                    </div>
                    <div className="text-2xl xs:text-3xl font-medium tracking-tight text-slate-700 group-hover:text-white ">
                      {event.month}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-semibold leading-tight text-primary sm:text-4xl">
                    {event.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-slate-500">
                    {event.description}
                  </p>

                  <div className="mt-6 space-y-3 text-sm font-medium text-slate-700">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[#f36a3d]">Topic:</span>
                      <span>{event.topic}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Clock3 className="h-4 w-4 text-[#f36a3d]" />
                      <span className="text-[#f36a3d]">Time:</span>
                      <span>{event.time}</span>
                    </div>
                  </div>

                  <Link
                    href="/events"
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#fff4ec] px-6 py-3 text-sm font-semibold text-[#f36a3d] transition-colors hover:bg-[#fee8dc]"
                  >
                    Join Now
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="relative overflow-hidden rounded-[1.8rem]">
                  <div className="relative aspect-[1.16] min-h-[230px]">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 34vw"
                      className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(15,23,42,0.08)_100%)]" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
