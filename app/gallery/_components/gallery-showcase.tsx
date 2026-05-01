"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Play, X } from "lucide-react";
import Masonry from "react-masonry-css";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type PhotoItem = {
  type: "photo";
  src: string;
  alt: string;
};

type VideoItem = {
  type: "video";
  src: string;
  poster: string;
  title: string;
};

type MediaItem = PhotoItem | VideoItem;

const photos: PhotoItem[] = [
  {
    type: "photo",
    src: "/assets/img/zof-team.jpeg",
    alt: "Foundation team gathered together during a program",
  },
  {
    type: "photo",
    src: "/assets/img/zof_led_community.jpg",
    alt: "Community members receiving support from the foundation",
  },
  {
    type: "photo",
    src: "/assets/img/ZOF_WOMEN_SKILL_AQ.jpg",
    alt: "Women participating in empowerment activities",
  },
  {
    type: "photo",
    src: "/assets/img/classroom.jpg",
    alt: "Children in a classroom supported by the foundation",
  },
  {
    type: "photo",
    src: "/assets/img/child_group.jpg",
    alt: "Children smiling together during a foundation activity",
  },
  {
    type: "photo",
    src: "/assets/img/zof_volunteer.jpg",
    alt: "Volunteer support during a foundation activity",
  },
  {
    type: "photo",
    src: "/assets/img/zof_groupie_01.jpg",
    alt: "Foundation community group photo",
  },
  {
    type: "photo",
    src: "/assets/img/zof_empower_youth.jpg",
    alt: "Youth empowerment gathering supported by the foundation",
  },
  {
    type: "photo",
    src: "/assets/img/IMG_3553.JPEG",
    alt: "Foundation outreach moment captured during community engagement",
  },
  {
    type: "photo",
    src: "/assets/img/zinny.jpeg",
    alt: "Community-focused support moment from the foundation",
  },
  {
    type: "photo",
    src: "/assets/img/ZOF_CHILDREN_SUNSET.png",
    alt: "Children together during a foundation-supported moment",
  },
  {
    type: "photo",
    src: "/assets/img/together.jpg",
    alt: "A symbolic image of unity and shared support",
  },
];

const videos: VideoItem[] = [
  {
    type: "video",
    src: "https://zitaonyekafoundation.s3.eu-west-2.amazonaws.com/videos/outreach_video.mp4",
    poster: "/assets/img/outreach_banner.JPEG",
    title: "Outreach in Motion",
  },
];

const mixMedia = (photoItems: PhotoItem[], videoItems: VideoItem[]) => {
  if (!videoItems.length) return photoItems;

  const result: MediaItem[] = [];
  const spacing = Math.max(2, Math.ceil(photoItems.length / videoItems.length));
  let photoIndex = 0;
  let videoIndex = 0;

  while (photoIndex < photoItems.length || videoIndex < videoItems.length) {
    let count = 0;

    while (photoIndex < photoItems.length && count < spacing) {
      result.push(photoItems[photoIndex]);
      photoIndex += 1;
      count += 1;
    }

    if (videoIndex < videoItems.length) {
      result.push(videoItems[videoIndex]);
      videoIndex += 1;
    }
  }

  return result;
};

const allMedia: MediaItem[] = mixMedia(photos, videos);

const masonryBreakpoints = {
  default: 3,
  1280: 3,
  1024: 2,
  640: 1,
};

const MasonryGrid = ({
  items,
  onOpen,
}: {
  items: MediaItem[];
  onOpen: (item: MediaItem) => void;
}) => (
  <Masonry
    breakpointCols={masonryBreakpoints}
    className="gallery-masonry flex gap-4 sm:gap-5 lg:gap-6"
    columnClassName="gallery-masonry-column"
  >
    {items.map((item, index) => (
      <button
        key={`${item.type}-${
          item.type === "photo" ? item.src : item.title
        }-${index}`}
        type="button"
        onClick={() => onOpen(item)}
        className="group relative mb-4 block w-full overflow-hidden rounded-[1.5rem] bg-white text-left sm:mb-5 lg:mb-6"
      >
        {item.type === "photo" ? (
          <Image
            src={item.src}
            alt={item.alt}
            width={900}
            height={1200}
            className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="relative">
            <Image
              src={item.poster}
              alt={item.title}
              width={900}
              height={1200}
              className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-black/18" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/88 text-primary shadow-lg">
                <Play className="ml-1 h-6 w-6 fill-current" />
              </span>
            </div>
          </div>
        )}
      </button>
    ))}
  </Masonry>
);

