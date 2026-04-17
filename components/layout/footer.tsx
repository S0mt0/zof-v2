import Link from "next/link";

import { Logo } from "../common/logo";
import { navSocialLinks } from "./nav-data";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog Post" },
  { href: "/gallery", label: "Photo Gallery" },
];

const touchLinks = [
  { href: "/contact", label: "Contact Us" },
  { href: "#", label: "Our Services" },
];

export const Footer = () => {
  return (
    <footer className="mt-20 bg-[#23262f] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[160px_1fr_1fr_1.2fr_1.6fr] lg:gap-10 lg:px-16 lg:py-20">
        <div className="flex justify-center lg:justify-start">
          <Logo className="h-16 w-16 object-contain" />
        </div>

        <div className="space-y-5 text-center lg:text-left">
          <h3 className="text-2xl font-extrabold text-white">Quick Link</h3>
          <ul className="space-y-3 text-[1.05rem] font-medium text-white/60">
            {quickLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="transition-colors hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-5 text-center lg:text-left">
          <h3 className="text-2xl font-extrabold text-white">Get In Touch</h3>
          <ul className="space-y-3 text-[1.05rem] font-medium text-white/60">
            {touchLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="transition-colors hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-5 text-center lg:text-left">
          <h3 className="text-2xl font-extrabold text-white">Address</h3>
          <address className="max-w-[14rem] not-italic text-[1.05rem] font-medium leading-relaxed text-white/60 lg:max-w-[16rem]">
            16, Nkwere Street, Garki Area 11 FCT, Abuja Nigeria.
          </address>
        </div>

        <div className="space-y-6 text-center lg:text-left">
          <div className="space-y-5">
            <h3 className="text-2xl font-extrabold text-white">Newsletter</h3>
            <form className="mx-auto flex max-w-md overflow-hidden rounded-full bg-white lg:mx-0">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="min-w-0 flex-1 bg-transparent px-6 py-4 text-lg text-slate-700 placeholder:text-slate-500 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 bg-primary px-6 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#4f7935]"
              >
                Subscribe
              </button>
            </form>
            <p className="text-lg text-white/60">
              Your email is safe with us,we don&apos;t spam.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold text-white">Follow Us</h3>
            <ul className="flex justify-center gap-4 lg:justify-start">
              {navSocialLinks.map(({ href, icon: Icon }, idx) => (
                <li key={idx}>
                  <Link
                    href={href}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f2f7ef] text-[#23262f] transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8 bg-[#1c1f27] px-6 py-5 text-center text-sm text-white/55">
        &copy; 2025. All rights reserved. Website by{" "}
        <a
          href="mailto:sewkito@gmail.com"
          className="text-white underline underline-offset-4"
        >
          Sewkito.
        </a>
      </div>
    </footer>
  );
};
