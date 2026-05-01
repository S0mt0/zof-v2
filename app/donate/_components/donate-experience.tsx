"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  CreditCard,
  HandHeart,
  HeartHandshake,
  ShieldCheck,
  Wallet,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const frequencies = [
  {
    id: "one-time",
    label: "One-time gift",
    description: "Support urgent and immediate needs.",
  },
  {
    id: "monthly",
    label: "Monthly support",
    description: "Help us plan consistently across programs.",
  },
] as const;

const funds = [
  {
    id: "general",
    label: "Where needed most",
    description:
      "Allows the foundation to direct funds to the most urgent community needs.",
  },
  {
    id: "campaign",
    label: "Specific campaign",
    description:
      "Choose a campaign below if you want your donation tied to a defined focus area.",
  },
] as const;

const campaigns = [
  {
    id: "education-support",
    name: "Education support",
    target: "School materials, fees, and practical learning support",
  },
  {
    id: "women-empowerment",
    name: "Women empowerment",
    target: "Skills, training access, and economic support initiatives",
  },
  {
    id: "community-care",
    name: "Community care outreach",
    target: "Relief support, dignity packs, and urgent family assistance",
  },
] as const;

const suggestedAmounts = [5000, 10000, 25000, 50000];

const trustPoints = [
  {
    title: "General or campaign giving",
    description:
      "Donors can support the overall mission or direct their gift to a selected campaign.",
    icon: HandHeart,
  },
  {
    title: "Clear anonymity option",
    description:
      "Anonymous means hidden from public recognition, while payment records may still be required privately for processing.",
    icon: ShieldCheck,
  },
  {
    title: "Ready for secure checkout",
    description:
      "This page is structured for Paystack-based donation checkout and webhook confirmation.",
    icon: CreditCard,
  },
] as const;

const impactNotes = [
  "Education access for children and youth",
  "Women-focused empowerment initiatives",
  "Community relief and emergency support",
  "Volunteer-led outreach across underserved areas",
];

function formatNaira(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
}

