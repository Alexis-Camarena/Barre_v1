
import Link from "next/link";
import AcuityBooking from "@/components/acuitybooking";

export default function BookPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <div className="mx-auto w-full max-w-5xl">
        {/* Navigation */}
        <header className="flex items-center justify-between px-5 py-6">
          <Link
            href="/"
            className="text-sm text-[var(--foreground)]"
          >
            ← Back
          </Link>

          <Link
            href="/"
            className="serif text-3xl tracking-tight"
          >
            forme.
          </Link>

          <div className="w-10" />
        </header>

        {/* Booking Heading */}
        <section className="px-5 pb-8 pt-10 text-center">
          <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
            Find your movement
          </p>

          <h1 className="serif text-5xl leading-none md:text-6xl">
            Book a Class
          </h1>

          <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-[var(--muted)]">
            Choose your class, find a time that works for you,
            and reserve your spot.
          </p>
        </section>

        {/* Acuity Booking */}
        <section className="w-full min-w-0 pb-12">
          <AcuityBooking />
        </section>
      </div>
    </main>
  );
}
