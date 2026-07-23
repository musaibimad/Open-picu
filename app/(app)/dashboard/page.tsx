import { ModuleCard } from "../../../components/ui/module-card";

const modules = [
  {
    title: "Knowledge Hub",
    description: "Evidence-based pediatric critical care topics, disease libraries, and curated educational content.",
    href: "/knowledge",
    icon: "🧠",
    badge: "Phase 2",
  },
  {
    title: "Protocol Center",
    description: "Structured protocol pathways for sepsis, PARDS, ventilation, ECMO, and more.",
    href: "/protocols",
    icon: "🩺",
    badge: "Phase 3",
  },
  {
    title: "Drug Library",
    description: "Monographs, infusions, dilutions, monitoring, and adverse effect references.",
    href: "/drugs",
    icon: "💊",
    badge: "Phase 4",
  },
  {
    title: "Learning Academy",
    description: "Courses, case discussions, journal clubs, and multimedia learning resources.",
    href: "/learning",
    icon: "📚",
    badge: "Phase 5",
  },
  {
    title: "Research Center",
    description: "Landmark trials, guidelines, evidence summaries, and research workflows.",
    href: "/research",
    icon: "🔬",
    badge: "Phase 6",
  },
  {
    title: "AI Workspace",
    description: "Clinical AI support, evidence summarization, and protocol navigation tools.",
    href: "/ai",
    icon: "✨",
    badge: "Phase 7",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[28px] border border-[var(--border)] bg-[var(--background)]/70 p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
          Foundation Release
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-[var(--foreground)] sm:text-4xl">
          A trusted digital operating system for pediatric critical care.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
          OpenPICU is being built as a scalable clinical knowledge platform, beginning with a polished foundation that supports education, protocols, and long-term growth.
        </p>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-[var(--foreground)]">Platform Modules</h2>
          <span className="text-sm text-[var(--muted)]">Phased rollout</span>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {modules.map((module) => (
            <ModuleCard key={module.title} {...module} />
          ))}
        </div>
      </section>
    </div>
  );
}
