"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import { PiHandHeartFill, PiHeartStraightFill } from "react-icons/pi";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const volunteers = [
  {
    name: "Maya Brooks",
    role: "Community Volunteer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Daniel Reed",
    role: "Outreach Volunteer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Amina Yusuf",
    role: "Program Supporter",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Jordan Hayes",
    role: "Volunteer Advocate",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Sofia Bennett",
    role: "Relief Volunteer",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "Caleb Morgan",
    role: "Field Volunteer",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
  },
  {
    name: "Naomi Clarke",
    role: "Community Mentor",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
  },
  {
    name: "Ethan Cole",
    role: "Youth Volunteer",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
  },
];

const socialIcons = [FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn];
const AUTOPLAY_DELAY = 3200;

export const MeetVolunteers = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api) return;

    const handlePointerDown = () => setIsPaused(true);
    const handlePointerUp = () => setIsPaused(false);

    api.on("pointerDown", handlePointerDown);
    api.on("pointerUp", handlePointerUp);

    return () => {
      api.off("pointerDown", handlePointerDown);
      api.off("pointerUp", handlePointerUp);
    };
  }, [api]);

  useEffect(() => {
    if (!api || isPaused) return;

    const interval = window.setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
        return;
      }

      api.scrollTo(0);
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(interval);
  }, [api, isPaused]);

  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 lg:py-24">
      <div
        className="absolute inset-0 opacity-[0.16] mix-blend-multiply"
        style={{ backgroundImage: "url('/assets/img/bg-grey-texture.png')" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(243,106,61,0.08),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(25,95,74,0.08),transparent_28%)]" />

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

      <div className="absolute right-24 top-24 hidden h-72 w-72 rounded-full border border-secondary/20 lg:block" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="inline-flex items-center gap-3 font-caveat text-3xl font-semibold tracking-tight text-[#e6a12d]">
            Our Volunteers
          </p>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-950 sm:text-4xl lg:text-5xl">
            Meet The Optimistic Volunteers
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.08 }}
          viewport={{ once: true, amount: 0.15 }}
          className="relative mt-14"
        >
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true, dragFree: true }}
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <CarouselContent className="-ml-6">
              {volunteers.map(({ name, role, image }) => (
                <CarouselItem
                  key={name}
                  className="pl-6 sm:basis-[78%] md:basis-1/2 xl:basis-1/4"
                >
                  <article className="group cursor-grab active:cursor-grabbing">
                    <div className="relative overflow-hidden rounded-[2rem] bg-[#f6f1e9] shadow-[0_20px_50px_rgba(15,23,42,0.06)] border-b-4 border-[#e6a12d]">
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_58%,rgba(15,23,42,0.06)_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="relative aspect-[0.88]">
                        <Image
                          src={image}
                          alt={name}
                          fill
                          sizes="(max-width: 640px) 78vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 24vw"
                          className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                    </div>

                    <div className="px-1 pb-1 pt-5">
                      <h3 className="text-2xl font-bold leading-tight text-slate-950">
                        {name}
                      </h3>
                      <p className="mt-1 text-base text-slate-500">{role}</p>

                      <div className="mt-5 flex items-center gap-4 text-slate-900">
                        {socialIcons.map((Icon, iconIndex) => (
                          <a
                            key={iconIndex}
                            href="#"
                            aria-label={`${name} social profile ${
                              iconIndex + 1
                            }`}
                            className="transition-colors hover:text-[#f36a3d]"
                          >
                            <Icon className="h-[1.125rem] w-[1.125rem]" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};
