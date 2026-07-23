export default function DrugsPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-[28px] border border-[var(--border)] bg-[var(--background)]/70 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Drug Library</p>
        <h1 className="mt-3 text-3xl font-semibold">Monographs, infusions, and safe reference tools</h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--muted)]">
          This module will eventually support dosing references, compatibility data, monitoring guidance, and adverse effect summaries.
        </p>
      </div>
    </div>
  );
}
