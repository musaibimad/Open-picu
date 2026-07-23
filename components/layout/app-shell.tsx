"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "../ui/theme-toggle";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: "▣" },
  { href: "/knowledge", label: "Knowledge", icon: "◌" },
  { href: "/protocols", label: "Protocols", icon: "⟡" },
  { href: "/drugs", label: "Drugs", icon: "✚" },
  { href: "/learning", label: "Learning", icon: "◍" },
  { href: "/research", label: "Research", icon: "⬢" },
  { href: "/ai", label: "AI Workspace", icon: "◎" },
  { href: "/patient", label: "Patient", icon: "◈" },
  { href: "/settings", label: "Settings", icon: "⚙" },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-4 lg:flex-row lg:px-6 lg:py-6">
        <aside className="w-full rounded-[28px] border border-[var(--border)] bg-[var(--surface)]/80 p-4 shadow-[var(--shadow)] backdrop-blur xl:w-72">
          <div className="flex items-center justify-between gap-3 px-2 pb-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
                OpenPICU
              </p>
              <h2 className="mt-1 text-lg font-semibold">Clinical Workspace</h2>
            </div>
            <ThemeToggle />
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-[var(--accent)] text-white"
                      : "text-[var(--muted)] hover:bg-[var(--accent)]/10 hover:text-[var(--foreground)]"
                  }`}
                >
                  <span className="text-base">{item.icon}</span>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-8 rounded-3xl border border-[var(--border)] bg-[var(--background)]/70 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
              Mission
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
              Evidence. Education. Excellence.
            </p>
          </div>
        </aside>

        <main className="flex-1 rounded-[32px] border border-[var(--border)] bg-[var(--surface)]/70 p-4 shadow-[var(--shadow)] backdrop-blur lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
