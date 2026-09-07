"use client";

import { useEffect } from "react";

export function CodeCopy() {
  useEffect(() => {
    function wire() {
      const buttons = document.querySelectorAll<HTMLButtonElement>(".code-copy");
      buttons.forEach((btn) => {
        if (btn.dataset.wired) return;
        btn.dataset.wired = "1";
        const code = btn.dataset.copy ?? "";
        btn.addEventListener("click", async () => {
          try {
            await navigator.clipboard.writeText(code);
            const original = btn.innerHTML;
            btn.innerHTML = "copiado";
            setTimeout(() => {
              btn.innerHTML = original;
            }, 1500);
          } catch {
            /* clipboard unavailable */
          }
        });
      });
    }
    wire();
    // re-scan on navigation (Next.js keeps the layout mounted)
    document.addEventListener("nextjs:routeChangeComplete", wire);
    return () =>
      document.removeEventListener("nextjs:routeChangeComplete", wire);
  }, []);

  return null;
}