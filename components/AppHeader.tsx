
import Link from "next/link";

export default function AppHeader() {
  return (
    <header className="relative z-20 flex h-[76px] items-center justify-between px-6">
      <Link
        href="/classes"
        className="flex h-10 w-10 items-center justify-center"
        aria-label="Browse classes"
      >
        <span className="text-xl">☰</span>
      </Link>

      <Link
        href="/"
        className="serif text-[34px] font-medium tracking-[-0.055em]"
      >
        forme.
      </Link>

      <Link
        href="/book"
        className="text-[10px] font-medium uppercase tracking-[0.15em]"
      >
        Book
      </Link>
    </header>
  );
}
