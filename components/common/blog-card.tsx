import { format } from "date-fns";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export const BlogCard = ({
  slug,
  bannerImage,
  title,
  publishedAt,
  excerpt,
  showExcerpt = true,
  className,
}: IBlog & { showExcerpt?: boolean; className?: string }) => {
  return (
    <Link
      href={`/blogs/${slug}`}
      aria-label={`Read blog: ${title}`}
      className={cn("group block h-full", className)}
    >
      <article className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[#e9e0d2] bg-white shadow-[0_18px_50px_rgba(76,57,31,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(76,57,31,0.12)]">
        <div className="relative aspect-[1.18] overflow-hidden">
          <Image
            src={bannerImage || "/assets/img/blank-book.jpg"}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
            <span className="rounded-full bg-white/92 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#f36a3d] shadow-sm">
              Journal
            </span>
            <span className="rounded-full bg-slate-950/72 px-3 py-1 text-[0.72rem] font-medium text-white backdrop-blur-sm">
              {format(publishedAt || new Date(), "MMM d, yyyy")}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col px-6 py-6 sm:px-7">
          <h3 className="text-2xl font-bold leading-snug text-slate-950 transition-colors group-hover:text-primary">
            {title}
          </h3>

          {excerpt && showExcerpt ? (
            <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-600">
              {excerpt}
            </p>
          ) : null}

          <div className="mt-6 flex items-center justify-between border-t border-[#efe7da] pt-4">
            <span className="text-sm font-medium text-slate-500">
              Community update
            </span>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-[#f36a3d]">
              Read story
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};
