import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-1">
              <span className="text-lg font-extrabold uppercase tracking-wider text-foreground">
                Best
              </span>
              <span className="text-lg font-extrabold uppercase tracking-wider text-primary">
                MMA
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Forging champions since 2018. Train BJJ, Muay Thai, Wrestling, and
              MMA with world-class coaches.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <nav className="mt-3 flex flex-col gap-2">
              <Link
                href="/"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <p>123 Fighter Lane, Downtown</p>
              <p>info@bestmma.com</p>
              <p>(555) 123-4567</p>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col items-center justify-between gap-2 text-xs text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Best MMA. All rights reserved.</p>
          <p>Train hard. Fight easy.</p>
        </div>
      </div>
    </footer>
  );
}
