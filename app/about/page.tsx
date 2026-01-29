import type { Metadata } from "next";
import { CoachCard } from "@/components/coach-card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "About - Best MMA",
  description:
    "Learn about Best MMA's story, mission, and meet our world-class coaching team.",
};

const coaches = [
  {
    name: "Marcus Rivera",
    role: "Head MMA Coach",
    bio: "Former professional MMA fighter with a 14-3 record. Marcus brings over 15 years of competitive experience and a passion for developing well-rounded martial artists. He holds a black belt in Brazilian Jiu-Jitsu and has trained at camps across Thailand and Brazil.",
  },
  {
    name: "Sofia Chen",
    role: "Muay Thai & Striking Coach",
    bio: "Two-time national Muay Thai champion with over a decade of teaching experience. Sofia specializes in building technical precision and fight IQ. Her classes are known for their intensity and attention to detail.",
  },
  {
    name: "Dmitri Volkov",
    role: "Wrestling & Grappling Coach",
    bio: "NCAA Division I wrestler and ADCC competitor. Dmitri's grappling program blends folkstyle wrestling with modern submission grappling to create fighters who dominate on the mat and in the cage.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Our Story
            </p>
            <h1 className="mt-2 text-4xl font-extrabold uppercase tracking-tight text-foreground sm:text-5xl">
              Built by Fighters,
              <br />
              <span className="text-primary">For Fighters</span>
            </h1>
          </div>
          <div className="mx-auto mt-10 max-w-2xl space-y-6 leading-relaxed text-muted-foreground">
            <p>
              Best MMA was founded in 2018 by a group of competitive fighters
              who believed that world-class martial arts training should be
              accessible to everyone, not just professional athletes. What
              started as a small garage gym with a handful of mats has grown into
              a full-service training facility with over 500 active members.
            </p>
            <p>
              Our mission is simple: to create a training environment where
              discipline, respect, and relentless improvement are the standard.
              We do not cut corners, we do not take shortcuts, and we hold every
              member to the same high standard, whether you are training for your
              first class or your next title fight.
            </p>
            <p>
              At Best MMA, you will find a community that pushes you beyond what
              you thought possible. Our coaches have competed at the highest
              levels of their respective disciplines, and they bring that
              experience to every session. We train smart, we train hard, and we
              look out for one another.
            </p>
          </div>
        </div>
      </section>

      <Separator className="mx-auto max-w-xs" />

      <section className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Meet The Team
            </p>
            <h2 className="mt-2 text-3xl font-extrabold uppercase tracking-tight text-foreground sm:text-4xl">
              Our Coaches
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Every coach at Best MMA is a proven competitor with years of
              teaching experience. They are dedicated to helping you reach your
              goals.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {coaches.map((coach) => (
              <CoachCard key={coach.name} {...coach} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
