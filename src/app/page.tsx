import type { Metadata } from "next";
import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/wiki");
}

export const metadata: Metadata = {
  robots: { index: true, follow: true },
};