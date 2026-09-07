"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export function CommandScroller() {
  const sp = useSearchParams();
  useEffect(() => {
    const c = sp.get("comando");
    if (!c) return;
    const el = document.getElementById(`cmd-${c}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.add("ring-2", "ring-accent");
    }
  }, [sp]);
  return null;
}