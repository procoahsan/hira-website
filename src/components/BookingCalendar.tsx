import { useState, useMemo } from "react";
import {
  format,
  addDays,
  startOfDay,
  isSameDay,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  getDay,
  isBefore,
  isAfter,
} from "date-fns";
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Globe,
  Calendar,
  CheckCircle2,
  Loader2,
  User,
  Mail,
  MessageSquare,
} from "lucide-react";

/* ─── Availability Configuration ─────────────────────────────
   Hira's available slots. Each day-of-week (0=Sun … 6=Sat)
   maps to an array of time-slot strings.
   Update this object to change available slots.
   ──────────────────────────────────────────────────────────── */
const AVAILABILITY: Record<number, string[]> = {
  // Sunday — Off
  0: [],
  // Monday
  1: ["10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"],
  // Tuesday
  2: ["10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"],
  // Wednesday
  3: ["10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM"],
  // Thursday
  4: ["10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"],
  // Friday — Off
  5: [],
  // Saturday
  6: ["11:00 AM", "12:00 PM"],
};

/* Blocked specific dates (e.g. holidays). Format: "YYYY-MM-DD" */
const BLOCKED_DATES: string[] = [];

/* How many days ahead can someone book? */
const MAX_ADVANCE_DAYS = 60;

/* ─── Types ────────────────────────────────────────────────── */
type Step = "date" | "time" | "details" | "confirm";

interface BookingData {
  date: Date | null;
  time: string;
  name: string;
  email: string;
  message: string;
  language: "English" | "Urdu";
}

