import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Mail } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/newsletter")({
  head: () => ({
    meta: [
      { title: "Newsletter — Hira Saqib" },
      {
        name: "description",
        content:
          "A monthly letter from Hira Saqib — reflections, Seerah notes, and quiet practice for the soul.",
      },
    ],
  }),
  component: Newsletter,
});

function Newsletter() {
  const [sub, setSub] = useState(false);
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Newsletter"
        title="A monthly letter — soft, slow, substantive."
        intro="One thoughtful note per month. Reflections, Seerah, reading lists, and the occasional invitation."
      />

      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6">
          <div className="bg-card border border-border rounded-3xl p-10 shadow-soft text-center">
            {sub ? (
              <>
                <div className="text-5xl mb-4">✦</div>
                <h3 className="font-display text-3xl">Welcome to the letter.</h3>
                <p className="mt-3 text-muted-foreground">
                  Check your inbox to confirm your subscription, insha'Allah.
                </p>
              </>
            ) : (
              <>
                <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-gradient text-primary-foreground grid place-items-center mb-6">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-display text-3xl mb-3">Subscribe</h3>
                <p className="text-muted-foreground mb-7">
                  No noise. No selling. Just a quiet monthly note.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSub(true);
                  }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="flex-1 rounded-full border border-input bg-background px-5 py-3"
                  />
                  <button className="rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium shadow-elegant hover:-translate-y-0.5 transition">
                    Subscribe
                  </button>
                </form>
                <p className="mt-5 text-xs text-muted-foreground">
                  Unsubscribe anytime. We never share your address.
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
