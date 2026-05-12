import { format } from "date-fns";
import { ArrowUpRight, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { cn, formatTime, getStatusColor } from "@/lib/utils";

export const EventCard = ({
  slug,
  bannerImage,
  name,
  date,
  excerpt,
  location,
  showExcerpt = true,
  className,
  startTime,
  endTime,
  status,
}: IEvent & {
  showExcerpt?: boolean;
  showExpired?: boolean;
  className?: string;
}) => {
  const eventDate = new Date(date || new Date());

  return (
    <Link
      href={`/events/${slug}`}
      aria-label={`Read event: ${name}`}
      className={cn("group block h-full", className)}
    >
      <article className="flex h-full flex-col overflow-hidden rounded-[1.85rem] border border-[#e7dece] bg-white shadow-[0_18px_50px_rgba(76,57,31,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(76,57,31,0.12)]">
        <div className="relative aspect-[1.18] overflow-hidden">
          <Image
            src={bannerImage || "/assets/img/events-banner.jpg"}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-5">
            <div className="rounded-[1.25rem] bg-white/94 px-4 py-3 text-center shadow-sm">
              <div className="text-2xl font-bold leading-none text-slate-950">
                {format(eventDate, "dd")}
              </div>
              <div className="mt-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#f36a3d]">
                {format(eventDate, "MMM")}
              </div>
            </div>

            <span
              className={cn(
                "inline-flex rounded-full border px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] backdrop-blur-sm",
                getStatusColor(status)
              )}
            >
              {status}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col px-6 py-6 sm:px-7">
          <h3 className="text-2xl font-bold leading-snug text-slate-950 transition-colors group-hover:text-primary">
            {name}
          </h3>

          <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
            <div className="flex items-start gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#f36a3d]" />
              <span>
                {startTime ? formatTime(startTime) : "Time to be announced"}
                {endTime ? ` - ${formatTime(endTime)}` : ""}
              </span>
            </div>

            {location ? (
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#f36a3d]" />
                <span>{location}</span>
              </div>
            ) : null}
          </div>

          {excerpt && showExcerpt ? (
            <p className="mt-5 line-clamp-3 text-sm leading-7 text-slate-600">
              {excerpt}
            </p>
          ) : null}

          <div className="mt-6 flex items-center justify-between border-t border-[#efe7da] pt-4">
            <span className="text-sm font-medium text-slate-500">
              Event details
            </span>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-[#f36a3d]">
              View event
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};
