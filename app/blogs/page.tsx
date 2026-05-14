import type { Metadata } from "next";
import { format } from "date-fns";
import { BookOpenText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { getAllBlogs } from "@/lib/api";
import { withPlaceholderBlogs } from "@/lib/content/placeholders";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read stories, reflections, and community updates from the work of Zita-Onyeka Foundation.",
};

export const revalidate = 0;

export default async function BlogsPage() {
  const blogsData = await getAllBlogs({
    limit: 12,
    fields: ["title", "slug", "bannerImage", "excerpt", "publishedAt"],
  });

  const blogs = withPlaceholderBlogs(blogsData?.data ?? [], 10);
  const heroBlog = blogs[0];
  const latestLead = blogs[1] ?? blogs[0];
  const latestSide = blogs[2];
  const latestGrid = blogs.slice(3, 7);
  const moreBlogs = blogs.slice(7);

  return (
    <main className="bg-[#fbfaf7]">
      <section className="px-4 pb-8 pt-30 lg:pb-10 lg:pt-36">
        <div className="mx-auto max-w-7xl">
          <div className="relative">
            <div className="relative mx-auto max-w-[78rem] overflow-hidden rounded-[2.1rem] bg-[#eef3ec] shadow-[0_18px_60px_rgba(76,57,31,0.12)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(243,106,61,0.12),transparent_26%),linear-gradient(180deg,rgba(15,23,42,0.06),rgba(15,23,42,0.18))]" />
              <div className="relative aspect-[1.9] min-h-[280px] sm:min-h-[360px] lg:min-h-[470px]">
                <Image
                  src={heroBlog?.bannerImage || "/assets/img/posts-bg.jpg"}
                  alt={heroBlog?.title || "Blog hero image"}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="relative mx-auto -mt-10 max-w-3xl px-4 sm:-mt-14 lg:-mt-18">
              <div className="overflow-hidden bg-white shadow-[0_24px_70px_rgba(76,57,31,0.12)] ring-1 ring-[#efe6d7]">
                <div className="px-6 py-7 sm:px-8 sm:py-8 lg:px-10">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f36a3d]">
                      Our Blog
                    </p>
                    <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-[3.35rem]">
                      Stories shaped by care, continuity, and community.
                    </h1>
                    <p className="mt-4 max-w-xl text-base leading-7 text-slate-700 sm:text-lg">
                      The Zita-Onyeka Foundation blog brings together grounded
                      stories from outreach, education support, women
                      empowerment, and community life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-18 pt-8 lg:pb-22">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl">
              The latest
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              A tighter editorial view of the most recent stories, led by one
              featured reflection and supported by quick reads around it.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {latestLead ? (
              <Link
                href={`/blogs/${latestLead.slug}`}
                className="group overflow-hidden bg-white shadow-[0_18px_55px_rgba(76,57,31,0.12)] ring-1 ring-[#ece2d3] lg:col-span-3"
              >
                <div className="grid h-full min-h-[320px] md:grid-cols-[1.2fr_0.8fr]">
                  <div className="relative min-h-[240px] overflow-hidden md:min-h-[320px]">
                    <Image
                      src={
                        latestLead.bannerImage || "/assets/img/blank-book.jpg"
                      }
                      alt={latestLead.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 52rem"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex h-full flex-col p-5 sm:p-6 lg:p-7">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <BookOpenText className="h-4 w-4 text-[#f36a3d]" />
                      <span>Blog post</span>
                    </div>
                    <h3 className="mt-4 text-2xl font-bold leading-tight text-slate-950 transition-colors group-hover:text-primary sm:text-[2.1rem]">
                      {latestLead.title}
                    </h3>
                    <p className="mt-4 max-w-md text-base leading-7 text-slate-700">
                      {latestLead.excerpt}
                    </p>
                    <div className="mt-5 flex items-center gap-4 text-xs text-slate-500 sm:text-sm">
                      <span>
                        {format(
                          latestLead.publishedAt || new Date(),
                          "MMMM d, yyyy"
                        )}
                      </span>
                    </div>
                    <span className="mt-auto pt-8 text-sm font-semibold text-primary underline decoration-[#f36a3d] underline-offset-4">
                      Read more
                    </span>
                  </div>
                </div>
              </Link>
            ) : null}

            {latestSide ? (
              <Link
                href={`/blogs/${latestSide.slug}`}
                className="group overflow-hidden bg-white shadow-[0_16px_48px_rgba(76,57,31,0.1)] ring-1 ring-[#ece2d3]"
              >
                <div className="relative aspect-[1.15] overflow-hidden">
                  <Image
                    src={latestSide.bannerImage || "/assets/img/blank-book.jpg"}
                    alt={latestSide.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 20rem"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex min-h-[140px] flex-col p-5">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <BookOpenText className="h-3.5 w-3.5 text-[#f36a3d]" />
                    <span>Blog post</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-bold leading-tight text-slate-950 transition-colors group-hover:text-primary">
                    {latestSide.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    {latestSide.excerpt}
                  </p>
                  <span className="mt-auto pt-5 text-sm font-semibold text-primary underline decoration-[#f36a3d] underline-offset-4">
                    Read more
                  </span>
                </div>
              </Link>
            ) : null}

            {latestGrid.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blogs/${blog.slug}`}
                className="group overflow-hidden bg-white shadow-[0_14px_42px_rgba(76,57,31,0.1)] ring-1 ring-[#ece2d3]"
              >
                <div className="relative aspect-[1.15] overflow-hidden">
                  <Image
                    src={blog.bannerImage || "/assets/img/blank-book.jpg"}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 18rem"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex min-h-[140px] flex-col p-5">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <BookOpenText className="h-3.5 w-3.5 text-[#f36a3d]" />
                    <span>Blog post</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold leading-tight text-slate-950 transition-colors group-hover:text-primary">
                    {blog.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    {blog.excerpt}
                  </p>
                  <span className="mt-auto pt-5 text-sm font-semibold text-primary underline decoration-[#f36a3d] underline-offset-4">
                    Read more
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f1f0ed] px-4 py-18 lg:py-22">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-950 sm:text-4xl lg:text-5xl">
              More from the Blog
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-6xl divide-y divide-[#d9d3c8]">
            {moreBlogs.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blogs/${blog.slug}`}
                className="grid gap-6 py-8 sm:grid-cols-[230px_1fr] sm:items-center sm:gap-8 group"
              >
                <div className="relative aspect-[1.18] overflow-hidden">
                  <Image
                    src={blog.bannerImage || "/assets/img/blank-book.jpg"}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 230px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
                    <span className="inline-flex items-center gap-2">
                      <BookOpenText className="h-4 w-4 text-[#f36a3d]" />
                      Blog post
                    </span>
                    <span>
                      {format(blog.publishedAt || new Date(), "MMMM d, yyyy")}
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold leading-tight text-slate-950 underline-offset-4 transition-colors group-hover:text-primary group-hover:underline sm:text-3xl">
                    {blog.title}
                  </h3>
                  <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
                    {blog.excerpt}
                    <span className="ml-2 font-semibold text-primary underline decoration-[#f36a3d] underline-offset-4">
                      Read more
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
