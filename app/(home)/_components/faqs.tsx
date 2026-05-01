"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqItems = [
  {
    question: "How can I support the foundation's work?",
    answer:
      "You can support us by donating, volunteering, partnering on community programs, or helping amplify our campaigns. Every contribution helps us reach more women, youth, and families with practical support.",
  },
  {
    question: "Can I volunteer or partner with your organization?",
    answer:
      "Yes. We welcome volunteers, community advocates, and mission-aligned partners who want to contribute time, expertise, or resources to our initiatives.",
  },
  {
    question: "Where does your organization operate?",
    answer:
      "Our programs are community-focused and designed to reach underserved families where support is most needed, with initiatives spanning outreach, empowerment, and educational assistance.",
  },
  {
    question: "What kind of programs do you run?",
    answer:
      "We run programs centered on education support, youth development, women empowerment, relief outreach, and community-driven welfare initiatives.",
  },
  {
    question: "How do I know my support is making an impact?",
    answer:
      "We prioritize transparency and measurable outcomes. Our team shares updates, stories, and impact markers that show how donations and volunteer efforts translate into real change.",
  },
];

export const Faqs = () => {
  const [openItem, setOpenItem] = useState(0);

  return (
    <section className="relative overflow-hidden bg-white px-4 py-20 lg:py-24">
      <div className="absolute left-0 top-10 h-48 w-48 rounded-full border border-secondary/15" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(243,106,61,0.08),transparent_62%)]" />

      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="inline-flex items-center gap-2 text-sm font-medium text-primary">
            <span className="h-2 w-2 rounded-full bg-[#f36a3d]" />
            Faqs
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Have questions in your mind?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 space-y-4"
        >
          {faqItems.map(({ question, answer }, index) => {
            const isOpen = openItem === index;

            return (
              <div
                key={question}
                className="overflow-hidden rounded-[1.6rem] bg-white shadow-[0_12px_30px_rgba(15,23,42,0.04)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenItem(isOpen ? -1 : index)}
                  className={cn(
                    "flex w-full items-center text-left transition-colors rounded-4xl cursor-pointer",
                    isOpen ? "bg-primary text-white" : "bg-white text-slate-900"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-full min-h-10 w-14 shrink-0 items-center justify-center border-r text-xl font-semibold md:w-20",
                      isOpen
                        ? "border-white/12 text-secondary"
                        : "border-[#efe7da] text-slate-600"
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex flex-1 items-center justify-between gap-6 px-6 py-3 md:px-8">
                    <span className=" font-semibold leading-snug text-base xs:text-lg">
                      {question}
                    </span>

                    <span
                      className={
                        "flex h-10 w-10 shrink-0 items-center justify-center text-secondary"
                      }
                    >
                      {isOpen ? (
                        <Minus className="h-5 w-5" />
                      ) : (
                        <Plus className="h-5 w-5" />
                      )}
                    </span>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden bg-[#fdf5e5] rounded-4xl border-[#efe7da] mt-1"
                    >
                      <div className="px-6 py-5 text-sm leading-8 text-slate-600 md:px-16">
                        {answer}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
