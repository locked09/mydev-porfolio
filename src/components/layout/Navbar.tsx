"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, profile } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import { easeOutQuart } from "@/lib/animations";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(navItems.map((item) => item.id));

  // Close the mobile menu with Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-paper/85 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#top"
          className="group flex items-center gap-3 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          {/* Seal */}
          <span
            aria-hidden
            className="flex size-10 shrink-0 rounded-md bg-[#15233F] p-[3px] transition-transform group-hover:-rotate-3"
          >
            <span className="flex flex-1 items-center justify-center rounded-[4px] border-[1.5px] border-[#FBF7F0]">
              <span className="flex items-baseline font-mono text-[13px] leading-none font-extrabold tracking-tight text-[#FBF7F0]">
                DSB
                <span className="ml-px inline-block h-[2px] w-[7px] bg-[#FBF7F0] group-hover:animate-pulse" />
              </span>
            </span>
          </span>

          {/* Divider */}
          <span aria-hidden className="h-8 w-px bg-line" />

          {/* Name + role */}
          <span className="flex flex-col gap-0.5">
            <span className="font-display text-base leading-tight font-semibold tracking-tight text-ink">
              {profile.name}
            </span>
            <span className="font-mono text-[11px] tracking-wider text-muted">
              Fullstack Developer
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "relative block px-3 py-2 text-sm transition-colors",
                    isActive ? "text-ink" : "text-muted hover:text-ink",
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      aria-hidden
                      className="absolute inset-x-3 bottom-0.5 h-0.5 rounded-full bg-kihada"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="-mr-2 grid size-10 place-items-center rounded-md md:hidden"
        >
          {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: easeOutQuart }}
            className="overflow-hidden border-t border-line md:hidden"
          >
            <ul className="px-5 py-4">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.25 }}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 font-display text-2xl font-semibold tracking-tight"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