export const DonateExperience = () => {
  const [frequency, setFrequency] =
    useState<(typeof frequencies)[number]["id"]>("one-time");
  const [fund, setFund] = useState<(typeof funds)[number]["id"]>("general");
  const [campaign, setCampaign] =
    useState<(typeof campaigns)[number]["id"]>("education-support");
  const [amount, setAmount] = useState("10000");
  const [isAnonymous, setIsAnonymous] = useState(false);

  const selectedCampaign = campaigns.find((item) => item.id === campaign);

  const parsedAmount = useMemo(() => {
    const raw = Number(amount.replace(/[^\d]/g, ""));
    return Number.isFinite(raw) ? raw : 0;
  }, [amount]);

  return (
    <main className="bg-white">
      <section className="relative overflow-hidden px-4 pb-20 pt-32 lg:pb-24 lg:pt-40">
        <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(25,95,74,0.95),rgba(15,23,42,0.92))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_28%)]" />
        <div className="absolute -left-12 top-16 h-56 w-56 rounded-full border border-secondary/25" />
        <div className="absolute -right-12 bottom-8 h-72 w-72 rounded-full bg-secondary/12 blur-3xl" />
        <div className="absolute right-10 top-8 hidden h-72 w-72 rounded-full border border-white/10 lg:block" />
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
          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.25 }}
              className="max-w-2xl text-white"
            >
              <p className="inline-flex items-center gap-2 text-sm font-medium text-secondary">
                <span className="h-2 w-2 rounded-full bg-[#f36a3d]" />
                Donate
              </p>
              <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Give with clarity, dignity, and a clear sense of purpose.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
                Support the Zita-Onyeka Foundation through one-time or monthly
                giving. Donors can give generally, support a specific campaign,
                and choose whether their gift should be publicly anonymous.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {impactNotes.map((note) => (
                  <span
                    key={note}
                    className="rounded-full border border-white/12 px-4 py-2 text-sm text-white/80"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: "easeOut", delay: 0.08 }}
              viewport={{ once: true, amount: 0.25 }}
              className="rounded-[2rem] border border-white/12 bg-white/8 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.18)] backdrop-blur sm:p-6"
            >
              <div className="rounded-[1.6rem] border border-white/10 bg-white p-6 text-slate-900 shadow-[0_18px_60px_rgba(15,23,42,0.12)] sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#f36a3d]">
                      Donation Summary
                    </p>
                    <h2 className="mt-3 text-3xl font-bold text-slate-950">
                      {parsedAmount > 0
                        ? formatNaira(parsedAmount)
                        : "Enter an amount"}
                    </h2>
                  </div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#fff3ea] text-[#f36a3d]">
                    <Wallet className="h-6 w-6" />
                  </div>
                </div>

                <div className="mt-6 space-y-4 rounded-[1.4rem] bg-[#f8f5ee] p-5">
                  <div className="flex items-start justify-between gap-4 text-sm">
                    <span className="text-slate-500">Donation type</span>
                    <span className="font-semibold text-slate-900">
                      {frequency === "monthly"
                        ? "Monthly support"
                        : "One-time gift"}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-4 text-sm">
                    <span className="text-slate-500">Giving preference</span>
                    <span className="max-w-52 text-right font-semibold text-slate-900">
                      {fund === "campaign"
                        ? selectedCampaign?.name
                        : "Where needed most"}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-4 text-sm">
                    <span className="text-slate-500">Public recognition</span>
                    <span className="font-semibold text-slate-900">
                      {isAnonymous ? "Anonymous" : "Named donation"}
                    </span>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  This page defines the donor choices clearly and is ready for
                  secure payment activation. The next implementation step is to
                  connect the final submit action to Paystack checkout.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {trustPoints.map(({ title, description, icon: Icon }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="rounded-[1.8rem] border border-[#eadfcb] bg-[#fdf8f1] p-6"
              >
                <div className="flex h-13 w-13 items-center justify-center rounded-full bg-white text-[#f36a3d] shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-slate-950">
                  {title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f8f5ee] px-4 py-20 lg:py-24">
        <div className="absolute -left-14 top-10 h-52 w-52 rounded-full bg-primary/6 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="font-caveat text-3xl font-semibold tracking-tight text-[#e6a12d]">
              Give Intentionally
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Choose how your support should work.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              This donation flow is designed to remove guesswork. Donors can
              choose the amount, frequency, target fund, and whether their gift
              should be publicly anonymous before checkout begins.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900">
                    Anonymous means private in public-facing displays
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Payment processors may still require donor information for
                    receipts, fraud checks, and compliance.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900">
                    Campaign giving stays specific
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    If a campaign is selected, that choice should be sent as
                    metadata to Paystack during checkout and verification.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.08 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[2rem] border border-[#eadfcb] bg-white p-6 shadow-[0_24px_70px_rgba(76,57,31,0.08)] sm:p-8"
          >
            <div className="space-y-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f36a3d]">
                  1. Choose donation frequency
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {frequencies.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setFrequency(item.id)}
                      className={cn(
                        "rounded-[1.4rem] border px-4 py-4 text-left transition-all",
                        frequency === item.id
                          ? "border-primary bg-primary text-white shadow-[0_14px_36px_rgba(25,95,74,0.18)]"
                          : "border-[#eadfcb] bg-[#fdf8f1] text-slate-900 hover:bg-[#fbf2e5]"
                      )}
                    >
                      <p className="font-semibold">{item.label}</p>
                      <p
                        className={cn(
                          "mt-2 text-sm leading-6",
                          frequency === item.id
                            ? "text-white/80"
                            : "text-slate-600"
                        )}
                      >
                        {item.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f36a3d]">
                  2. Enter donation amount
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {suggestedAmounts.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setAmount(String(item))}
                      className={cn(
                        "rounded-full border px-4 py-3 text-sm font-semibold transition-colors",
                        Number(amount) === item
                          ? "border-primary bg-primary text-white"
                          : "border-[#e6dcc9] bg-[#fff8ee] text-slate-700 hover:bg-[#fbf2e5]"
                      )}
                    >
                      {formatNaira(item)}
                    </button>
                  ))}
                </div>
                <div className="mt-4">
                  <Input
                    inputMode="numeric"
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                    placeholder="Enter amount in NGN"
                    className="h-13 rounded-full border-[#e6dcc9] bg-white px-5 text-slate-700 placeholder:text-slate-400 focus-visible:ring-0"
                  />
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f36a3d]">
                  3. Decide where the donation goes
                </p>
                <div className="mt-4 grid gap-3">
                  {funds.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setFund(item.id)}
                      className={cn(
                        "rounded-[1.3rem] border px-4 py-4 text-left transition-colors",
                        fund === item.id
                          ? "border-[#f36a3d] bg-[#fff5ee]"
                          : "border-[#eadfcb] bg-white hover:bg-[#fffaf4]"
                      )}
                    >
                      <p className="font-semibold text-slate-900">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </button>
                  ))}
                </div>

                {fund === "campaign" ? (
                  <div className="mt-4 grid gap-3">
                    {campaigns.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setCampaign(item.id)}
                        className={cn(
                          "rounded-[1.2rem] border px-4 py-4 text-left transition-colors",
                          campaign === item.id
                            ? "border-primary bg-primary/5"
                            : "border-[#eadfcb] bg-[#fcfbf7] hover:bg-[#fffaf4]"
                        )}
                      >
                        <p className="font-semibold text-slate-900">
                          {item.name}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-slate-600">
                          {item.target}
                        </p>
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-slate-800">
                    Full name
                  </label>
                  <Input
                    placeholder="Jane Doe"
                    className="mt-3 h-13 rounded-full border-[#e6dcc9] bg-white px-5 text-slate-700 placeholder:text-slate-400 focus-visible:ring-0"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-800">
                    Email address
                  </label>
                  <Input
                    type="email"
                    placeholder="jane@example.com"
                    className="mt-3 h-13 rounded-full border-[#e6dcc9] bg-white px-5 text-slate-700 placeholder:text-slate-400 focus-visible:ring-0"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-800">
                  Message to the foundation
                </label>
                <Textarea
                  rows={5}
                  placeholder="Optional encouragement or note"
                  className="mt-3 min-h-32 rounded-[1.5rem] border-[#e6dcc9] bg-white px-5 py-4 text-slate-700 placeholder:text-slate-400 focus-visible:ring-0"
                />
              </div>

              <button
                type="button"
                onClick={() => setIsAnonymous((current) => !current)}
                className={cn(
                  "flex w-full items-start gap-4 rounded-[1.4rem] border px-4 py-4 text-left transition-colors",
                  isAnonymous
                    ? "border-primary bg-primary/5"
                    : "border-[#eadfcb] bg-[#fcfbf7] hover:bg-[#fffaf4]"
                )}
              >
                <span
                  className={cn(
                    "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border",
                    isAnonymous
                      ? "border-primary bg-primary text-white"
                      : "border-[#d8ccb7] bg-white"
                  )}
                >
                  {isAnonymous ? <CheckCircle2 className="h-3.5 w-3.5" /> : null}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-slate-900">
                    Make this donation anonymous
                  </span>
                  <span className="mt-2 block text-sm leading-7 text-slate-600">
                    Your gift would not be publicly attributed by name, though
                    payment details may still be collected privately during
                    secure checkout.
                  </span>
                </span>
              </button>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
                  type="button"
                  size="lg"
                  disabled
                  className="h-12 rounded-full bg-primary px-8 text-sm font-semibold text-white hover:bg-primary/90 disabled:opacity-100"
                >
                  Paystack checkout will be connected next
                </Button>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  Need offline giving or partnership support?
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};
