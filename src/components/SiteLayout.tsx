import { Link, useRouterState } from "@tanstack/react-router";
import { Moon, Sun, Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import darkLogo from "@/assets/dark-logo.png";
import lightLogo from "@/assets/light-logo.png";

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

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/worthwhilelearning/?hl=en",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hira-saqib-acma-92a5a716",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100063738618659",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
  },
];

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  // Track scroll for header shrink
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* ── Header ── */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-2xl bg-background/85 border-b border-border/60 shadow-soft"
            : "backdrop-blur-xl bg-background/60"
        }`}
      >
        <div className={`mx-auto max-w-7xl px-6 flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`}>
          <Link to="/" className="flex items-center gap-0.5 group">
            <img 
              src={theme === "dark" ? darkLogo : lightLogo} 
              alt="Hira Saqib" 
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]" 
            />
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
                  className={`relative px-3 py-2 text-sm transition-all duration-200 rounded-lg ${
                    active ? "text-primary bg-primary/5" : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {n.label}
                  {active && (
                    <span className="absolute left-3 right-3 -bottom-0.5 h-0.5 bg-gold rounded-full" />
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
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition shadow-soft btn-shine relative"
            >
              Book a call <ArrowRight className="w-3.5 h-3.5" />
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

        {/* Mobile menu with slide animation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${
            open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-border/60 bg-background/95 backdrop-blur-2xl">
            <div className="px-6 py-4 flex flex-col gap-1">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={`py-2.5 px-3 text-sm rounded-xl transition-all ${
                    path === n.to
                      ? "text-primary bg-primary/5 font-medium"
                      : "text-foreground/80 hover:text-primary hover:bg-muted/50"
                  }`}
                >
                  {n.label}
                </Link>
              ))}
              <Link
                to="/bookings"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium shadow-soft"
              >
                Book a call <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      {/* ── Footer ── */}
      <footer className="border-t border-border/60 mt-24 relative overflow-hidden">
        {/* Decorative gradient */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[200px]" />

        <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-4 gap-10 relative z-10">
          <div className="md:col-span-2">
            <img 
              src={theme === "dark" ? darkLogo : lightLogo} 
              alt="Hira Saqib" 
              className="h-12 w-auto object-contain mb-4" 
            />
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Helping Muslim women grow — from the inside out. Coaching, Seerah, and structured
              learning available in English and Urdu, worldwide.
            </p>
            {/* Social links */}
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-accent/40 grid place-items-center text-foreground/70 hover:text-primary hover:bg-accent/60 hover:scale-110 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              {nav.slice(1, 5).map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-primary transition-colors">
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
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/newsletter" className="hover:text-primary transition-colors">Newsletter</Link></li>
              <li><Link to="/bookings" className="hover:text-primary transition-colors">Discovery call</Link></li>
              <li>
                <a href="mailto:info@hirasaqib.com" className="hover:text-primary transition-colors">
                  info@hirasaqib.com
                </a>
              </li>
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
