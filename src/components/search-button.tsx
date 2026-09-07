"use client";

import { useState } from "react";
import { SearchModal } from "./search-modal";

export function SearchButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>
      <SearchModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}