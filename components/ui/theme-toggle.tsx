"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    const preferred =
      stored === "dark" || stored === "light"
        ? stored
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

    setTheme(preferred);
    applyTheme(preferred);
  }, []);

  const applyTheme = (value: "light" | "dark") => {
    const root = document.documentElement;
    root.classList.toggle("dark", value === "dark");
    root.style.colorScheme = value;
  };

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem("theme", nextTheme);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-full border border-[var(--border)] bg-[var(--surface)]/80 px-3.5 py-2 text-sm font-medium text-[var(--foreground)] shadow-sm transition hover:border-[var(--accent)]/40"
    >
      {theme === "dark" ? "☀︎ Light" : "☾ Dark"}
    </button>
  );
}
