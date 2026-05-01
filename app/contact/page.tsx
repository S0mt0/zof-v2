import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  UsersRound,
} from "lucide-react";

import { ContactForm } from "@/components/common/contact-form";
import { navSocialLinks } from "@/components/layout/nav-data";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Zita-Onyeka Foundation for partnerships, volunteering, support, and community outreach inquiries.",
};

const contactWays = [
  {
    title: "Email us",
    value: "onyekazita@gmail.com",
    href: "mailto:onyekazita@gmail.com",
    icon: Mail,
  },
  {
    title: "Call us",
    value: "+234 803 786 4683",
    href: "tel:+2348037864683",
    icon: Phone,
  },
  {
    title: "Visit us",
    value: "16, Nkwere Street, Garki Area 11 FCT, Abuja Nigeria.",
    href: "https://maps.google.com/?q=16,+Nkwere+Street,+Garki+Area+11,+FCT,+Abuja,+Nigeria",
    icon: MapPin,
  },
];

const inquiryTypes = [
  "Volunteer opportunities",
  "Partnership requests",
  "Donations and support",
  "Community outreach inquiries",
];

export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden px-4 pb-20 pt-32 lg:pb-24 lg:pt-40">
        <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(25,95,74,0.95),rgba(15,23,42,0.92))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_28%)]" />
        <div className="absolute -left-10 top-18 h-56 w-56 rounded-full border border-secondary/25" />
        <div className="absolute right-8 top-8 hidden h-72 w-72 rounded-full border border-white/10 lg:block" />
        <div className="absolute -right-14 bottom-8 h-72 w-72 rounded-full bg-secondary/12 blur-3xl" />
        <div className="absolute left-[16%] top-0 hidden h-64 w-64 lg:block">
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

        <div className="relative mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="max-w-2xl text-white">
              <p className="inline-flex items-center gap-2 text-sm font-medium text-secondary">
                <span className="h-2 w-2 rounded-full bg-[#f36a3d]" />
                Contact Us
              </p>
              <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Let&apos;s start a conversation that leads to meaningful impact.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
                Reach out for partnerships, volunteering, donations, or general
                support. We&apos;d love to hear how you want to connect with the
                mission.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {inquiryTypes.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/12 px-4 py-2 text-sm text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
              <div className="absolute -left-6 top-10 hidden h-28 w-28 rounded-full border border-secondary/40 lg:block" />
              <div className="relative min-h-[440px]">
                <div className="relative ml-auto h-[400px] w-[84%] overflow-hidden rounded-[2rem] shadow-[0_30px_90px_rgba(15,23,42,0.18)]">
                  <Image
                    src="/assets/img/contact-tel.jpg"
                    alt="Foundation representative speaking with community members"
                    fill
                    sizes="(max-width: 1024px) 100vw, 38vw"
                    className="object-cover"
                  />
                </div>

                <div className="absolute bottom-0 left-0 w-[56%] rounded-[1.6rem] border border-[#eadfcb] bg-[#fff8ee] p-5 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
                  <p className="text-sm font-medium text-[#f36a3d]">
                    We&apos;re here for
                  </p>
                  <p className="mt-3 text-lg font-semibold leading-8 text-slate-900">
                    support requests, partnerships, volunteer interest, and
                    community-focused conversations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {contactWays.map(({ title, value, href, icon: Icon }) => (
              <Link
                key={title}
                href={href}
                className="rounded-[1.7rem] border border-[#eadfcb] bg-[#fdf8f1] p-6 transition-colors hover:bg-[#fbf2e5]"
              >
                <div className="flex h-13 w-13 items-center justify-center rounded-full bg-white text-[#f36a3d] shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-5 text-sm font-medium text-[#f36a3d]">
                  {title}
                </p>
                <p className="mt-2 text-lg font-semibold leading-8 text-slate-900">
                  {value}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f8f5ee] px-4 py-20 lg:py-24">
        <div className="absolute -left-14 top-10 h-52 w-52 rounded-full bg-primary/6 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <p className="font-caveat text-3xl font-semibold tracking-tight text-[#e6a12d]">
              Reach Out
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Send us a message and we&apos;ll get back to you.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              Tell us a little about your inquiry and the best way to reach
              you. Whether you want to support, partner, volunteer, or ask a
              question, we&apos;re glad to connect.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                  <UsersRound className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900">
                    Community-first support
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    We respond with clarity, warmth, and a focus on the people
                    behind every request.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900">
                    Trusted communication
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    We treat every message with care and only use your details
                    to respond to your inquiry.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#f36a3d]">
                Follow Our Updates
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {navSocialLinks.map(({ href, icon: Icon }, idx) => (
                  <Link
                    key={idx}
                    href={href}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e3d8c4] bg-white text-slate-700 transition-colors hover:border-[#f36a3d] hover:text-[#f36a3d]"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#eadfcb] bg-white p-6 shadow-[0_24px_70px_rgba(76,57,31,0.08)] sm:p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="px-4 pb-24 pt-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center gap-2 text-sm font-medium text-primary">
            <span className="h-2 w-2 rounded-full bg-[#f36a3d]" />
            Keep In Touch
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Every conversation can be the start of real change.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
            If you&apos;re looking for a way to support, collaborate, or learn
            more about our work, we&apos;re always open to hearing from you.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="mailto:onyekazita@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
            >
              Email the Foundation
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-4 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
