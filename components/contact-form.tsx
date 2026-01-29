"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <Card className="flex items-center justify-center border-border/50 bg-card p-8">
        <CardContent className="text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
            <span className="text-2xl text-primary">&#10003;</span>
          </div>
          <h3 className="text-xl font-bold uppercase tracking-wide text-foreground">
            Message Sent
          </h3>
          <p className="mt-2 text-muted-foreground">
            Thanks for reaching out. We will get back to you shortly.
          </p>
          <Button
            variant="outline"
            className="mt-6 uppercase tracking-wide"
            onClick={() => setSubmitted(false)}
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-border/50 bg-card">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label
              htmlFor="name"
              className="text-xs font-semibold uppercase tracking-wide"
            >
              Name
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Your full name"
              required
              className="bg-secondary/50"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-xs font-semibold uppercase tracking-wide"
            >
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="bg-secondary/50"
            />
          </div>
          <div className="space-y-2">
            <Label
              htmlFor="message"
              className="text-xs font-semibold uppercase tracking-wide"
            >
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us what you are interested in..."
              rows={5}
              required
              className="resize-none bg-secondary/50"
            />
          </div>
          <Button
            type="submit"
            className="w-full font-bold uppercase tracking-wide"
            size="lg"
          >
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
