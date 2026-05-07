import type { Metadata } from "next";
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
      <section className="border-b border-[#efe7da] px-4 pb-12 pt-32 lg:pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f36a3d]">
            Contact Us
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
            Let&apos;s talk.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Reach out for partnerships, volunteering, donations, or general
            support. We&apos;d love to hear how you want to connect with the
            mission.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-500">
            {inquiryTypes.map((item, index) => (
              <span key={item} className="inline-flex items-center gap-3">
                {index > 0 ? (
                  <span className="hidden h-1.5 w-1.5 rounded-full bg-[#d8ccb7] sm:block" />
                ) : null}
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 lg:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="divide-y divide-[#efe7da] border-y border-[#efe7da]">
            {contactWays.map(({ title, value, href, icon: Icon }) => (
              <Link
                key={title}
                href={href}
                className="grid gap-3 py-6 transition-colors hover:bg-[#fcfaf6] md:grid-cols-[180px_1fr_auto] md:items-center md:gap-6"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#fff4ec] text-[#f36a3d]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f36a3d]">
                    {title}
                  </p>
                </div>
                <p className="text-lg font-semibold leading-8 text-slate-900">
                  {value}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Open
                  <ArrowUpRight className="h-4 w-4" />
                </span>
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
              Tell us a little about your inquiry and the best way to reach you.
              Whether you want to support, partner, volunteer, or ask a
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
