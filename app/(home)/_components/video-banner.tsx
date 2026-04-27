"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa6";

export const VideoBanner = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  const handlePlay = async () => {
    if (!videoRef.current) return;

    try {
      videoRef.current.currentTime = 0;
      await videoRef.current.play();
      setHasStarted(true);
    } catch {
      setHasStarted(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 lg:py-24">
      <div
        className="absolute inset-0 opacity-[0.12] mix-blend-multiply"
        style={{ backgroundImage: "url('/assets/img/bg-grey-texture.png')" }}
      />

      <div className="relative mx-auto w-full max-w-[97%]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="relative overflow-hidden rounded-[2rem] shadow-[0_28px_70px_rgba(15,23,42,0.14)]"
        >
          <div className="absolute inset-y-0 left-0 z-20 hidden w-16 bg-[url('/assets/img/testimonial-bg.png')] bg-cover bg-left opacity-95 md:block" />
          <div className="absolute inset-y-0 right-0 z-20 hidden w-16 scale-x-[-1] bg-[url('/assets/img/testimonial-bg.png')] bg-cover bg-left opacity-95 md:block" />

          <div className="relative h-[34vh] min-h-[240px] max-h-[70vh] md:h-[48vh] lg:h-[56vh]">
            {!hasStarted ? (
              <Image
                src="/assets/img/zof_led_community.jpg"
                alt="Community outreach moment"
                fill
                sizes="100vw"
                className="object-cover object-center"
                priority={false}
              />
            ) : null}

            <video
              ref={videoRef}
              className={[
                "absolute inset-0 h-full w-full object-cover transition-opacity duration-300",
                hasStarted ? "opacity-100" : "opacity-0",
              ].join(" ")}
              controls
              playsInline
              preload="metadata"
              poster="/assets/img/zof_led_community.jpg"
            >
              <source src="/assets/img/outreach_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div
              className={[
                "pointer-events-none absolute inset-0 transition-opacity duration-300",
                hasStarted ? "opacity-0" : "opacity-100",
              ].join(" ")}
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,47,39,0.25),rgba(14,47,39,0.52))]" />
              <div className="absolute inset-0 bg-primary/35 mix-blend-multiply" />
            </div>

            <div
              className={[
                "absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-300",
                hasStarted ? "pointer-events-none opacity-0" : "opacity-100",
              ].join(" ")}
            >
              <button
                type="button"
                onClick={handlePlay}
                aria-label="Play outreach video"
                className="group relative inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#f6ab2f] text-white shadow-[0_20px_45px_rgba(246,171,47,0.35)] transition-transform duration-300 hover:scale-105"
              >
                <span className="absolute inset-0 rounded-full bg-[#f6ab2f]/35 animate-ping" />
                <span className="absolute -inset-4 rounded-full border border-[#f6ab2f]/35" />
                <span className="absolute -inset-8 rounded-full border border-[#f6ab2f]/20" />
                <FaPlay className="relative ml-1 h-6 w-6" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
