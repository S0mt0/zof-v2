import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About Us",
  },
  {
    href: "/blog",
    label: "Blog",
  },
  {
    href: "/gallery",
    label: "Photo Gallery",
  },
  {
    href: "/contact",
    label: "Contact Us",
  },
];

export const navContact = [
  {
    prompt: "Locate Address:",
    info: "Garki Area 11 FCT, Abuja Nigeria.",
    icon: MapPin,
    bgImage: "blob_4lobe.png",
  },
  {
    prompt: "Call us any time:",
    info: "+2348037864683",
    icon: Phone,
    bgImage: "blob_4lobe.png",
  },
  {
    prompt: "Email us any time:",
    info: "onyekazita@gmail.com",
    icon: Mail,
    bgImage: "blob_4lobe.png",
  },
];

export const navSocialLinks = [
  {
    href: "#",
    icon: FaFacebookF,
  },
  {
    href: "#",
    icon: FaXTwitter,
  },
  {
    href: "#",
    icon: FaYoutube,
  },
  {
    href: "#",
    icon: FaLinkedinIn,
  },
];
