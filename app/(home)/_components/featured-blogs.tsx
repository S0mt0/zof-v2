import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

type Props = {
  blogsDataPromise?: Promise<ApiPaginatedResponse<IBlog> | undefined>;
};

export const FeaturedBlogs = async ({ blogsDataPromise }: Props) => {
  const blogs = (await blogsDataPromise)?.data?.slice(0, 3);

  if (!blogs || !blogs.length) return null;

  return (
    <section className="relative overflow-hidden bg-[#fdf7ef] px-4 py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-12 top-10 h-64 w-64 rounded-full border border-secondary/30" />
      <div className="pointer-events-none absolute -right-20 bottom-8 h-80 w-80 rounded-full border border-white/70" />
      <div className="pointer-events-none absolute -right-6 bottom-20 h-60 w-60 rounded-full border border-white/70" />
      <div className="pointer-events-none absolute left-4 bottom-6 h-28 w-28 rounded-[42%] bg-secondary/30 blur-[2px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 text-sm font-medium text-primary">
            <span className="h-2 w-2 rounded-full bg-[#f36a3d]" />
            Our Blog
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
            Latest Updates from
            <br />
            Our Community
          </h2>
        </div>

        <div
          className={cn(
            "mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3",
            blogs.length === 1 && "max-w-xl mx-auto",
            blogs.length === 2 && "max-w-5xl mx-auto xl:grid-cols-2"
          )}
        >
          {blogs.map((blog) => (
            <article
              key={blog.slug}
              className="group overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_rgba(76,57,31,0.08)] transition-transform duration-300 hover:-translate-y-1"
            >
              <Link
                href={`/blogs/${blog.slug}`}
                aria-label={`Read blog: ${blog.title}`}
                className="block h-full"
              >
                <div className="relative aspect-[1.15] overflow-hidden">
                  <Image
                    src={blog.bannerImage || "/assets/img/blank-book.jpg"}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="space-y-4 px-7 py-6">
                  <h3 className="text-2xl font-semibold leading-snug text-primary">
                    {blog.title}
                  </h3>

                  {blog.excerpt ? (
                    <p className="line-clamp-3 text-base leading-7 text-slate-500">
                      {blog.excerpt}
                    </p>
                  ) : null}

                  <span className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-primary transition-colors group-hover:text-[#f36a3d]">
                    Read More
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 rounded-full bg-[#f36a3d] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#ea5f31]"
          >
            View All Stories
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
