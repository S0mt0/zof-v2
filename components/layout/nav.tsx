"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useToggle } from "usehooks-ts";
import { useEffect, useState } from "react";
import { LuHeartHandshake } from "react-icons/lu";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import { navContact, navLinks, navSocialLinks } from "./nav-data";
import { cn } from "@/lib/utils";
import { Logo } from "../common/logo";
import { Button } from "../ui/button";
import { FaHeart } from "react-icons/fa";

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
  const [toggled, toggle] = useToggle();

  const [showStickyNav, setShowStickyNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      if (scrollY > vh * 0.7) {
        setShowStickyNav(true);
      } else {
        setShowStickyNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <div className="h-22 flex items-center md:h-7 bg-slate-50 relative">
        <div className="lg:w-[98%] w-[90%] gap-1 md:gap-0 flex items-center justify-between z-3 h-fit absolute top-1/2 md:top-0 md:translate-y-0 -translate-y-1/2 inset-0 mx-auto">
          <div className="bg-primary gap-1 text-slate-50 rounded-full flex items-center justify-between px-1.5 md:px-8 h-20 md:h-14 flex-1">
            <Logo className="w-18 h-auto shrink-0 md:hidden" />
            <DonateButton className="md:hidden px-6" />
            {/* Left nav links */}
            <ul className="md:flex items-center gap-8 hidden">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "hover:text-yellow-400 transition-colors font-semibold",
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

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="h-16 w-16 cursor-pointer text-white rounded-full bg-primary flex items-center justify-center md:hidden"
              >
                <Menu className="h-8 w-8" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-slate-50 border-l border-primary">
              <SheetHeader className="bg-slate-100">
                <Logo className="w-18 h-auto shrink-0 md:hidden" />
              </SheetHeader>

              <ul className="flex flex-col items-start p-8 gap-8 md:hidden">
                {navLinks.map(({ href, label }) => (
                  <li
                    key={href}
                    className="border-b pb-1 border-accent/10 w-full"
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
        </div>
      </div>
    </div>
  );
};
