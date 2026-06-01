import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Mail, Instagram, Linkedin, Facebook } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Hira Saqib" },
      { name: "description", content: "Get in touch with Hira Saqib for coaching, speaking, or collaboration." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title="Say salaam."
        intro="For coaching enquiries, speaking, or simply to say hello — this inbox and these socials are read by me."
      />

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            {[
              {
                icon: Mail,
                t: "Email",
                v: "info@hirasaqib.com",
                href: "mailto:info@hirasaqib.com",
              },
              {
                icon: Instagram,
                t: "Instagram",
                v: "@worthwhilelearning",
                href: "https://www.instagram.com/worthwhilelearning/?hl=en",
              },
              {
                icon: Linkedin,
                t: "LinkedIn",
                v: "Hira Saqib",
                href: "https://www.linkedin.com/in/hira-saqib-acma-92a5a716",
              },
              {
                icon: Facebook,
                t: "Facebook",
                v: "Hira Saqib",
                href: "https://www.facebook.com/profile.php?id=100063738618659",
              },
            ].map(({ icon: Icon, t, v, href }) => (
              <a
                key={t}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="flex gap-4 items-start group"
              >
                <div className="w-11 h-11 rounded-2xl bg-accent/40 grid place-items-center text-primary">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{t}</div>
                  <div className="font-display text-xl group-hover:text-primary transition-colors">{v}</div>
                </div>
              </a>
            ))}

            <blockquote className="mt-10 pl-6 border-l-2 border-gold italic text-lg text-muted-foreground">
              "And whoever puts their trust in Allah — He will be enough for them." — Qur'an 65:3
            </blockquote>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="bg-card border border-border rounded-3xl p-8 space-y-4 shadow-soft"
          >
            {sent ? (
              <div className="py-10 text-center">
                <div className="text-4xl mb-3">✦</div>
                <h3 className="font-display text-2xl">Message received. Jazakum'Allahu khayran.</h3>
              </div>
            ) : (
              <>
                <h3 className="font-display text-2xl mb-2">Send a message</h3>
                <input required name="name" placeholder="Your name" className="w-full rounded-2xl border border-input bg-background px-4 py-3" />
                <input required type="email" name="email" placeholder="Email" className="w-full rounded-2xl border border-input bg-background px-4 py-3" />
                <input name="subject" placeholder="Subject" className="w-full rounded-2xl border border-input bg-background px-4 py-3" />
                <textarea required name="msg" rows={6} placeholder="Your message" className="w-full rounded-2xl border border-input bg-background px-4 py-3" />
                <button className="w-full px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:-translate-y-0.5 transition shadow-elegant">
                  Send
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
