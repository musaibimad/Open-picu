export default function PatientPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-[28px] border border-[var(--border)] bg-[var(--background)]/70 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Patient Workspace</p>
        <h1 className="mt-3 text-3xl font-semibold">Bedside workflow tools for round-based care</h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--muted)]">
          This workspace will support daily rounds, handover, checklists, notes, and problem lists in a collaborative structure.
        </p>
      </div>
    </div>
  );
}
