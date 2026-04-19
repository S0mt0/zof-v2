"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Zinny Okeke",
    role: "Community Volunteer",
    image: "/assets/img/zinny.jpeg",
    quote:
      "Volunteering with the foundation showed me how quickly practical support can restore dignity. Families feel seen, and children begin to dream again.",
  },
  {
    name: "Somto Nwosu",
    role: "Program Supporter",
    image: "/assets/img/somto.jpeg",
    quote:
      "What stands out most is the consistency. The team responds with compassion, communicates clearly, and turns generosity into real outcomes people can feel.",
  },
  {
    name: "Amaka Johnson",
    role: "Parent Beneficiary",
    image: "/assets/img/unknown-user.png",
    quote:
      "Before this support, basic needs often interrupted my child’s education. Now there is stability in our home and a renewed sense of hope for the future.",
  },
  {
    name: "Miriam Eze",
    role: "Education Advocate",
    image: "/assets/img/unknown-user.png",
    quote:
      "I have watched the foundation create meaningful change through education, nourishment, and care. The impact is visible in both children and parents.",
  },
  {
    name: "Daniel Obi",
    role: "Volunteer Coordinator",
    image: "/assets/img/unknown-user.png",
    quote:
      "Every outreach proves that a strong community can change lives. When people give time and resources here, the effect reaches far beyond one event.",
  },
];

const AUTOPLAY_DELAY = 5000;

export const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api) return;

    const updateCarouselState = () => {
      setSelectedIndex(api.selectedScrollSnap());
      setScrollSnaps(api.scrollSnapList());
    };

    updateCarouselState();
    api.on("select", updateCarouselState);
    api.on("reInit", updateCarouselState);

    return () => {
      api.off("select", updateCarouselState);
      api.off("reInit", updateCarouselState);
    };
  }, [api]);

  useEffect(() => {
    if (!api || isPaused || scrollSnaps.length <= 1) return;

    const interval = window.setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
        return;
      }

      api.scrollTo(0);
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(interval);
  }, [api, isPaused, scrollSnaps.length]);

  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 lg:py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="inline-flex items-center gap-2 text-sm font-medium text-primary">
            <span className="h-2 w-2 rounded-full bg-[#f36a3d]" />
            Testimonial
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            Stories of hope shared by families and supporters
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14"
        >
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <CarouselContent className="-ml-6">
              {testimonials.map(({ name, role, image, quote }, index) => (
                <CarouselItem
                  key={`${name}-${index}`}
                  className="pl-6 md:basis-1/2 xl:basis-1/3"
                >
                  <article
                    className={[
                      "flex h-full min-h-[320px] flex-col rounded-[2rem] border border-[#f3e7d8] bg-[#fcf7ef] p-8 shadow-[0_20px_50px_rgba(15,23,42,0.04)] transition-all duration-300",
                      selectedIndex === index
                        ? "border-[#f1dcc2] bg-[#fff8ee]"
                        : "opacity-92",
                    ].join(" ")}
                  >
                    <div className="flex items-center gap-1 text-[#f36a3d]">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className="h-4 w-4 fill-current"
                          strokeWidth={1.8}
                        />
                      ))}
                    </div>

                    <p className="mt-8 flex-1 text-[1.02rem] leading-8 text-slate-600">
                      {quote}
                    </p>

                    <div className="mt-10 flex items-end justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="relative h-13 w-13 overflow-hidden rounded-full ring-4 ring-white">
                          <Image
                            src={image}
                            alt={name}
                            fill
                            sizes="52px"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-slate-900">
                            {name}
                          </h3>
                          <p className="text-sm text-slate-500">{role}</p>
                        </div>
                      </div>

                      <div className="rounded-2xl bg-[#fff1d3] p-3 text-[#efc24f]">
                        <Quote className="h-6 w-6 fill-current" />
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="mt-10 flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setIsPaused(true);
                  api?.scrollPrev();
                }}
                aria-label="Previous testimonial"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-[#f36a3d] transition-all hover:border-[#f36a3d]/30 hover:bg-[#fff6f1]"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2">
                {scrollSnaps.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      setIsPaused(true);
                      api?.scrollTo(index);
                    }}
                    aria-label={`Go to testimonial ${index + 1}`}
                    className={[
                      "h-2.5 rounded-full transition-all",
                      selectedIndex === index
                        ? "w-10 bg-[#f36a3d]"
                        : "w-2.5 bg-slate-300 hover:bg-slate-400",
                    ].join(" ")}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => {
                  setIsPaused(true);
                  api?.scrollNext();
                }}
                aria-label="Next testimonial"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white text-[#f36a3d] transition-all hover:border-[#f36a3d]/30 hover:bg-[#fff6f1]"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
