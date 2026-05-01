import type { Metadata } from "next";

import { DonateExperience } from "./_components/donate-experience";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Zita-Onyeka Foundation through clear, purpose-driven giving for general support or specific campaigns.",
};

export default function DonatePage() {
  return <DonateExperience />;
}
