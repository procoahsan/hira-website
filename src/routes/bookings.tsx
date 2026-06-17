import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Calendar, Clock, Globe, MessageCircle, ShieldCheck, Video } from "lucide-react";
import { BookingCalendar } from "@/components/BookingCalendar";

export const Route = createFileRoute("/bookings")({
  head: () => ({
    meta: [
      { title: "Book a Discovery Call — Hira Saqib" },
      {
        name: "description",
        content:
          "Book a free 30-minute discovery call with Hira Saqib. Available in English and Urdu, online worldwide.",
      },
    ],
  }),
  component: Bookings,
});

function Bookings() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Bookings"
        title="Let's begin with a conversation."
        intro="Book a free 30-minute discovery call. We'll talk about where you are, where you want to be, and whether we're a fit."
      />

      <section className="py-20 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-primary/15 rounded-full blur-[120px] animate-pulse" />
        <div
          className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-gold/15 rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px]" />

        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-10 lg:gap-16 relative z-10">
          {/* Left sidebar — What to expect */}
          <div className="lg:col-span-4 space-y-8 animate-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="glass-card rounded-3xl p-8 shadow-elegant border border-border/50 bg-card/60 backdrop-blur-2xl shimmer-border">
              <h3 className="font-display text-2xl mb-6 text-gradient font-semibold">
                What to expect
              </h3>

              <div className="space-y-6">
                {[
                  {
                    icon: Clock,
                    t: "30 minutes",
                    b: "Long enough to listen, short enough to honour your day.",
                  },
                  {
                    icon: Video,
                    t: "Google Meet / Zoom",
                    b: "Your call link will be sent after booking.",
                  },
                  { icon: Globe, t: "Online, worldwide", b: "Wherever you are in the world." },
                  {
                    icon: MessageCircle,
                    t: "English or Urdu",
                    b: "Choose the language closest to your heart.",
                  },
                  {
                    icon: Calendar,
                    t: "No pressure",
                    b: "If we're not the right fit, I'll happily point you onward.",
                  },
                  {
                    icon: ShieldCheck,
                    t: "Confidential",
                    b: "Everything shared stays between us.",
                  },
                ].map(({ icon: Icon, t, b }) => (
                  <div key={t} className="flex gap-4 group">
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-emerald-gradient grid place-items-center text-primary-foreground shadow-soft transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-elegant">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display text-lg font-medium">{t}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed mt-1">{b}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability note */}
            <div className="bg-card/50 border border-border/40 rounded-2xl p-5 backdrop-blur-lg">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">Availability:</span> I am available
                Monday–Thursday and Saturday mornings. Select a date to see open slots.
              </p>
            </div>
          </div>

          {/* Right — Booking calendar */}
          <div className="lg:col-span-8 animate-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="glass-card bg-card/80 rounded-[2.5rem] p-6 md:p-10 overflow-hidden border border-border/50 shadow-elegant relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none rounded-[2.5rem]" />
              <div className="relative z-10">
                <BookingCalendar />
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
