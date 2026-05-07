"use client";
import { MdMenu } from "react-icons/md";
import { SlMenu } from "react-icons/sl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useToggle } from "usehooks-ts";
import { useEffect, useRef, useState } from "react";
import { LuHeartHandshake } from "react-icons/lu";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import { navContact, navLinks, navSocialLinks } from "./nav-data";
import { cn } from "@/lib/utils";
import { Logo } from "../common/logo";
import { Button } from "../ui/button";
import { FaHamburger, FaHeart } from "react-icons/fa";

const DonateButton = ({ className }: { className?: string }) => (
  <Button
    asChild
    variant={"link"}
    className={cn(
      "bg-secondary text-white px-10 h-18 md:h-14 rounded-full hover:no-underline font-semibold cursor-pointer hover:bg-accent transition-all duration-300",
      className
    )}
  >
    <Link href={"/donate"} className="flex items-center gap-4">
      <FaHeart fill="white" className="h-3 w-3" /> Donate Now
    </Link>
  </Button>
);

export const Navbar = () => {
  const pathname = usePathname();
  const sheetCloseRef = useRef<HTMLButtonElement>(null);

  const closeSheet = () => {
    sheetCloseRef.current?.click();
  };

  // const [toggled, toggle] = useToggle();

  // const [showStickyNav, setShowStickyNav] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     const vh = window.innerHeight;

  //     if (scrollY > vh * 0.7) {
  //       setShowStickyNav(true);
  //     } else {
  //       setShowStickyNav(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className="">
      <div className="h-fit hidden md:flex items-center justify-center lg:justify-between py-2 px-3 gap-3 bg-slate-50">
        <Logo className="min-w-18 hidden md:block shrink-0" />
        <ul className="gap-2 lg:gap-5 items-center justify-center h-full hidden md:flex">
          {navContact.map(({ prompt, info, icon: Icon, bgImage }) => (
            <li
              key={info}
              className="h-full flex items-center gap-2 xl:border-r-2 last-of-type:border-r-0 last-of-type:pr-0 pr-2 md:pr-4 lg:pr-10"
            >
              <div
                className="h-14 w-14 flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: `url(/assets/img/${bgImage})` }}
              >
                <Icon className="text-slate-50 shrink-0 h-5 w-5" />
              </div>
              <div>
                <small className="text-muted-foreground">{prompt}</small>
                <h2 className="text-base lg:text-lg xl:text-xl font-bold">
                  {info}
                </h2>
              </div>
            </li>
          ))}
        </ul>

        <ul className="hidden 2xl:flex items-center gap-1.5">
          {navSocialLinks.map(({ href, icon: Icon }, idx) => (
            <li key={idx}>
              <Link
                href={href}
                className="h-11 w-11 rounded-full border flex items-center justify-center text-slate-700 hover:bg-green-800 duration-300 hover:text-slate-50 transition-all"
              >
                <Icon />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main nav */}
      <div className="h-16 flex items-center md:h-7 md:bg-slate-50 md:bg-none bg-linear-to-r from-[#077e51] to-[#134d49]  relative">
        <div className="lg:w-[98%] w-[98%] xs:w-[90%] gap-1 md:gap-0 flex items-center justify-between z-3 h-fit absolute top-1/2 md:top-0 md:translate-y-0 -translate-y-1/2 inset-0 mx-auto">
          <div className="md:bg-linear-to-r from-[#077e51] to-[#134d49] gap-1 text-slate-50 rounded-full flex items-center justify-between px-1.5 md:px-8 h-16 md:h-14 flex-1">
            {/* <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(25,95,74,0.95),rgba(15,23,42,0.92))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_28%)]" />
            <div className="absolute -left-10 top-18 h-56 w-56 rounded-full border border-secondary/25" />
            <div className="absolute right-8 top-8 hidden h-72 w-72 rounded-full border border-white/10 lg:block" />
            <div className="absolute -right-14 bottom-8 h-72 w-72 rounded-full bg-secondary/12 blur-3xl" /> */}
            {/* <div className="flex items-center gap-3"> */}
            <Logo className="w-14 h-auto shrink-0 md:hidden" />

            <Sheet>
              <SheetTrigger asChild>
                <Button className="h-fit w-fit shadow-none border-none cursor-pointer text-white rounded-full bg-transparent flex items-center justify-center md:hidden">
                  <SlMenu className="h-16 w-16 shrink-0" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-slate-50 border-l border-primary overflow-y-auto">
                <SheetHeader className="bg-slate-100">
                  <Logo className="w-18 h-auto shrink-0 md:hidden" />
                </SheetHeader>
                <ul className="flex flex-col items-start p-8 gap-8 md:hidden">
                  <SheetClose className="hidden" ref={sheetCloseRef} />
                  {navLinks.map(({ href, label }) => (
                    <li
                      key={href}
                      className="border-b pb-1 border-accent/10 w-full"
                      onClick={closeSheet}
                    >
                      <Link
                        href={href}
                        className={cn(
                          "hover:text-yellow-400 transition-colors font-semibold",
                          pathname === href && "text-amber-500"
                        )}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                  <li
                    className="border-b pb-1 border-accent/10 w-full"
                    onClick={closeSheet}
                  >
                    <Link
                      href="/donate"
                      className={cn(
                        "hover:text-yellow-400 transition-colors font-semibold",
                        pathname === "/donate" && "text-amber-500"
                      )}
                    >
                      Donate
                    </Link>
                  </li>
                </ul>
                <SheetFooter>
                  <ul className="md:hidden flex justify-center items-center gap-1.5">
                    {navSocialLinks.map(({ href, icon: Icon }, idx) => (
                      <li key={idx}>
                        <Link
                          href={href}
                          className="h-11 w-11 rounded-full border flex items-center justify-center text-slate-700 hover:bg-green-800 duration-300 hover:text-slate-50 transition-all"
                        >
                          <Icon />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </SheetFooter>
              </SheetContent>
            </Sheet>
            {/* </div> */}
            {/* <DonateButton className="md:hidden px-6 h-14" /> */}
            {/* Left nav links */}
            <ul className="md:flex items-center gap-8 hidden">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "hover:text-yellow-400 transition-colors font-semibold text-sm lg:text-base",
                      pathname === href && "text-yellow-400"
                    )}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right CTA section */}
            <div className="hidden xl:flex items-center gap-3">
              {/* message pill */}
              <LuHeartHandshake className="text-amber-300 w-5 h-5 shrink-0" />
              <span>Are you ready to help them? Partner with us today.</span>
            </div>
          </div>

          <DonateButton className="hidden md:flex" />
        </div>
      </div>
    </div>
  );
};
