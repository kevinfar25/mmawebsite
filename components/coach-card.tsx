import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";

interface CoachCardProps {
  name: string;
  role: string;
  bio: string;
}

export function CoachCard({ name, role, bio }: CoachCardProps) {
  return (
    <Card className="border-border/50 bg-card">
      <div className="flex h-48 items-center justify-center rounded-t-lg bg-secondary">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 text-3xl font-bold text-primary">
          {name.charAt(0)}
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-lg font-extrabold uppercase tracking-wide text-foreground">
          {name}
        </CardTitle>
        <CardDescription className="text-sm font-semibold uppercase tracking-wider text-primary">
          {role}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-muted-foreground">{bio}</p>
      </CardContent>
    </Card>
  );
}
