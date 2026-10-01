"use client";

import { useCallback, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CheckIcon } from "@/components/icons";
import {
  vipCelula,
  vipGrupos,
  vipPorId,
  vipVantagens,
  vipsSkyblock,
  vipTotalComandos,
  type VipCelula,
  type VipId,
  type VipVantagem,
} from "@/data/vips";

interface DicaAberta {
  id: string;
  texto: string;
  left: number;
  top: number;
  largura: number;
}

function Celula({ valor }: { valor: VipCelula }) {
  if (valor === true) {
    return (
      <>
        <CheckIcon className="mx-auto h-4 w-4 text-accent" />
        <span className="sr-only">Possui</span>
      </>
    );
  }
  if (valor === false) {
    return (
      <>
        <span aria-hidden="true" className="text-text-muted">
          —
        </span>
        <span className="sr-only">Não possui</span>
      </>
    );
  }
  if (typeof valor === "number") {
    return (
      <span className="font-mono text-sm font-semibold text-text">{valor}</span>
    );
  }
  return (
    <span className="text-[0.8125rem] font-medium text-text-dim">{valor}</span>
  );
}

function Dica({
  vantagem,
  aberta,
  onAbrir,
  onFechar,
}: {
  vantagem: VipVantagem;
  aberta: boolean;
  onAbrir: (id: string, texto: string, el: HTMLElement) => void;
  onFechar: () => void;
}) {
  const id = `dica-${vantagem.id}`;
  return (
    <button
      type="button"
      aria-describedby={aberta ? id : undefined}
      onMouseEnter={(e) => onAbrir(id, vantagem.dica ?? "", e.currentTarget)}
      onMouseLeave={onFechar}
      onFocus={(e) => onAbrir(id, vantagem.dica ?? "", e.currentTarget)}
      onBlur={onFechar}
      className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-border text-[0.625rem] leading-none text-text-muted transition-colors hover:border-accent hover:text-accent"
    >
      <span aria-hidden="true">i</span>
      <span className="sr-only">Mais informações sobre {vantagem.rotulo}</span>
    </button>
  );
}

function Balão({ dica, onFechar }: { dica: DicaAberta; onFechar: () => void }) {
  return (
    <div
      id={dica.id}
      role="tooltip"
      style={{ left: dica.left, top: dica.top, maxWidth: dica.largura }}
      className="fixed z-50 rounded-xl border border-border bg-bg-card p-3 text-xs leading-relaxed text-text-dim shadow-2xl shadow-black/50"
    >
      {dica.texto}
      <button
        type="button"
        onClick={onFechar}
        className="sr-only focus:not-sr-only focus:absolute focus:right-2 focus:top-2 focus:rounded focus:border focus:border-border focus:px-2 focus:py-1 focus:text-text-muted"
      >
        Fechar
      </button>
    </div>
  );
}

