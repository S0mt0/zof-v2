"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    number: "01 — 05",
    tag: "Presence",
    icon: "🌊",
    title: "Flow State",
    description:
      "The rarest form of focus — where action and awareness merge into something effortless and complete.",
    className: "bg-[#2a201a] text-[#e8ddd0]",
  },
  {
    number: "02 — 05",
    tag: "Vision",
    icon: "🔭",
    title: "Long Game",
    description:
      "Short-term thinking is a trap. The greatest builders plant trees under whose shade they'll never sit.",
    className: "bg-[#1a2a22] text-[#d0e8da]",
  },
  {
    number: "03 — 05",
    tag: "Craft",
    icon: "🪵",
    title: "Deep Work",
    description:
      "Distraction is the tax on shallow ambition. To go deep is to choose the harder, richer path.",
    className: "bg-[#c9b99a] text-[#1a1410]",
  },
  {
    number: "04 — 05",
    tag: "Growth",
    icon: "🌱",
    title: "Compound Effect",
    description:
      "1% better every day. What looks invisible for years erupts suddenly into something undeniable.",
    className: "bg-[#1c2a3a] text-[#d0dde8]",
  },
  {
    number: "05 — 05",
    tag: "Mastery",
    icon: "⚡",
    title: "The Standard",
    description:
      "Mastery isn't the destination — it's the standard you hold for every single rep, even when no one watches.",
    className: "bg-[#e8ddd0] text-[#2a201a]",
  },
];

const TOP_OFFSET = 46; //64
const SCALE_STEP = 0.25; //0.055
const PEEK_Y = 3; //8
const VH_PER_CARD = 0.5; //1.0

const noiseOverlay =
  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")";

export const StackedStoriesClaude = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const pinWrapRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const pinWrap = pinWrapRef.current;
    const cardEls = cardRefs.current;

    if (!section || !pinWrap || cardEls.length === 0) return;

    const ctx = gsap.context(() => {
      const belowY = () => window.innerHeight + 50;
      const lockedY = (depth: number) => TOP_OFFSET + depth * PEEK_Y;
      const scaleAt = (depth: number) => 1 - depth * SCALE_STEP;
      const totalPx = () => window.innerHeight * cardEls.length * VH_PER_CARD;

      cardEls.forEach((card, i) => {
        gsap.set(card, {
          xPercent: -50,
          zIndex: i + 1,
          transformOrigin: "top center",
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: pinWrap,
          start: "top top",
          end: () => `+=${totalPx()}`,
          scrub: 0.85, //0.85
          anticipatePin: 1,
          // invalidateOnRefresh: true,
        },
      });

      cardEls.forEach((card, i) => {
        const slotStart = i;

        tl.fromTo(
          card,
          {
            y: () => belowY(),
            scale: 1,
          },
          {
            y: () => lockedY(0),
            scale: 1,
            ease: "power2.inOut",
            duration: 1,
            // invalidateOnRefresh: true,
          },
          slotStart
        );

        for (let j = 0; j < i; j += 1) {
          const prevDepth = i - 1 - j;
          const nextDepth = i - j;

          tl.fromTo(
            cardEls[j],
            {
              y: () => lockedY(prevDepth),
              scale: scaleAt(prevDepth),
            },
            {
              y: () => lockedY(nextDepth),
              scale: scaleAt(nextDepth),
              ease: "power2.inOut",
              duration: 1,
              // invalidateOnRefresh: true,
            },
            slotStart
          );
        }
      });

      const handleResize = () => ScrollTrigger.refresh();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative">
      <div
        ref={pinWrapRef}
        className="relative h-screen w-full overflow-hidden"
      >
        {cards.map((card, index) => (
          <div
            key={card.title}
            ref={(node) => {
              if (node) cardRefs.current[index] = node;
            }}
            className={`absolute left-1/2 flex h-[clamp(320px,42vh,440px)] w-[clamp(300px,58vw,680px)] flex-col justify-between overflow-hidden rounded-[20px] px-12 py-10 shadow-[0_2px_4px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.10),0_28px_64px_rgba(0,0,0,0.08)] will-change-transform ${card.className}`}
            // className={`absolute left-1/2 flex h-[clamp(320px,42vh,440px)] w-[clamp(300px,58vw,680px)] flex-col justify-between overflow-hidden rounded-[20px] px-12 py-10 shadow-[0_2px_4px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.10),0_28px_64px_rgba(0,0,0,0.08)] will-change-transform ${card.className}`}
          >
            <div
              className="pointer-events-none absolute inset-0 rounded-[inherit]"
              style={{ backgroundImage: noiseOverlay }}
            />

            <div className="relative z-10 flex items-start justify-between">
              <span className="text-[0.68rem] font-medium uppercase tracking-[0.25em] opacity-45">
                {card.number}
              </span>
              <span className="text-[0.68rem] font-medium uppercase tracking-[0.25em] opacity-45">
                {card.tag}
              </span>
            </div>

            <div className="relative z-10 flex flex-col gap-3">
              <div className="text-[2.8rem] leading-none">{card.icon}</div>
              <div className="font-serif text-[clamp(1.8rem,3.5vw,2.7rem)] leading-[1.05] font-bold tracking-[-0.01em]">
                {card.title}
              </div>
              <div className="max-w-[44ch] text-[0.88rem] font-light leading-[1.75] opacity-65">
                {card.description}
              </div>
              <div className="mt-2 h-[2px] w-10 rounded-[2px] bg-current opacity-25" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
