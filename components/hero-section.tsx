import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-green-500 animate-pulse">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-accent/8 blur-[80px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Premier Mixed Martial Arts Training
        </p>
        <h1 className="text-5xl font-extrabold uppercase leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Get Maximum
          <br />
          <span className="text-primary">Power</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Train with champion-level coaches in BJJ, Muay Thai, Wrestling, and
          MMA. Whether you are a beginner or a seasoned fighter, Best MMA is
          where your journey begins.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className="text-base font-bold uppercase tracking-wide"
          >
            <Link href="/contact">Start Training Today</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-base font-bold uppercase tracking-wide"
          >
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
