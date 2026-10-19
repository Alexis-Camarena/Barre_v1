
import Link from "next/link";
import AppHeader from "@/components/AppHeader";
import BottomNav from "@/components/BottomNav";
import ClassCard from "@/components/ClassCard";
import { studioClasses } from "@/data/classes";

export default function Home() {
  return (
    <main className="min-h-screen pb-28">
      <div className="mx-auto max-w-lg">
        <AppHeader />

        {/* HERO */}
        <section className="px-4">
          <div className="relative flex min-h-[490px] flex-col justify-end overflow-hidden rounded-[12px] bg-[#a99b8d] p-7 text-white">
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

            <div className="relative z-10">
              <p className="mb-4 text-[10px] uppercase tracking-[0.23em]">
                The art of movement
              </p>

              <h1 className="serif text-[clamp(3.3rem,13vw,4.5rem)] leading-[0.88] tracking-[-0.045em]">
                Strength in
                <br />
                every movement.
              </h1>

              <p className="mt-5 max-w-[270px] text-sm leading-6 text-white/90">
                A space to move with intention, build strength, and find balance.
              </p>

              <Link
                href="/classes"
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--foreground)]"
              >
                Explore classes <span>↗</span>
              </Link>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="px-6 pb-16 pt-20">
          <p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
            Welcome to Forme
          </p>

          <h2 className="serif max-w-sm text-[46px] leading-[0.98] tracking-[-0.035em]">
            Find strength.
            <br />
            Feel balanced.
            <br />
            Move freely.
          </h2>

          <p className="mt-6 max-w-sm text-sm leading-7 text-[var(--muted)]">
            Thoughtful barre classes designed to help you reconnect
            with your body, one movement at a time.
          </p>
        </section>

        {/* FEATURED CLASSES */}
        <section className="px-6">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                Discover your practice
              </p>

              <h2 className="serif text-[48px] leading-none tracking-tight">
                Our Classes
              </h2>
            </div>

            <Link
              href="/classes"
              className="pb-1 text-xs underline underline-offset-4"
            >
              View all
            </Link>
          </div>

          <div className="space-y-8">
            {studioClasses.map((studioClass) => (
              <ClassCard
                key={studioClass.id}
                studioClass={studioClass}
              />
            ))}
          </div>
        </section>

        {/* BOOKING CTA */}
        <section className="px-6 pb-12 pt-20">
          <div className="bg-[var(--surface)] px-7 py-12 text-center">
            <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
              Your next class awaits
            </p>

            <h2 className="serif text-[45px] leading-none">
              Make time
              <br />
              for yourself.
            </h2>

            <Link
              href="/book"
              className="mt-8 inline-flex rounded-full bg-[var(--foreground)] px-7 py-4 text-[10px] font-medium uppercase tracking-[0.15em] text-white"
            >
              Book a class ↗
            </Link>
          </div>
        </section>
      </div>

      <BottomNav />
    </main>
  );
}
