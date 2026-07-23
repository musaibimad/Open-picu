import Link from "next/link";

type ModuleCardProps = {
  title: string;
  description: string;
  href: string;
  icon: string;
  badge?: string;
};

export function ModuleCard({
  title,
  description,
  href,
  icon,
  badge,
}: ModuleCardProps) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-[var(--border)] bg-[var(--surface)]/90 p-6 shadow-[var(--shadow)] transition hover:-translate-y-1 hover:border-[var(--accent)]/40"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent)]/10 text-xl text-[var(--accent)]">
          {icon}
        </div>
        {badge ? (
          <span className="rounded-full border border-[var(--border)] px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--muted)]">
            {badge}
          </span>
        ) : null}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-[var(--foreground)]">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{description}</p>
      <div className="mt-5 text-sm font-medium text-[var(--accent)] transition group-hover:translate-x-1">
        Explore →
      </div>
    </Link>
  );
}
