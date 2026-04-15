import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href="/">
      <Image
        className={cn(className)}
        src="/assets/seo/zof-logo.png"
        height={75}
        width={75}
        alt="@zof-logo"
        priority
      />
    </Link>
  );
};
