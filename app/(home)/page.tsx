import { Suspense } from "react";

import { getAllBlogs } from "@/lib/api";
import { CommunityImpact } from "./_components/community-impact";
import { Faqs } from "./_components/faqs";
import { Hero } from "./_components/hero";
import { MeetVolunteers } from "./_components/meet-volunteers";
import { OurValues } from "./_components/our-values";
import { Testimonials } from "./_components/testimonials";
import { UpcomingEventsShowcase } from "./_components/upcoming-events-showcase";
import { VideoBanner } from "./_components/video-banner";
import { WhoWeAre } from "./_components/who-we-are";
import { FeaturedBlogs } from "./_components/featured-blogs";
import { SkeletonItems } from "@/components/common/skeleton-items";

export const revalidate = 0;

export default async function HomePage() {
  const blogsDataPromise = getAllBlogs({
    fields: ["bannerImage", "title", "slug", "excerpt", "publishedAt"],
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
      <UpcomingEventsShowcase />
      <Faqs />
      <Suspense fallback={<SkeletonItems />}>
        <FeaturedBlogs blogsDataPromise={blogsDataPromise} />
      </Suspense>
    </main>
  );
}
