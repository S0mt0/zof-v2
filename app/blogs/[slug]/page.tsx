import type { Metadata } from "next";
import { format } from "date-fns";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getBlog } from "@/lib/api";
import { findPlaceholderBlog } from "@/lib/content/placeholders";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 0;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blogResponse = await getBlog(slug);
  const blog = blogResponse?.data || findPlaceholderBlog(slug);

  if (!blog) {
    return {
      title: "Blog Post",
    };
  }

  return {
    title: blog.title,
    description: blog.excerpt,
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const blogResponse = await getBlog(slug);
  const blog = blogResponse?.data || findPlaceholderBlog(slug);

  if (!blog) notFound();

  return (
    <main className="bg-[#fcfaf6]">
      <section className="border-b border-[#efe7da] px-4 pb-12 pt-32 lg:pt-40">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/blogs"
            className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f36a3d] transition-colors hover:text-primary"
          >
            Back to Blog
          </Link>

          <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
            <span className="h-2 w-2 rounded-full bg-[#f36a3d]" />
            Community Journal
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
            {blog.title}
          </h1>
          {blog.excerpt ? (
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              {blog.excerpt}
            </p>
          ) : null}

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2">
              <CalendarDays className="h-4 w-4 text-[#f36a3d]" />
              {format(blog.publishedAt || blog.createdAt || new Date(), "MMMM d, yyyy")}
            </span>
            {blog.author?.name ? (
              <span className="rounded-full bg-white px-4 py-2">
                By {blog.author.name}
              </span>
            ) : null}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 lg:py-14">
        <div className="mx-auto max-w-5xl">
          <div className="relative aspect-[1.85] overflow-hidden rounded-[2rem]">
            <Image
              src={blog.bannerImage || "/assets/img/blank-book.jpg"}
              alt={blog.title}
              fill
              sizes="(max-width: 1280px) 100vw, 72rem"
              className="object-cover"
            />
          </div>

          <article className="prose prose-slate mx-auto mt-10 max-w-3xl prose-headings:text-slate-950 prose-p:text-slate-700 prose-p:leading-8">
            <div dangerouslySetInnerHTML={{ __html: blog.content || blog.excerpt }} />
          </article>
        </div>
      </section>
    </main>
  );
}
