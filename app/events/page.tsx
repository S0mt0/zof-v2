import type { Metadata } from "next";
import { format } from "date-fns";
import { ArrowUpRight, CalendarDays, Clock3, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { getAllEvents } from "@/lib/api";
import { withPlaceholderEvents } from "@/lib/content/placeholders";
import { formatTime, getStatusColor } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Explore upcoming, active, and completed events from Zita-Onyeka Foundation.",
};

export const revalidate = 0;

export default async function EventsPage() {
  const eventsData = await getAllEvents({
    limit: 12,
    fields: [
      "name",
      "slug",
      "bannerImage",
      "excerpt",
      "date",
      "startTime",
      "endTime",
      "location",
      "status",
      "organizer",
    ],
  });

  const events = withPlaceholderEvents(eventsData?.data ?? [], 10);
  const heroEvent = events[0];
  const activeEvents = events.filter(
    (event) => event.status === "upcoming" || event.status === "happening"
  );
  const featuredEvent = activeEvents[0] ?? events[0];
  const supportEvents = activeEvents.slice(1, 4);
  const archiveEvents = events.filter((event) => event.slug !== featuredEvent?.slug);

  return (
    <main className="bg-[#fcfaf6]">
      <section className="px-4 pb-8 pt-30 lg:pb-10 lg:pt-36">
        <div className="mx-auto max-w-7xl">
          <div className="relative">
            <div className="mx-auto max-w-[78rem] overflow-hidden rounded-[2.1rem] bg-[#eef2ef] shadow-[0_18px_60px_rgba(76,57,31,0.12)]">
              <div className="relative aspect-[1.95] min-h-[280px] sm:min-h-[360px] lg:min-h-[470px]">
                <Image
                  src={heroEvent?.bannerImage || "/assets/img/events-banner.jpg"}
                  alt={heroEvent?.name || "Event hero image"}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.18),transparent_45%,rgba(15,23,42,0.1))]" />
              </div>
            </div>

            <div className="relative mx-auto -mt-10 max-w-4xl px-4 sm:-mt-14 lg:-mt-18">
              <div className="overflow-hidden rounded-[1.8rem] bg-white shadow-[0_24px_70px_rgba(76,57,31,0.12)] ring-1 ring-[#efe6d7]">
                <div className="grid gap-7 px-6 py-7 sm:px-8 sm:py-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-9 lg:px-10">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f36a3d]">
                      Events
                    </p>
                    <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-[3.35rem]">
                      Gatherings where support becomes visible.
                    </h1>
                    <p className="mt-4 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
                      Explore the sessions, outreach moments, and community
                      programs that bring our mission into shared spaces.
                    </p>
                  </div>

                  <div className="flex flex-col justify-between border-t border-[#efe7da] pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                    <p className="text-sm leading-7 text-slate-600 sm:text-base">
                      Our events page highlights what is upcoming, what is
                      active, and what has already taken place across education,
                      empowerment, volunteer coordination, and family outreach.
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                      <div className="rounded-[1.1rem] bg-[#faf7f2] px-4 py-3">
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#f36a3d]">
                          Active
                        </p>
                        <p className="mt-1 text-2xl font-bold text-slate-950">
                          {activeEvents.length}
                        </p>
                      </div>
                      <div className="rounded-[1.1rem] bg-[#faf7f2] px-4 py-3">
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#f36a3d]">
                          Total
                        </p>
                        <p className="mt-1 text-2xl font-bold text-slate-950">
                          {events.length}
                        </p>
                      </div>
                      <div className="rounded-[1.1rem] bg-[#faf7f2] px-4 py-3">
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#f36a3d]">
                          Connect
                        </p>
                        <Link
                          href="/contact"
                          className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-[#f36a3d]"
                        >
                          Partner with us
                          <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-18 pt-8 lg:pb-22">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">
              Upcoming and active
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              A cleaner event overview with one leading highlight and smaller
              supporting items that are easier to scan quickly.
            </p>
          </div>

          <div className="mt-10 grid items-start gap-5 xl:grid-cols-[minmax(0,1.45fr)_minmax(320px,0.9fr)]">
            {featuredEvent ? (
              <Link
                href={`/events/${featuredEvent.slug}`}
                className="group overflow-hidden rounded-[1.9rem] bg-white shadow-[0_18px_55px_rgba(76,57,31,0.12)] ring-1 ring-[#ece2d3]"
              >
                <div className="grid h-full lg:grid-cols-[1.02fr_0.98fr]">
                  <div className="relative min-h-[260px] overflow-hidden lg:min-h-[420px]">
                    <Image
                      src={
                        featuredEvent.bannerImage || "/assets/img/events-banner.jpg"
                      }
                      alt={featuredEvent.name}
                      fill
                      sizes="(max-width: 1280px) 100vw, 58vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex h-full flex-col p-6 sm:p-7 lg:p-8">
                    <span
                      className={`inline-flex w-fit rounded-full border px-3 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.16em] ${getStatusColor(
                        featuredEvent.status
                      )}`}
                    >
                      {featuredEvent.status}
                    </span>
                    <h3 className="mt-4 text-2xl font-bold leading-tight text-slate-950 transition-colors group-hover:text-primary sm:text-[2rem]">
                      {featuredEvent.name}
                    </h3>
                    <p className="mt-4 text-base leading-7 text-slate-700">
                      {featuredEvent.excerpt}
                    </p>
                    <div className="mt-5 space-y-2.5 text-sm leading-7 text-slate-600">
                      <div className="flex items-start gap-3">
                        <CalendarDays className="mt-1 h-4 w-4 shrink-0 text-[#f36a3d]" />
                        <span>
                          {format(new Date(featuredEvent.date), "MMMM d, yyyy")}
                        </span>
                      </div>
                      <div className="flex items-start gap-3">
                        <Clock3 className="mt-1 h-4 w-4 shrink-0 text-[#f36a3d]" />
                        <span>
                          {featuredEvent.startTime
                            ? formatTime(featuredEvent.startTime)
                            : "Time to be announced"}
                          {featuredEvent.endTime
                            ? ` - ${formatTime(featuredEvent.endTime)}`
                            : ""}
                        </span>
                      </div>
                      {featuredEvent.location ? (
                        <div className="flex items-start gap-3">
                          <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#f36a3d]" />
                          <span>{featuredEvent.location}</span>
                        </div>
                      ) : null}
                    </div>
                    <span className="mt-auto pt-8 text-sm font-semibold text-primary underline decoration-[#f36a3d] underline-offset-4">
                      View event
                    </span>
                  </div>
                </div>
              </Link>
            ) : null}

            <div className="grid gap-4">
              {supportEvents.map((event) => (
                <Link
                  key={event.slug}
                  href={`/events/${event.slug}`}
                  className="group overflow-hidden rounded-[1.7rem] bg-white shadow-[0_16px_48px_rgba(76,57,31,0.1)] ring-1 ring-[#ece2d3]"
                >
                  <div className="grid gap-0 sm:grid-cols-[124px_1fr]">
                    <div className="relative min-h-[136px] overflow-hidden">
                      <Image
                        src={event.bannerImage || "/assets/img/events-banner.jpg"}
                        alt={event.name}
                        fill
                        sizes="124px"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="flex min-h-[136px] flex-col p-5">
                      <div className="flex items-center justify-between gap-3">
                        <span
                          className={`inline-flex rounded-full border px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] ${getStatusColor(
                            event.status
                          )}`}
                        >
                          {event.status}
                        </span>
                        <span className="text-xs text-slate-500">
                          {format(new Date(event.date), "MMM d")}
                        </span>
                      </div>
                      <h3 className="mt-3 text-lg font-bold leading-snug text-slate-950 transition-colors group-hover:text-primary">
                        {event.name}
                      </h3>
                      <span className="mt-auto pt-4 text-sm font-semibold text-primary underline decoration-[#f36a3d] underline-offset-4">
                        View event
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f1f0ed] px-4 py-18 lg:py-22">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl lg:text-5xl">
              More events
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-6xl divide-y divide-[#d9d3c8]">
            {archiveEvents.map((event) => (
              <Link
                key={event.slug}
                href={`/events/${event.slug}`}
                className="grid gap-6 py-8 transition-colors hover:bg-white/45 sm:grid-cols-[240px_1fr] sm:items-center sm:gap-8"
              >
                <div className="relative aspect-[1.14] overflow-hidden rounded-[1.35rem]">
                  <Image
                    src={event.bannerImage || "/assets/img/events-banner.jpg"}
                    alt={event.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 240px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 text-[#f36a3d]" />
                      Event
                    </span>
                    <span>{format(new Date(event.date), "MMMM d, yyyy")}</span>
                    <span>{event.location}</span>
                  </div>
                  <h3 className="mt-4 text-3xl font-bold leading-tight text-slate-950 underline-offset-4 transition-colors hover:text-primary sm:text-[2.05rem]">
                    {event.name}
                  </h3>
                  <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
                    {event.excerpt}
                    <span className="ml-2 font-semibold text-primary underline decoration-[#f36a3d] underline-offset-4">
                      View event
                    </span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
