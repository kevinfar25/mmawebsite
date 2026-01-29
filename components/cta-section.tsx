import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 translate-y-1/2 rounded-full bg-primary/8 blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold uppercase tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          Ready to <span className="text-primary">Step Into the Ring?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Your first class is on us. Walk in, try a session, and see why our
          members call Best MMA the best gym in the city. No experience needed.
        </p>
        <div className="mt-8">
          <Button
            asChild
            size="lg"
            className="text-base font-bold uppercase tracking-wide"
          >
            <Link href="/contact">Claim Your Free Class</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
