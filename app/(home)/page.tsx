import { Suspense } from "react";

import { getAllBlogs, getAllEvents } from "@/lib/api";
import { CommunityImpact } from "./_components/community-impact";
import { Faqs } from "./_components/faqs";
import { Hero } from "./_components/hero";
import { MeetVolunteers } from "./_components/meet-volunteers";
import { OurValues } from "./_components/our-values";
import { Testimonials } from "./_components/testimonials";
import { VideoBanner } from "./_components/video-banner";
import { WhoWeAre } from "./_components/who-we-are";
import { FeaturedBlogs } from "./_components/featured-blogs";
import { SkeletonItems } from "@/components/common/skeleton-items";
import { FeaturedEvents } from "./_components/featured-events";

export const revalidate = 0;

export default async function HomePage() {
  const blogsDataPromise = getAllBlogs({
    fields: ["bannerImage", "title", "slug", "excerpt", "publishedAt"],
    featured: "featured",
  });

  const eventsDataPromise = getAllEvents({
    fields: [
      "name",
      "excerpt",
      "slug",
      "status",
      "date",
      "startTime",
      "endTime",
      "location",
      "bannerImage",
    ],
    featured: "featured",
  });

  return (
    <main>
      <Hero />
      <WhoWeAre />
      <OurValues />
      <MeetVolunteers />
      <CommunityImpact />
      <VideoBanner />
      <Testimonials />
      <Faqs />
      <Suspense fallback={<SkeletonItems />}>
        <FeaturedBlogs blogsDataPromise={blogsDataPromise} />
      </Suspense>
      <Suspense>
        <FeaturedEvents eventsDataPromise={eventsDataPromise} />
      </Suspense>
      {/* <CTABanner /> */}
    </main>
  );
}
