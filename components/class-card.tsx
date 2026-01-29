import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

interface ClassCardProps {
  title: string;
  description: string;
  icon: string;
}

export function ClassCard({ title, description, icon }: ClassCardProps) {
  return (
    <Card className="group border-border/50 bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
      <CardHeader>
        <div className="mb-2 text-4xl">{icon}</div>
        <CardTitle className="text-lg font-extrabold uppercase tracking-wide text-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
