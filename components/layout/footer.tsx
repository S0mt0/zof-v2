import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { navSocialLinks } from "./nav-data";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/blogs", label: "Blog Stories" },
  { href: "/gallery", label: "Photo Gallery" },
];

const supportLinks = [
  { href: "/contact", label: "Contact Us" },
  { href: "/events", label: "Upcoming Events" },
  { href: "/contact", label: "Volunteer With Us" },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(25,95,74,0.97),rgba(15,23,42,0.94))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_26%)]" />
      <div className="absolute -left-12 top-12 h-44 w-44 rounded-full border border-secondary/20 sm:h-56 sm:w-56" />
      <div className="absolute right-0 top-0 hidden h-72 w-72 rounded-full border border-white/10 lg:block" />
      <div className="absolute -right-12 bottom-10 h-60 w-60 rounded-full bg-secondary/12 blur-3xl" />
      <div className="absolute left-[12%] top-0 hidden h-52 w-52 lg:block">
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

      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-12 sm:px-6 lg:px-8 lg:pb-10 lg:pt-16">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-12 lg:pb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-medium text-secondary">
              <span className="h-2 w-2 rounded-full bg-[#f36a3d]" />
              Let&apos;s keep hope in motion
            </div>

            <p className="mt-6 text-xl font-extrabold tracking-tight sm:text-2xl">
              Zita-Onyeka Foundation
            </p>
            <p className="mt-2 max-w-xl text-sm leading-7 text-white/78 sm:text-base">
              Empowering women, youth, and underserved communities through
              practical support, education, and compassionate outreach.
            </p>

            <div className="mt-8 space-y-3 text-sm leading-7 text-white/72 sm:text-base">
              <p>16, Nkwere Street, Garki Area 11 FCT, Abuja Nigeria.</p>
              <p>
                <a
                  href="tel:+2348037864683"
                  className="transition-colors hover:text-white"
                >
                  +234 803 786 4683
                </a>
              </p>
              <p>
                <a
                  href="mailto:onyekazita@gmail.com"
                  className="transition-colors hover:text-white"
                >
                  onyekazita@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="lg:pl-4">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-secondary">
              <span className="h-2 w-2 rounded-full bg-[#f36a3d]" />
              Newsletter
            </p>
            <h3 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
              Receive stories, outreach updates, and ways to help.
            </h3>
            <p className="mt-3 text-sm leading-7 text-white/72 sm:text-base">
              Join our mailing list for community updates and new opportunities
              to support the mission.
            </p>

            <form className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                className="min-w-0 flex-1 rounded-full border border-white/14 bg-white/8 px-5 py-4 text-sm text-white placeholder:text-white/45 focus:border-secondary focus:outline-none sm:text-base"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f36a3d] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#ea5f31] sm:text-base"
              >
                Subscribe
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>

            <p className="mt-4 text-xs leading-6 text-white/55 sm:text-sm">
              Your email is safe with us. We only share meaningful updates.
            </p>
          </div>
        </div>

        <div className="grid gap-10 px-2 pt-10 sm:px-1 sm:pt-12 lg:grid-cols-[1.15fr_0.85fr_0.85fr_0.95fr] lg:gap-8">
          <div className="max-w-md">
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Reaching out to the world.
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/72 sm:text-base">
              We bring people together to respond with dignity, care, and
              consistency. Every donation, partnership, and hour of service
              helps create lasting impact.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-white"
            >
              Partner with us
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white sm:text-xl">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/72 sm:text-base">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white sm:text-xl">
              Get Involved
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/72 sm:text-base">
              {supportLinks.map(({ href, label }) => (
                <li key={`${href}-${label}`}>
                  <Link
                    href={href}
                    className="transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white sm:text-xl">
              Follow Us
            </h3>
            <ul className="mt-5 flex flex-wrap gap-3">
              {navSocialLinks.map(({ href, icon: Icon }, idx) => (
                <li key={idx}>
                  <Link
                    href={href}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/8 text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-secondary hover:text-primary"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-5 text-sm leading-7 text-white/68 sm:text-base">
              Follow the foundation for fresh stories from the field, outreach
              highlights, and community milestones.
            </p>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 px-4 py-5 text-center text-xs text-white/60 sm:px-6 sm:text-sm">
        &copy; 2026 Zita-Onyeka Foundation. All rights reserved. Website by{" "}
        <a
          href="mailto:sewkito@gmail.com"
          className="text-white underline underline-offset-4"
        >
          Sewkito.
        </a>
      </div>
    </footer>
  );
};
