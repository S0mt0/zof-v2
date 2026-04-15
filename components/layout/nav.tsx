"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useToggle } from "usehooks-ts";
import { AnimatePresence, motion } from "framer-motion";

import { navContact, navLinks, navSocialLinks } from "./nav-data";
import { cn } from "@/lib/utils";
import { Logo } from "../common/logo";

export const Navbar = () => {
  const pathname = usePathname();
  const [toggled, toggle] = useToggle();

  return (
    <div className="">
      <div className="h-fit flex items-center justify-center lg:justify-between py-2 px-3 gap-3 bg-slate-50">
        <div className="gap-6 h-full items-center justify-center hidden lg:flex">
          <button className="flex md:hidden" onClick={toggle}>
            {toggled ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
          <Logo className="min-w-18 shrink-0" />
        </div>
        <ul className="gap-2 lg:gap-5 items-center justify-center h-full hidden md:flex">
          {navContact.map(({ prompt, info, icon: Icon }) => (
            <li
              key={info}
              className="h-full flex items-center gap-2 xl:border-r-2 last-of-type:border-r-0 pr-2 md:pr-4 lg:pr-10"
            >
              <Icon className="text-amber-400 shrink-0" />
              <div>
                <small className="text-muted-foreground">{prompt}</small>
                <h2 className="text-base lg:text-lg xl:text-xl font-bold">
                  {info}
                </h2>
              </div>
            </li>
          ))}
        </ul>

        <ul className="hidden px-5 md:px-6 2xl:flex items-center gap-1.5">
          {navSocialLinks.map(({ href, icon: Icon }, idx) => (
            <li key={idx}>
              <Link
                href={href}
                className="h-11 w-11 rounded-full border flex items-center justify-center text-slate-700 hover:bg-slate-200 transition-colors"
              >
                <Icon />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Main nav */}
      <div className="bg-slate-50">
        {/* create another container that will contain the main links with the sticky green background*/}
        <div></div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {toggled && (
          <motion.div
            initial={{ maxHeight: 0 }}
            animate={{ maxHeight: "100vh" }}
            exit={{ maxHeight: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute bottom-0 translate-y-full w-full bg-green-800 p-10 md:hidden overflow-hidden"
          >
            <ul className="gap-6 items-center h-full flex flex-col w-full">
              {navLinks.map(({ href, label }) => (
                <li key={href} className="relative pl-4 w-full">
                  <Link
                    href={href}
                    className="hover:text-[#e1ba38] transition-colors w-full block"
                    onClick={() => setTimeout(() => toggle(), 100)}
                  >
                    {label}
                  </Link>
                  <div
                    className={cn(
                      "absolute left-0 w-1 bg-[#e1ba38] h-full hidden -bottom-1/2 -translate-y-1/2",
                      href === pathname && "block"
                    )}
                  />
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
