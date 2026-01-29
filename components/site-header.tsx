import Link from "next/link";
import { DesktopNav } from "@/components/desktop-nav";
import { MobileNav } from "@/components/mobile-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-1">
          <span className="text-xl font-extrabold uppercase tracking-wider text-foreground">
            Best
          </span>
          <span className="text-xl font-extrabold uppercase tracking-wider text-primary">
            MMA
          </span>
        </Link>
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
}
