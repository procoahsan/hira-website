import { Link, useRouterState } from "@tanstack/react-router";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/courses", label: "Courses" },
  { to: "/book-clubs", label: "Book Clubs" },
  { to: "/services", label: "Services" },
  { to: "/bookings", label: "Bookings" },
  { to: "/contact", label: "Contact" },
  { to: "/newsletter", label: "Newsletter" },
];

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/75 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="grid place-items-center w-11 h-11 rounded-full bg-emerald-gradient text-primary-foreground font-display text-xl shadow-soft">
              ﷽
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-xl tracking-tight">Hira Saqib</span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Substance · Faith · Growth
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((n) => {
              const active = path === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={`relative px-3 py-2 text-sm transition-colors ${
                    active ? "text-primary" : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {n.label}
                  {active && (
                    <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-gold" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="p-2 rounded-full hover:bg-muted transition-colors"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link
              to="/bookings"
              className="hidden md:inline-flex items-center px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition shadow-soft"
            >
              Book a call
            </Link>
            <button
              className="lg:hidden p-2 rounded-full hover:bg-muted"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden border-t border-border/60 bg-background">
            <div className="px-6 py-4 flex flex-col gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm text-foreground/80 hover:text-primary"
                >
                  {n.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border/60 mt-24">
        <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="font-display text-3xl">Hira Saqib</div>
            <p className="mt-3 text-muted-foreground max-w-md">
              Helping Muslim women grow — from the inside out. Coaching, Seerah, and structured
              learning available in English and Urdu, worldwide.
            </p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              {nav.slice(1, 5).map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-primary">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Connect
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
              <li><Link to="/newsletter" className="hover:text-primary">Newsletter</Link></li>
              <li><Link to="/bookings" className="hover:text-primary">Discovery call</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/60">
          <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-muted-foreground flex flex-col md:flex-row gap-2 justify-between">
            <span>© {new Date().getFullYear()} Hira Saqib. All rights reserved.</span>
            <span className="italic">"Indeed, with hardship comes ease." — Qur'an 94:6</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
