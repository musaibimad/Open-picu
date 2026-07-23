export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-[28px] border border-[var(--border)] bg-[var(--background)]/70 p-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">Settings</p>
        <h1 className="mt-3 text-3xl font-semibold">Personalization and preferences</h1>
        <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--muted)]">
          This area will eventually support profile management, theme preferences, notification controls, and role-based access settings.
        </p>
      </div>
    </div>
  );
}
