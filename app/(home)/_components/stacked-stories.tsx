"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock3, MapPin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stackedItems = [
  {
    type: "Event",
    title: "Women’s Enterprise Circle",
    summary:
      "A practical gathering focused on skills, support, and micro-enterprise pathways for women ready to grow sustainable income.",
    image: "/assets/img/team-on-sunset.jpg",
    meta: ["May 18, 2026", "10:00 AM", "Enugu"],
    accent: "bg-[#fff3ea]",
  },
  {
    type: "Blog",
    title: "What Community-Led Support Really Looks Like",
    summary:
      "A closer look at how listening, consistency, and local participation create stronger outcomes than one-off interventions.",
    image: "/assets/img/posts-bg.jpg",
    meta: ["Featured Story", "6 min read", "Impact Journal"],
    accent: "bg-[#eef7f3]",
  },
  {
    type: "Event",
    title: "Back-to-School Community Outreach",
    summary:
      "An outreach day dedicated to school essentials, encouragement, and direct support for children returning to class with confidence.",
    image: "/assets/img/classroom.jpg",
    meta: ["June 02, 2026", "9:30 AM", "Nsukka"],
    accent: "bg-[#fff7df]",
  },
  {
    type: "Blog",
    title: "From Relief to Stability: Stories Behind the Numbers",
    summary:
      "Beyond the statistics are families rebuilding routines, children regaining focus, and communities stepping into shared progress.",
    image: "/assets/img/sharing-food.jpg",
    meta: ["Editor’s Pick", "5 min read", "Field Notes"],
    accent: "bg-[#f4f0ff]",
  },
];

const metaIcons = [CalendarDays, Clock3, MapPin];

export const StackedStories = () => {
  const pinSectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;
      if (!pinSectionRef.current || cards.length === 0) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.set(cards, {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          yPercent: (index) => (index === 0 ? 0 : 120),
          scale: (index) => (index === 0 ? 1 : 1),
          zIndex: (index) => index + 1,
          opacity: 1,
          transformOrigin: "top center",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pinSectionRef.current,
            start: "top top+=72",
            end: `+=${cards.length * 520}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        cards.forEach((card, index) => {
          if (index === 0) return;

          const previousCard = cards[index - 1];
          const position = index - 1;

          tl.set(previousCard, { zIndex: index }, position).set(
            card,
            { zIndex: cards.length + index },
            position
          );

          tl.to(
            previousCard,
            {
              scale: 0.965 - (index - 1) * 0.015,
              y: 16 + (index - 1) * 10,
              opacity: 0.92,
              ease: "none",
              duration: 1,
            },
            position
          ).to(
            card,
            {
              yPercent: 0,
              opacity: 1,
              ease: "none",
              duration: 1,
            },
            position
          );
        });

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      });

      mm.add("(max-width: 767px)", () => {
        gsap.set(cards, { clearProps: "all" });
      });

      return () => mm.revert();
    }, pinSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden bg-white px-6 py-20 md:px-14 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(25,95,74,0.08),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(243,106,61,0.08),transparent_24%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-caveat text-2xl font-semibold tracking-tight text-[#f36a3d]">
            What’s coming and what’s worth reading
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
            Upcoming events and stories that stack as you scroll
          </h2>
          <p className="mt-6 text-base leading-8 text-slate-600">
            Each card pins near the top, settles slightly smaller into the
            stack, and gets layered by the next one as you continue scrolling.
          </p>
        </div>

        <div className="relative mt-14">
          <div
            ref={pinSectionRef}
            className="relative hidden md:block md:h-[620px] lg:h-[680px]"
          >
            {stackedItems.map((item, index) => (
              <article
                key={item.title}
                ref={(node) => {
                  if (node) cardsRef.current[index] = node;
                }}
                className="mx-auto flex h-full w-full max-w-4xl flex-col overflow-hidden rounded-[1.9rem] border border-white/80 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.14)] lg:flex-row"
              >
                <div className="relative min-h-[220px] flex-1 lg:min-h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 46vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col justify-between p-6 sm:p-8">
                  <div>
                    <div
                      className={`inline-flex items-center rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-800 ${item.accent}`}
                    >
                      {item.type}
                    </div>

                    <h3 className="mt-4 text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                      {item.summary}
                    </p>

                    <div className="mt-6 space-y-3">
                      {item.meta.map((label, metaIndex) => {
                        const Icon = metaIcons[metaIndex] ?? CalendarDays;

                        return (
                          <div
                            key={label}
                            className="flex items-center gap-3 text-sm text-slate-600"
                          >
                            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-primary">
                              <Icon className="h-4 w-4" />
                            </span>
                            <span>{label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between gap-4 border-t border-slate-200 pt-5">
                    <p className="max-w-xs text-sm leading-6 text-slate-500">
                      {item.type === "Event"
                        ? "Join the moment in person and help shape what happens next."
                        : "Read the deeper story behind the work and the people it reaches."}
                    </p>

                    <Link
                      href={item.type === "Event" ? "/events" : "/blogs"}
                      className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-primary/92"
                    >
                      {item.type === "Event" ? "View Events" : "Read Stories"}
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="grid gap-4 md:hidden">
            {stackedItems.map((item) => (
              <article
                key={`${item.type}-${item.title}-mobile`}
                className="overflow-hidden rounded-[1.6rem] border border-white/80 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.1)]"
              >
                <div className="relative h-52">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div
                    className={`inline-flex items-center rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-800 ${item.accent}`}
                  >
                    {item.type}
                  </div>
                  <h3 className="mt-4 text-2xl font-bold leading-tight text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
