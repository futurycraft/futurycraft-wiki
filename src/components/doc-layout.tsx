import { SidebarNav } from "./sidebar";

export function DocLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex gap-10">
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-20 h-[calc(100vh-6rem)] overflow-y-auto pr-2">
            <SidebarNav />
          </div>
        </aside>
        <div className="min-w-0 flex-1 py-8">{children}</div>
      </div>
    </div>
  );
}