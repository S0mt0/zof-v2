import type { Metadata } from "next";
import { format } from "date-fns";
import { CalendarDays, Clock3, MapPin, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getEvent } from "@/lib/api";
import { findPlaceholderEvent } from "@/lib/content/placeholders";
import { formatTime, getStatusColor } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 0;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const eventResponse = await getEvent(slug);
  const event = eventResponse?.data || findPlaceholderEvent(slug);

  if (!event) {
    return {
      title: "Event",
    };
  }

  return {
    title: event.name,
    description: event.excerpt,
  };
}

export default async function EventDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const eventResponse = await getEvent(slug);
  const event = eventResponse?.data || findPlaceholderEvent(slug);

  if (!event) notFound();

  return (
    <main className="bg-white">
      <section className="border-b border-[#efe7da] px-4 pb-12 pt-32 lg:pt-40">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/events"
            className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f36a3d] transition-colors hover:text-primary"
          >
            Back to Events
          </Link>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_320px] lg:items-start">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                <span className="h-2 w-2 rounded-full bg-[#f36a3d]" />
                Community Event
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
                {event.name}
              </h1>
              {event.excerpt ? (
                <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
                  {event.excerpt}
                </p>
              ) : null}
            </div>

            <div className="rounded-[2rem] border border-[#eadfcb] bg-[#fcfaf6] p-6 shadow-[0_20px_60px_rgba(76,57,31,0.08)]">
              <span
                className={`inline-flex rounded-full border px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] ${getStatusColor(
                  event.status
                )}`}
              >
                {event.status}
              </span>

              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
                <div className="flex items-start gap-3">
                  <CalendarDays className="mt-1 h-4 w-4 shrink-0 text-[#f36a3d]" />
                  <span>{format(new Date(event.date), "MMMM d, yyyy")}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock3 className="mt-1 h-4 w-4 shrink-0 text-[#f36a3d]" />
                  <span>
                    {event.startTime
                      ? formatTime(event.startTime)
                      : "Time to be announced"}
                    {event.endTime ? ` - ${formatTime(event.endTime)}` : ""}
                  </span>
                </div>
                {event.location ? (
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#f36a3d]" />
                    <span>{event.location}</span>
                  </div>
                ) : null}
                {event.organizer ? (
                  <div className="flex items-start gap-3">
                    <UserRound className="mt-1 h-4 w-4 shrink-0 text-[#f36a3d]" />
                    <span>{event.organizer}</span>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 lg:py-14">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="order-2 lg:order-1">
            <div className="prose prose-slate max-w-none prose-headings:text-slate-950 prose-p:text-slate-700 prose-p:leading-8">
              <div
                dangerouslySetInnerHTML={{
                  __html: event.detail || event.excerpt,
                }}
              />
            </div>
          </article>

          <div className="order-1 lg:order-2">
            <div className="relative aspect-[1.05] overflow-hidden rounded-[2rem]">
              <Image
                src={event.bannerImage || "/assets/img/events-banner.jpg"}
                alt={event.name}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
