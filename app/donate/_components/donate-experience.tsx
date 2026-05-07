"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, HeartHandshake } from "lucide-react";

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

  return (
    <main className="bg-white">
      <section className="border-b border-[#efe7da] px-4 pb-12 pt-32 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f36a3d]">
            Donate
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
            Support the work.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Give once or monthly, direct your donation to a campaign or general
            support, and choose whether your gift is shown publicly by name.
          </p>
        </motion.div>
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
                {/* <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                  <CheckCircle2 className="h-5 w-5" />
                </div> */}
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
                {/* <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                  <HeartHandshake className="h-5 w-5" />
                </div> */}
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
                  {isAnonymous ? (
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  ) : null}
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