export function GalleryShowcase() {
  const [activeItem, setActiveItem] = useState<MediaItem | null>(null);
  const [activeCollection, setActiveCollection] = useState<MediaItem[]>([]);

  const openItem = (item: MediaItem, collection: MediaItem[]) => {
    setActiveCollection(collection);
    setActiveItem(item);
  };

  const activeIndex = activeItem
    ? activeCollection.findIndex((item) =>
        item.type === "photo" && activeItem.type === "photo"
          ? item.src === activeItem.src
          : item.type === "video" &&
            activeItem.type === "video" &&
            item.src === activeItem.src
      )
    : -1;

  const canNavigate = activeCollection.length > 1 && activeIndex >= 0;

  const showPrevious = useCallback(() => {
    if (!canNavigate) return;
    const previousIndex =
      activeIndex === 0 ? activeCollection.length - 1 : activeIndex - 1;
    setActiveItem(activeCollection[previousIndex]);
  }, [activeCollection, activeIndex, canNavigate]);

  const showNext = useCallback(() => {
    if (!canNavigate) return;
    const nextIndex =
      activeIndex === activeCollection.length - 1 ? 0 : activeIndex + 1;
    setActiveItem(activeCollection[nextIndex]);
  }, [activeCollection, activeIndex, canNavigate]);

  useEffect(() => {
    if (!activeItem) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveItem(null);
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeItem, showNext, showPrevious]);

  return (
    <main className="bg-[#fbf8f2]">
      <section className="relative overflow-hidden px-4 pb-10 pt-30 lg:pb-14 lg:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(25,95,74,0.06),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(243,106,61,0.08),transparent_22%)]" />
        <div className="absolute -left-12 top-6 h-52 w-52 rounded-full border border-secondary/35" />
        <div className="absolute right-0 bottom-0 h-64 w-64 rounded-full border border-white/70" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-primary">
              <span className="h-2 w-2 rounded-full bg-[#f36a3d]" />
              Gallery
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-primary sm:text-5xl lg:text-6xl">
              Moments from the mission.
            </h1>
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-7xl">
          <Tabs defaultValue="photos" className="gap-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <TabsList
                variant="line"
                className="h-auto gap-2 rounded-full border border-[#e8ddc8] bg-white p-1"
              >
                <TabsTrigger
                  value="photos"
                  className="rounded-full px-5 py-2.5 text-sm text-slate-600 data-[state=active]:bg-[#f36a3d] data-[state=active]:text-accent data-[state=active]:after:hidden"
                >
                  Photos
                </TabsTrigger>
                <TabsTrigger
                  value="videos"
                  className="rounded-full px-5 py-2.5 text-sm text-slate-600 data-[state=active]:bg-[#f36a3d] data-[state=active]:text-accent data-[state=active]:after:hidden"
                >
                  Videos
                </TabsTrigger>
                <TabsTrigger
                  value="all"
                  className="rounded-full px-5 py-2.5 text-sm text-slate-600 data-[state=active]:bg-[#f36a3d] data-[state=active]:text-accent data-[state=active]:after:hidden"
                >
                  Mixed
                </TabsTrigger>
              </TabsList>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-[#f36a3d]"
              >
                Work with us
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <TabsContent value="photos" className="mt-0">
              <MasonryGrid
                items={photos}
                onOpen={(item) => openItem(item, photos)}
              />
            </TabsContent>

            <TabsContent value="videos" className="mt-0">
              <MasonryGrid
                items={videos}
                onOpen={(item) => openItem(item, videos)}
              />
            </TabsContent>

            <TabsContent value="all" className="mt-0">
              <MasonryGrid
                items={allMedia}
                onOpen={(item) => openItem(item, allMedia)}
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {activeItem ? (
        <div
          className="fixed inset-0 z-50 bg-black/92 px-4 py-4 sm:px-6 sm:py-6"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveItem(null)}
        >
          {canNavigate ? (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                aria-label="Previous gallery item"
                className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/18 sm:left-6"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                aria-label="Next gallery item"
                className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/18 sm:right-6"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </>
          ) : null}

          <button
            type="button"
            onClick={() => setActiveItem(null)}
            aria-label="Close gallery item"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/18 sm:right-6 sm:top-6"
          >
            <X className="h-5 w-5" />
          </button>

          <div
            className="flex h-full w-full items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            {activeItem.type === "photo" ? (
              <div className="relative h-full w-full">
                <Image
                  src={activeItem.src}
                  alt={activeItem.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="w-full max-w-6xl overflow-hidden rounded-[1.5rem] bg-black">
                <video
                  className="max-h-[88vh] w-full bg-black"
                  controls
                  autoPlay
                  poster={activeItem.poster}
                >
                  <source src={activeItem.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            )}
          </div>

          {canNavigate ? (
            <div className="pointer-events-none absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium tracking-[0.18em] text-white/80 uppercase sm:bottom-6">
              {activeIndex + 1} / {activeCollection.length}
            </div>
          ) : null}
        </div>
      ) : null}

      <style jsx global>{`
        .gallery-masonry-column {
          background-clip: padding-box;
        }
      `}</style>
    </main>
  );
}
