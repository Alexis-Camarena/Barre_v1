
import Link from "next/link";
import type { StudioClass } from "@/data/classes";

export default function ClassCard({
  studioClass,
}: {
  studioClass: StudioClass;
}) {
  return (
    <article className="border-b border-[var(--border)] pb-7">
      <div className="mb-5 flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[12px] bg-[#c7b7a7]">
        <span className="serif text-3xl italic text-white/75">
          {studioClass.name}
        </span>
      </div>

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
            {studioClass.level} · {studioClass.duration} minutes
          </p>

          <h3 className="serif text-[36px] leading-none tracking-[-0.035em]">
            {studioClass.name}
          </h3>

          <p className="mt-3 max-w-xs text-sm leading-6 text-[var(--muted)]">
            {studioClass.description}
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <span className="text-sm">
          ${studioClass.price} / class
        </span>

        <Link
          href={`/book?class=${studioClass.id}`}
          className="rounded-full bg-[var(--foreground)] px-6 py-3 text-[10px] font-medium uppercase tracking-[0.15em] text-white"
        >
          Book class ↗
        </Link>
      </div>
    </article>
  );
}
