import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact - Best MMA",
  description:
    "Get in touch with Best MMA. Ask about classes, memberships, or schedule your free trial session.",
};

export default function ContactPage() {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Get In Touch
          </p>
          <h1 className="mt-2 text-4xl font-extrabold uppercase tracking-tight text-foreground sm:text-5xl">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Have a question about our programs? Want to schedule a free trial
            class? Fill out the form below and our team will get back to you
            within 24 hours.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-12 lg:grid-cols-2">
          <ContactForm />

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wide text-foreground">
                Location
              </h3>
              <p className="mt-2 text-muted-foreground">
                123 Fighter Lane
                <br />
                Downtown District
                <br />
                New York, NY 10001
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wide text-foreground">
                Hours
              </h3>
              <div className="mt-2 space-y-1 text-muted-foreground">
                <p>Monday - Friday: 6:00 AM - 9:00 PM</p>
                <p>Saturday: 8:00 AM - 5:00 PM</p>
                <p>Sunday: 9:00 AM - 2:00 PM</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold uppercase tracking-wide text-foreground">
                Follow Us
              </h3>
              <div className="mt-2 flex gap-4">
                <a
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  YouTube
                </a>
                <a
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  Facebook
                </a>
                <a
                  href="#"
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  X / Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
