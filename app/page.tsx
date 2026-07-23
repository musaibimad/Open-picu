import Link from "next/link";

const pillars = [
  "Evidence-based medicine",
  "Structured education",
  "Clinical protocols",
  "Drug reference tools",
  "Research workflows",
  "AI-powered assistance",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
        <header className="flex items-center justify-between rounded-full border border-[var(--border)] bg-[var(--surface)]/80 px-4 py-3 shadow-[var(--shadow)] backdrop-blur sm:px-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">
              OpenPICU
            </p>
            <h2 className="text-base font-semibold">Evidence. Education. Excellence.</h2>
          </div>
          <Link
            href="/dashboard"
            className="rounded-full border border-[var(--border)] bg-[var(--background)]/80 px-4 py-2 text-sm font-medium transition hover:border-[var(--accent)]/40"
          >
            Enter Platform
          </Link>
        </header>

        <section className="mt-6 flex flex-1 flex-col justify-center rounded-[36px] border border-[var(--border)] bg-[var(--surface)]/70 px-6 py-12 shadow-[var(--shadow)] sm:px-8 lg:px-12 lg:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--accent)]">
              Pediatric Critical Care Platform
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              The trusted operating system for modern PICU practice.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
              OpenPICU brings evidence, education, clinical protocols, drug references, and AI-enabled support into one calm, scalable experience for clinicians, trainees, and care teams.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/dashboard"
                className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Explore the platform
              </Link>
              <Link
                href="/settings"
                className="rounded-full border border-[var(--border)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--accent)]/40"
              >
                View foundation scope
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar}
                className="rounded-2xl border border-[var(--border)] bg-[var(--background)]/70 px-4 py-4 text-sm text-[var(--muted)]"
              >
                {pillar}
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-6 px-2 pb-2 text-sm text-[var(--muted)]">
          © 2026 OpenPICU · Built for trusted pediatric critical care delivery.
        </footer>
      </div>
    </main>
  );
}