export function VipsComparison() {
  const [selecionado, setSelecionado] = useState<VipId>("supremo");
  const [dica, setDica] = useState<DicaAberta | null>(null);
  const [montado, setMontado] = useState(false);

  useLayoutEffect(() => {
    setMontado(true);
  }, []);

  const abrirDica = useCallback((id: string, texto: string, el: HTMLElement) => {
    const r = el.getBoundingClientRect();
    const largura = Math.min(280, window.innerWidth - 24);
    const alturaEstimada = 96;
    const abaixo = r.bottom + 8;
    const top =
      abaixo + alturaEstimada > window.innerHeight - 12
        ? Math.max(12, r.top - alturaEstimada - 8)
        : abaixo;
    setDica({
      id,
      texto,
      largura,
      left: Math.min(
        Math.max(12, r.left + r.width / 2 - largura / 2),
        window.innerWidth - largura - 12,
      ),
      top,
    });
  }, []);

  const fecharDica = useCallback(() => setDica(null), []);

  useLayoutEffect(() => {
    if (!dica) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDica(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [dica]);

  const vip = vipPorId(selecionado);
  const porId = (id: string) => vipVantagens.find((v) => v.id === id)!;

  const comandos = vipVantagens.filter((v) => v.grupo === "comandos");
  const totalComandos = comandos.filter((v) => vipCelula(v, selecionado) === true).length;

  const resumo: { titulo: string; valor: string; nota?: string }[] = [
    { titulo: "Spawners", valor: String(vip.spawners) },
    { titulo: "Minions", valor: String(vip.minions) },
    {
      titulo: "Comandos",
      valor: totalComandos === vipTotalComandos ? "Todos" : `${totalComandos}/${vipTotalComandos}`,
      nota: totalComandos === vipTotalComandos ? "benefícios" : "comandos",
    },
  ];

  const celulaEc = vipCelula(porId("ec"), selecionado);
  if (celulaEc !== false) {
    resumo.push({
      titulo: "Abas no /ec",
      valor: "Sim",
      nota: celulaEc === "Todas" ? "todas" : "extras",
    });
  }
  if (vipCelula(porId("mcmmo"), selecionado) === true) {
    resumo.push({ titulo: "XP no mcMMO", valor: "Bônus" });
  }
  if (vipCelula(porId("drops"), selecionado) === true) {
    resumo.push({ titulo: "XP e drops", valor: "Bônus extra" });
  }
  if (vipCelula(porId("fila"), selecionado) === true) {
    resumo.push({ titulo: "Fila", valor: "Prioritária" });
  }
  if (vipCelula(porId("antecipado"), selecionado) === true) {
    resumo.push({ titulo: "Novidades", valor: "Acesso antecipado" });
  }

  return (
    <>
      <nav aria-label="Selecionar VIP" className="mt-10">
        <h2 id="selecionar" className="text-lg font-semibold text-text">
          Selecione um VIP
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {vipsSkyblock.map((v) => {
            const ativo = v.id === selecionado;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => setSelecionado(v.id)}
                aria-pressed={ativo}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  ativo
                    ? `border-accent bg-accent-glow ${v.texto}`
                    : "border-border bg-bg-card text-text-muted hover:border-border-bright hover:text-text"
                }`}
              >
                <span aria-hidden="true">{v.icone}</span>
                {v.nome}
              </button>
            );
          })}
        </div>
      </nav>

      <section
        aria-live="polite"
        className="mt-6 rounded-2xl border border-border bg-bg-card p-5 sm:p-6"
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-2xl" aria-hidden="true">
            {vip.icone}
          </span>
          <div className="min-w-0">
            <h3 className="text-lg font-semibold text-text">{vip.nomeCompleto}</h3>
            <p className="text-sm text-text-muted">
              Todos os benefícios do nível {vip.nome}.
            </p>
          </div>
        </div>
        <ul className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {resumo.map((r) => (
            <li
              key={r.titulo}
              className="rounded-xl border border-border bg-bg-raised px-4 py-3"
            >
              <span className="block text-lg font-bold tracking-tight text-text">
                {r.valor}
              </span>
              <span className="mt-0.5 block text-xs text-text-muted">
                {r.nota ? `${r.titulo} · ${r.nota}` : r.titulo}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section id="comparacao" className="mt-10 scroll-mt-24">
        <h2 className="text-lg font-semibold text-text">Comparação completa</h2>
        <p className="mt-1 text-sm text-text-muted">
          Arraste a tabela para o lado em telas pequenas. A primeira coluna e o
          cabeçalho permanecem fixos.
        </p>

        <div className="mt-4 scroll-smooth overflow-x-auto rounded-2xl border border-border lg:max-h-[70vh] lg:overflow-auto">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">
              Comparação das vantagens de cada VIP do SkyBlock
            </caption>
            <thead>
              <tr>
                <th
                  scope="col"
                  className="sticky left-0 top-0 z-20 w-52 min-w-[12rem] border-b border-border bg-bg-raised px-4 py-3 text-xs font-semibold uppercase tracking-widest text-text-muted"
                >
                  Vantagem
                </th>
                {vipsSkyblock.map((v) => (
                  <th
                    key={v.id}
                    scope="col"
                    aria-current={v.id === selecionado ? "true" : undefined}
                    className={`sticky top-0 z-10 min-w-[7.5rem] border-b border-l border-border px-3 py-3 text-center text-sm font-semibold transition-colors ${
                      v.id === selecionado
                        ? `bg-accent-glow ${v.texto}`
                        : "bg-bg-raised text-text-muted"
                    }`}
                  >
                    <span aria-hidden="true">{v.icone}</span> {v.nome}
                  </th>
                ))}
              </tr>
            </thead>
            {vipGrupos.map((grupo) => (
              <tbody key={grupo.id}>
                <tr>
                  <th
                    scope="colgroup"
                    colSpan={vipsSkyblock.length + 1}
                    className="sticky left-0 z-10 border-y border-border bg-bg-raised px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-widest text-text"
                  >
                    {grupo.titulo}
                  </th>
                </tr>
                <tr>
                  <td
                    colSpan={vipsSkyblock.length + 1}
                    className="border-b border-border bg-bg-card px-4 py-2 text-xs text-text-muted"
                  >
                    {grupo.descricao}
                  </td>
                </tr>
                {vipVantagens
                  .filter((v) => v.grupo === grupo.id)
                  .map((vantagem) => (
                    <tr
                      key={vantagem.id}
                      className="border-b border-border/60 last:border-b-0"
                    >
                      <th
                        scope="row"
                        className={`sticky left-0 z-10 border-r border-border px-4 py-3 text-sm font-normal ${
                          vipCelula(vantagem, selecionado) === false
                            ? "bg-bg-card text-text-muted"
                            : "bg-bg-card text-text-dim"
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span className="font-mono text-xs">{vantagem.rotulo}</span>
                          {vantagem.dica && (
                            <Dica
                              vantagem={vantagem}
                              aberta={dica?.id === `dica-${vantagem.id}`}
                              onAbrir={abrirDica}
                              onFechar={fecharDica}
                            />
                          )}
                        </span>
                      </th>
                      {vipsSkyblock.map((v) => {
                        const ativo = v.id === selecionado;
                        return (
                          <td
                            key={v.id}
                            className={`border-l border-border px-3 py-3 text-center transition-colors ${
                              ativo ? "bg-accent-glow" : "bg-bg-card"
                            }`}
                          >
                            <Celula valor={vipCelula(vantagem, v.id)} />
                          </td>
                        );
                      })}
                    </tr>
                  ))}
              </tbody>
            ))}
          </table>
        </div>
      </section>

      {montado && dica && createPortal(<Balão dica={dica} onFechar={fecharDica} />, document.body)}
    </>
  );
}