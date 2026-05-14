import type { Metadata } from "next";
import { format } from "date-fns";
import {
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  Sparkles,
  UsersRound,
} from "lucide-react";
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
  const activeEvents = events.filter(
    (event) => event.status === "upcoming" || event.status === "happening"
  );
  const featuredEvent = activeEvents[0] ?? events[0];
  const seasonEvents = activeEvents.slice(0, 3);
  const scheduleEvents = activeEvents.slice(1, 6);
  const archiveEvents = events.filter((event) => event.slug !== featuredEvent?.slug);

  return (
    <main className="bg-[#fbf8f1]">
      <section className="px-4 pb-14 pt-30 lg:pb-18 lg:pt-36">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="rounded-[2.25rem] bg-[#f6efe3] px-6 py-8 shadow-[0_24px_70px_rgba(76,57,31,0.08)] ring-1 ring-[#eadfcb] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f36a3d]">
                Events
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-[3.8rem]">
                A calendar built around presence, care, and practical action.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
                Our events are where the mission becomes visible in real time:
                learning sessions, outreach moments, volunteer gatherings, and
                community-centered programs people can actually feel.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-slate-700 ring-1 ring-[#eadfcb]">
                  <CalendarDays className="h-4 w-4 text-[#f36a3d]" />
                  <span>{activeEvents.length} active gatherings</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-slate-700 ring-1 ring-[#eadfcb]">
                  <UsersRound className="h-4 w-4 text-[#f36a3d]" />
                  <span>{events.length} total events listed</span>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2.25rem] bg-[#1c5b49] text-white shadow-[0_24px_70px_rgba(28,91,73,0.18)]">
              <div className="border-b border-white/12 px-6 py-5 sm:px-7">
                <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#f7c87b]">
                  <Sparkles className="h-4 w-4" />
                  This Season
                </p>
              </div>

              <div className="space-y-4 px-6 py-6 sm:px-7 sm:py-7">
                {seasonEvents.map((event) => (
                  <Link
                    key={event.slug}
                    href={`/events/${event.slug}`}
                    className="block rounded-[1.4rem] bg-white/8 px-4 py-4 transition-colors hover:bg-white/12"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f7c87b]">
                          {format(new Date(event.date), "MMMM d")}
                        </p>
                        <h2 className="mt-2 text-lg font-bold leading-snug text-white">
                          {event.name}
                        </h2>
                      </div>
                      <span
                        className={`inline-flex rounded-full border px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] ${getStatusColor(
                          event.status
                        )}`}
                      >
                        {event.status}
                      </span>
                    </div>
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/72">
                      {event.startTime ? <span>{formatTime(event.startTime)}</span> : null}
                      {event.location ? <span>{event.location}</span> : null}
                    </div>
                  </Link>
                ))}

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-[#f7c87b] transition-colors hover:text-white"
                >
                  Plan a partnership event
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {featuredEvent ? (
        <section className="px-4 pb-14 lg:pb-18">
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-[2.4rem] bg-slate-950 text-white shadow-[0_28px_80px_rgba(15,23,42,0.18)]">
              <div className="grid lg:grid-cols-[0.98fr_1.02fr]">
                <div className="flex flex-col justify-between px-6 py-7 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f7c87b]">
                      Featured Gathering
                    </p>
                    <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight sm:text-4xl lg:text-[3rem]">
                      {featuredEvent.name}
                    </h2>
                    <p className="mt-5 max-w-xl text-base leading-8 text-white/78 sm:text-lg">
                      {featuredEvent.excerpt}
                    </p>
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-[1.2rem] bg-white/6 px-4 py-4">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#f7c87b]">
                        Date
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/86">
                        {format(new Date(featuredEvent.date), "MMMM d, yyyy")}
                      </p>
                    </div>
                    <div className="rounded-[1.2rem] bg-white/6 px-4 py-4">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#f7c87b]">
                        Time
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/86">
                        {featuredEvent.startTime
                          ? formatTime(featuredEvent.startTime)
                          : "To be announced"}
                      </p>
                    </div>
                    <div className="rounded-[1.2rem] bg-white/6 px-4 py-4">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#f7c87b]">
                        Place
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/86">
                        {featuredEvent.location || "Abuja"}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={`/events/${featuredEvent.slug}`}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#f7c87b] transition-colors hover:text-white"
                  >
                    View full event
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="relative min-h-[320px] lg:min-h-full">
                  <Image
                    src={featuredEvent.bannerImage || "/assets/img/events-banner.jpg"}
                    alt={featuredEvent.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgba(15,23,42,0.14)_100%)]" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="px-4 pb-14 lg:pb-18">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f36a3d]">
                Schedule View
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
                What&apos;s coming up next
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              A cleaner, event-first list designed for quick scanning across
              dates, timing, and location.
            </p>
          </div>

          <div className="space-y-4">
            {scheduleEvents.map((event) => (
              <Link
                key={event.slug}
                href={`/events/${event.slug}`}
                className="group grid gap-0 overflow-hidden rounded-[1.8rem] bg-white shadow-[0_16px_48px_rgba(76,57,31,0.08)] ring-1 ring-[#e9dece] transition-transform duration-300 hover:-translate-y-0.5 md:grid-cols-[130px_1fr_220px]"
              >
                <div className="flex flex-col items-center justify-center bg-[#f6efe3] px-5 py-6 text-center text-slate-950">
                  <p className="text-4xl font-bold leading-none">
                    {format(new Date(event.date), "dd")}
                  </p>
                  <p className="mt-2 text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-[#f36a3d]">
                    {format(new Date(event.date), "MMM")}
                  </p>
                </div>

                <div className="px-5 py-5 sm:px-6 sm:py-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`inline-flex rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] ${getStatusColor(
                        event.status
                      )}`}
                    >
                      {event.status}
                    </span>
                    {event.organizer ? (
                      <span className="text-xs uppercase tracking-[0.16em] text-slate-400">
                        {event.organizer}
                      </span>
                    ) : null}
                  </div>

                  <h3 className="mt-4 text-2xl font-bold leading-tight text-slate-950 transition-colors group-hover:text-primary sm:text-[1.9rem]">
                    {event.name}
                  </h3>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                    {event.excerpt}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
                    <span className="inline-flex items-center gap-2">
                      <Clock3 className="h-4 w-4 text-[#f36a3d]" />
                      {event.startTime
                        ? formatTime(event.startTime)
                        : "Time to be announced"}
                    </span>
                    {event.location ? (
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-[#f36a3d]" />
                        {event.location}
                      </span>
                    ) : null}
                  </div>
                </div>

                <div className="relative min-h-[190px] md:min-h-full">
                  <Image
                    src={event.bannerImage || "/assets/img/events-banner.jpg"}
                    alt={event.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 220px"
                    className="object-cover"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f36a3d]">
                Archive
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl">
                Past and additional events
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              A quieter archive for revisiting completed events and exploring
              the broader calendar.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {archiveEvents.map((event) => (
              <Link
                key={event.slug}
                href={`/events/${event.slug}`}
                className="group overflow-hidden rounded-[1.7rem] border border-[#ece2d3] bg-[#fbf8f1] transition-all duration-300 hover:border-[#ddcfba] hover:bg-white hover:shadow-[0_16px_44px_rgba(76,57,31,0.08)]"
              >
                <div className="relative aspect-[1.35] overflow-hidden">
                  <Image
                    src={event.bannerImage || "/assets/img/events-banner.jpg"}
                    alt={event.name}
                    fill
                    sizes="(max-width: 1280px) 100vw, 30vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-slate-400">
                    <span>{format(new Date(event.date), "MMM d, yyyy")}</span>
                    <span
                      className={`inline-flex rounded-full border px-2.5 py-1 text-[0.6rem] font-semibold ${getStatusColor(
                        event.status
                      )}`}
                    >
                      {event.status}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-bold leading-tight text-slate-950 transition-colors group-hover:text-primary">
                    {event.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {event.excerpt}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
                    {event.location ? (
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-[#f36a3d]" />
                        {event.location}
                      </span>
                    ) : null}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
