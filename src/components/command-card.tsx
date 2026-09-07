import type { Comando } from "@/data/comandos";
import { CommandBlock } from "./command-block";

export function CommandCard({ comando, id }: { comando: Comando; id?: string }) {
  return (
    <div id={id} className="flex flex-col gap-2 rounded-xl border border-border bg-bg-card p-4 transition-colors hover:border-accent/40">
      <p className="text-sm leading-relaxed text-text-dim">{comando.descricao}</p>
      <CommandBlock command={comando.exemplo ?? comando.comando} />
    </div>
  );
}