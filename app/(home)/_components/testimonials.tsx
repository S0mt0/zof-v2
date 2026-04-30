"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Heart, Quote, Star } from "lucide-react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

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
          className="mx-auto max-w-4xl text-center"
        >
          <p className="inline-flex items-center gap-3 font-caveat text-3xl font-semibold tracking-tight text-[#e6a12d]">
            {/* <Heart className="h-6 w-6 text-primary" /> */}
            Testimonials
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
            What People Are Saying?
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
            opts={{ align: "start", loop: true, slidesToScroll: 2 }}
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <CarouselContent className="-ml-6">
              {testimonials.map(({ name, role, image, quote }, index) => (
                <CarouselItem
                  key={`${name}-${index}`}
                  className="pl-6 pt-10 md:basis-1/2"
                >
                  <article
                    className={cn(
                      "relative min-h-85 px-8 pb-14 pt-10 transition-all duration-300 cursor-grab active:cursor-grabbing select-none",
                      selectedIndex === index ? "opacity-100" : "opacity-92"
                    )}
                    style={{
                      backgroundImage: "url('/assets/img/testimonial-bg.png')",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "100% 100%",
                    }}
                  >
                    <div className="absolute right-0 -top-5 flex h-20 w-26 items-start justify-center rounded-full rounded-tr-none bg-primary px-5 py-5 isolate">
                      <Quote className="h-7 w-7 text-secondary fill-secondary" />
                    </div>

                    <div className="relative z-10">
                      <div className="-mt-3 flex items-center gap-5">
                        <div className="relative h-30 w-30 shrink-0 overflow-hidden rounded-full bg-secondary border-3 border-secondary">
                          <Image
                            src={image}
                            alt={name}
                            width={300}
                            height={300}
                            className="object-cover rounded-full"
                          />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-3xl tracking-tight font-bold text-slate-950">
                            {name}
                          </h3>
                          <p className="mt-1 text-slate-500">{role}</p>
                        </div>
                      </div>

                      <p className="mt-6 max-w-130 mx-auto  text-slate-600">
                        “{quote}”
                      </p>
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