/* ─── Component ────────────────────────────────────────────── */
export function BookingCalendar() {
  const [step, setStep] = useState<Step>("date");
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(new Date()));
  const [booking, setBooking] = useState<BookingData>({
    date: null,
    time: "",
    name: "",
    email: "",
    message: "",
    language: "English",
  });
  const [submitting, setSubmitting] = useState(false);

  const today = startOfDay(new Date());
  const maxDate = addDays(today, MAX_ADVANCE_DAYS);

  /* Calendar grid generation */
  const calendarDays = useMemo(() => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

    // Pad start to align with day-of-week
    const startPad = getDay(monthStart);
    const paddedDays: (Date | null)[] = Array(startPad).fill(null);
    paddedDays.push(...days);

    // Pad end to complete the grid row
    while (paddedDays.length % 7 !== 0) paddedDays.push(null);

    return paddedDays;
  }, [currentMonth]);

  const isDayAvailable = (date: Date): boolean => {
    if (isBefore(date, today)) return false;
    if (isAfter(date, maxDate)) return false;
    if (BLOCKED_DATES.includes(format(date, "yyyy-MM-dd"))) return false;
    const dow = getDay(date);
    return (AVAILABILITY[dow]?.length ?? 0) > 0;
  };

  const availableSlots = useMemo(() => {
    if (!booking.date) return [];
    const dow = getDay(booking.date);
    return AVAILABILITY[dow] ?? [];
  }, [booking.date]);

  const handleSubmit = async () => {
    setSubmitting(true);
    // Simulate API call — replace with real backend endpoint
    await new Promise((r) => setTimeout(r, 1800));
    setSubmitting(false);
    setStep("confirm");
  };

  const reset = () => {
    setStep("date");
    setBooking({ date: null, time: "", name: "", email: "", message: "", language: "English" });
  };

  /* ─── Render ──────────────────────────────────────────────── */
  return (
    <div className="w-full">
      {/* Progress indicator */}
      {step !== "confirm" && (
        <div className="flex items-center justify-center gap-2 mb-8">
          {(["date", "time", "details"] as const).map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full grid place-items-center text-xs font-semibold transition-all duration-300 ${
                  step === s
                    ? "bg-primary text-primary-foreground shadow-soft scale-110"
                    : ["date", "time", "details"].indexOf(step) > i
                      ? "bg-gold text-gold-foreground"
                      : "bg-muted text-muted-foreground"
                }`}
              >
                {i + 1}
              </div>
              {i < 2 && (
                <div
                  className={`w-12 h-0.5 rounded transition-colors duration-500 ${
                    ["date", "time", "details"].indexOf(step) > i ? "bg-gold" : "bg-border"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      )}

      {/* STEP 1: Date selection */}
      {step === "date" && (
        <div className="animate-slide-up">
          <div className="text-center mb-6">
            <h3 className="font-display text-2xl mb-1">Choose a date</h3>
            <p className="text-sm text-muted-foreground">Only dates with available slots are shown</p>
          </div>

          <div className="bg-card border border-border rounded-3xl p-6 shadow-soft">
            {/* Month navigation */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                disabled={isBefore(startOfMonth(subMonths(currentMonth, 1)), startOfMonth(today))}
                className="p-2 rounded-xl hover:bg-muted transition disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <h4 className="font-display text-xl">{format(currentMonth, "MMMM yyyy")}</h4>
              <button
                onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                disabled={isAfter(startOfMonth(addMonths(currentMonth, 1)), maxDate)}
                className="p-2 rounded-xl hover:bg-muted transition disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Weekday headers */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                <div key={d} className="text-center text-xs uppercase tracking-wider text-muted-foreground py-2 font-medium">
                  {d}
                </div>
              ))}
            </div>

            {/* Days grid */}
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((day, idx) => {
                if (!day) return <div key={`pad-${idx}`} />;
                const available = isDayAvailable(day);
                const isSelected = booking.date && isSameDay(day, booking.date);
                const isToday = isSameDay(day, today);

                return (
                  <button
                    key={day.toISOString()}
                    disabled={!available}
                    onClick={() => {
                      setBooking((b) => ({ ...b, date: day, time: "" }));
                      setStep("time");
                    }}
                    className={`
                      relative aspect-square rounded-xl text-sm font-medium transition-all duration-200
                      ${available
                        ? "hover:bg-primary/10 hover:border-primary/30 cursor-pointer hover:scale-105"
                        : "text-muted-foreground/40 cursor-not-allowed"
                      }
                      ${isSelected
                        ? "bg-primary text-primary-foreground shadow-soft scale-105"
                        : available
                          ? "border border-transparent"
                          : ""
                      }
                      ${isToday && !isSelected ? "ring-2 ring-gold/50 ring-offset-1 ring-offset-background" : ""}
                    `}
                  >
                    {format(day, "d")}
                    {available && !isSelected && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-gold" /> Available
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-muted-foreground/30" /> Unavailable
              </span>
            </div>
          </div>
        </div>
      )}

      {/* STEP 2: Time selection */}
      {step === "time" && booking.date && (
        <div className="animate-slide-up">
          <div className="text-center mb-6">
            <h3 className="font-display text-2xl mb-1">Pick a time</h3>
            <p className="text-sm text-muted-foreground">
              {format(booking.date, "EEEE, MMMM d, yyyy")}
              <button
                onClick={() => setStep("date")}
                className="ml-2 text-primary hover:underline"
              >
                Change
              </button>
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {availableSlots.map((slot) => (
              <button
                key={slot}
                onClick={() => {
                  setBooking((b) => ({ ...b, time: slot }));
                  setStep("details");
                }}
                className={`
                  group relative py-4 px-4 rounded-2xl border text-sm font-medium transition-all duration-300
                  ${booking.time === slot
                    ? "bg-primary text-primary-foreground border-primary shadow-soft"
                    : "border-border bg-card hover:border-primary/40 hover:bg-primary/5 hover:shadow-soft hover:-translate-y-1"
                  }
                `}
              >
                <Clock className="w-4 h-4 mx-auto mb-1.5 opacity-60" />
                {slot}
              </button>
            ))}
          </div>

          {availableSlots.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <Calendar className="w-10 h-10 mx-auto mb-3 opacity-40" />
              <p>No slots available on this date.</p>
              <button onClick={() => setStep("date")} className="mt-3 text-primary text-sm hover:underline">
                Choose another date
              </button>
            </div>
          )}
        </div>
      )}

      {/* STEP 3: Contact details */}
      {step === "details" && (
        <div className="animate-slide-up">
          <div className="text-center mb-6">
            <h3 className="font-display text-2xl mb-1">Your details</h3>
            <p className="text-sm text-muted-foreground">
              {booking.date && format(booking.date, "EEEE, MMMM d")} at {booking.time}
              <button
                onClick={() => setStep("time")}
                className="ml-2 text-primary hover:underline"
              >
                Change
              </button>
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="space-y-4"
          >
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                required
                name="name"
                placeholder="Your name"
                value={booking.name}
                onChange={(e) => setBooking((b) => ({ ...b, name: e.target.value }))}
                className="w-full rounded-2xl border border-input bg-background pl-11 pr-4 py-3.5 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                required
                type="email"
                name="email"
                placeholder="Email address"
                value={booking.email}
                onChange={(e) => setBooking((b) => ({ ...b, email: e.target.value }))}
                className="w-full rounded-2xl border border-input bg-background pl-11 pr-4 py-3.5 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
              />
            </div>

            {/* Language preference */}
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                Preferred Language
              </label>
              <div className="grid grid-cols-2 gap-3">
                {(["English", "Urdu"] as const).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    onClick={() => setBooking((b) => ({ ...b, language: lang }))}
                    className={`py-2.5 rounded-xl border text-sm font-medium transition-all ${
                      booking.language === lang
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border hover:border-primary/30"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-muted-foreground" />
              <textarea
                name="message"
                rows={3}
                placeholder="Anything you'd like to share beforehand? (optional)"
                value={booking.message}
                onChange={(e) => setBooking((b) => ({ ...b, message: e.target.value }))}
                className="w-full rounded-2xl border border-input bg-background pl-11 pr-4 py-3.5 text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 rounded-full bg-primary text-primary-foreground font-medium shadow-elegant hover:-translate-y-0.5 transition flex items-center justify-center gap-2 btn-shine relative"
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Confirming…
                </>
              ) : (
                <>Confirm Booking</>
              )}
            </button>
          </form>
        </div>
      )}

      {/* STEP 4: Confirmation */}
      {step === "confirm" && (
        <div className="animate-slide-up text-center py-8">
          <div className="w-20 h-20 mx-auto rounded-full bg-emerald-gradient grid place-items-center mb-6 glow-pulse">
            <CheckCircle2 className="w-9 h-9 text-primary-foreground" />
          </div>
          <h3 className="font-display text-3xl mb-3">Booking Confirmed!</h3>
          <p className="text-muted-foreground leading-relaxed max-w-md mx-auto mb-2">
            Jazakum'Allahu khayran, <span className="font-medium text-foreground">{booking.name}</span>.
          </p>
          <div className="inline-flex flex-col items-center gap-1 bg-card border border-border rounded-2xl px-8 py-5 mt-4 shadow-soft">
            <div className="text-sm text-muted-foreground">Your discovery call</div>
            <div className="font-display text-xl">
              {booking.date && format(booking.date, "EEEE, MMMM d, yyyy")}
            </div>
            <div className="text-primary font-medium">{booking.time}</div>
            <div className="text-xs text-muted-foreground mt-1">Language: {booking.language}</div>
          </div>
          <p className="text-sm text-muted-foreground mt-6 max-w-sm mx-auto">
            A confirmation email with meeting details will be sent to <span className="font-medium">{booking.email}</span>.
          </p>
          <button
            onClick={reset}
            className="mt-8 text-sm text-primary hover:underline"
          >
            Book another call
          </button>
        </div>
      )}
    </div>
  );
}
