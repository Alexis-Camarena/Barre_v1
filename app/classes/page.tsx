import AppHeader from "@/components/AppHeader";
import BottomNav from "@/components/BottomNav";
import ClassCard from "@/components/ClassCard";
import { studioClasses } from "@/data/classes";

export default function ClassesPage() {
  return (
    <main className="min-h-screen pb-28">
      <div className="mx-auto max-w-lg">
        <AppHeader />

        <section className="px-6 pb-10 pt-12">
          <p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-[var(--muted)]">
            Explore your practice
          </p>

          <h1 className="serif text-[64px] leading-[0.9] tracking-[-0.045em]">
            Our
            <br />
            Classes.
          </h1>

          <p className="mt-6 max-w-sm text-sm leading-7 text-[var(--muted)]">
            Whether you're just beginning or ready for a challenge,
            there's a place for you here.
          </p>
        </section>

        <section className="space-y-9 px-6">
          {studioClasses.map((studioClass) => (
            <ClassCard
              key={studioClass.id}
              studioClass={studioClass}
            />
          ))}
        </section>
      </div>

      <BottomNav />
    </main>
  );
}
