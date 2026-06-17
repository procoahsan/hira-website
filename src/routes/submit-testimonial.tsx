import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { useState } from "react";

export const Route = createFileRoute("/submit-testimonial")({
  head: () => ({
    meta: [
      { title: "Submit Testimonial — Hira Saqib" },
      {
        name: "description",
        content: "Share your experience with Hira Saqib's coaching or courses.",
      },
    ],
  }),
  component: SubmitTestimonial,
});

function SubmitTestimonial() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Testimonial"
        title="Share your experience."
        intro="Your words help other women find the courage to begin. Thank you for sharing your journey."
      />

      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="bg-card border border-border rounded-3xl p-8 md:p-10 space-y-5 shadow-soft"
          >
            {sent ? (
              <div className="py-10 text-center">
                <div className="text-4xl mb-3 text-gold">✦</div>
                <h3 className="font-display text-2xl mb-3">Jazakum'Allahu khayran.</h3>
                <p className="text-muted-foreground">
                  Your testimonial has been submitted successfully. It will be reviewed before
                  appearing on the website.
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-display text-2xl mb-2">Submit your testimonial</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Please note that all testimonials are reviewed before they are published on the
                  website. You can choose to remain anonymous or use initials.
                </p>
                <div>
                  <label className="text-sm text-muted-foreground">Your Name (or Initials)</label>
                  <input
                    required
                    name="name"
                    className="mt-1.5 w-full rounded-2xl border border-input bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Program or Service</label>
                  <input
                    required
                    name="service"
                    placeholder="e.g. 1:1 Coaching, The RISE Program, Seerah Course"
                    className="mt-1.5 w-full rounded-2xl border border-input bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Your Testimonial</label>
                  <textarea
                    required
                    name="testimonial"
                    rows={6}
                    className="mt-1.5 w-full rounded-2xl border border-input bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:-translate-y-0.5 transition shadow-elegant mt-2"
                >
                  Submit Testimonial
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
