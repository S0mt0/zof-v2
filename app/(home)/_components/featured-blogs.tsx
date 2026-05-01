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
    <section className="relative overflow-hidden px-4 py-20 lg:py-24">
      <div className="pointer-events-none absolute -left-16 top-6 h-56 w-56 rounded-full border border-secondary/35" />
      <div className="pointer-events-none absolute -right-10 bottom-12 h-72 w-72 rounded-full border border-white/65" />
      <div className="pointer-events-none absolute right-6 bottom-24 h-56 w-56 rounded-full border border-white/65" />
      <div className="pointer-events-none absolute left-6 bottom-4 h-24 w-24 rounded-[40%] bg-secondary/45 blur-[1px]" />

      <div className="relative mx-auto max-w-6xl">
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
            "mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
            blogs.length === 1 && "mx-auto max-w-sm",
            blogs.length === 2 && "mx-auto max-w-4xl lg:grid-cols-2"
          )}
        >
          {blogs.map((blog) => (
            <article
              key={blog.slug}
              className="group overflow-hidden rounded-[1.7rem] bg-white shadow-[0_18px_40px_rgba(76,57,31,0.08)] transition-transform duration-300 hover:-translate-y-1 min-w-70 w-fit"
            >
              <Link
                href={`/blogs/${blog.slug}`}
                aria-label={`Read blog: ${blog.title}`}
                className="block h-full"
              >
                <div className="relative aspect-[1.18] overflow-hidden">
                  <Image
                    src={blog.bannerImage || "/assets/img/blank-book.jpg"}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="space-y-4 px-7 py-7">
                  <h3 className="text-[1.05rem] font-bold leading-8 text-primary sm:text-[1.12rem]">
                    {blog.title}
                  </h3>

                  {blog.excerpt ? (
                    <p className="line-clamp-3 text-sm leading-8 text-slate-500">
                      {blog.excerpt}
                    </p>
                  ) : null}

                  <span className="inline-flex items-center gap-2 pt-1 text-sm font-semibold text-primary transition-colors group-hover:text-[#f36a3d]">
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
