import { ClassCard } from "@/components/class-card";

const classes = [
  {
    title: "Brazilian Jiu-Jitsu",
    description:
      "Master the art of ground fighting and submissions. Our BJJ program covers fundamentals through advanced techniques, with gi and no-gi training available for all levels.",
    icon: "🥋",
  },
  {
    title: "Muay Thai",
    description:
      "Known as the Art of Eight Limbs, our Muay Thai classes develop devastating striking using fists, elbows, knees, and shins. Build power, timing, and fight IQ.",
    icon: "🥊",
  },
  {
    title: "Wrestling",
    description:
      "Develop dominant takedowns, scrambles, and top control. Our wrestling program blends folkstyle and freestyle techniques for effective MMA grappling.",
    icon: "🤼",
  },
  {
    title: "Mixed Martial Arts",
    description:
      "The complete combat system. Our MMA classes integrate striking, grappling, and cage work into a unified approach. Prepare for competition or train for fitness.",
    icon: "⚡",
  },
];

export function ClassesSection() {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            What We Offer
          </p>
          <h2 className="mt-2 text-3xl font-extrabold uppercase tracking-tight text-foreground sm:text-4xl">
            Our Disciplines
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From stand-up striking to ground mastery, our programs cover every
            dimension of martial arts. All classes are taught by experienced
            competitors and coaches.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {classes.map((cls) => (
            <ClassCard key={cls.title} {...cls} />
          ))}
        </div>
      </div>
    </section>
  );
}
