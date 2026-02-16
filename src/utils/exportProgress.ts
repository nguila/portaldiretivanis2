import { nis2Stages } from "@/data/nis2Stages";

interface ProcedureProgress {
  completed: boolean;
  details: { [detailIndex: number]: boolean };
  notes: string;
}

interface ProgressState {
  [stageId: number]: {
    [procedureIndex: number]: ProcedureProgress;
  };
}

const getProgressData = (): ProgressState | null => {
  try {
    const saved = localStorage.getItem("nis2-progress");
    return saved ? JSON.parse(saved) : null;
  } catch {
    return null;
  }
};

export const exportToCSV = () => {
  const progress = getProgressData();
  if (!progress) return;

  const rows: string[][] = [
    ["Etapa", "Procedimento", "Detalhe", "Concluído", "Notas"],
  ];

  nis2Stages.forEach((stage) => {
    stage.procedures.forEach((proc, procIdx) => {
      const procProgress = progress[stage.id]?.[procIdx];
      const notes = procProgress?.notes || "";

      proc.details.forEach((detail, detailIdx) => {
        const completed = procProgress?.details[detailIdx] ? "Sim" : "Não";
        rows.push([
          `${stage.id}. ${stage.title}`,
          proc.title,
          detail,
          completed,
          detailIdx === 0 ? notes.replace(/\n/g, " ") : "",
        ]);
      });
    });
  });

  const csvContent = rows
    .map((row) => row.map((cell) => `"${cell.replace(/"/g, '""')}"`).join(";"))
    .join("\n");

  const BOM = "\uFEFF";
  const blob = new Blob([BOM + csvContent], { type: "text/csv;charset=utf-8;" });
  downloadBlob(blob, "nis2-progresso.csv");
};

export const exportToPDF = () => {
  const progress = getProgressData();
  if (!progress) return;

  const lines: string[] = [];
  lines.push("RELATÓRIO DE PROGRESSO — DIRETIVA NIS2 / DL 125/2025");
  lines.push(`Data: ${new Date().toLocaleDateString("pt-PT")}`);
  lines.push("");

  nis2Stages.forEach((stage) => {
    lines.push("═".repeat(60));
    lines.push(`ETAPA ${stage.id}: ${stage.title.toUpperCase()}`);
    lines.push(`  ${stage.subtitle}`);
    lines.push("");

    stage.procedures.forEach((proc, procIdx) => {
      const procProgress = progress[stage.id]?.[procIdx];
      const allDone = procProgress?.completed ? "✓" : "○";

      lines.push(`  ${allDone} ${proc.title}`);
      lines.push(`    ${proc.description}`);

      proc.details.forEach((detail, detailIdx) => {
        const done = procProgress?.details[detailIdx] ? "☑" : "☐";
        lines.push(`      ${done} ${detail}`);
      });

      const notes = procProgress?.notes?.trim();
      if (notes) {
        lines.push("");
        lines.push(`    📝 Notas:`);
        notes.split("\n").forEach((n) => lines.push(`       ${n}`));
      }
      lines.push("");
    });
  });

  // Calculate totals
  let completed = 0, total = 0;
  Object.values(progress).forEach((stage) => {
    Object.values(stage).forEach((proc: any) => {
      Object.values(proc.details).forEach((v: any) => { total++; if (v) completed++; });
    });
  });
  lines.push("═".repeat(60));
  lines.push(`PROGRESSO TOTAL: ${completed}/${total} (${total > 0 ? Math.round((completed / total) * 100) : 0}%)`);

  // Use printable HTML for better PDF output
  const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>NIS2 Progresso</title>
<style>
  body { font-family: 'Courier New', monospace; font-size: 11px; white-space: pre-wrap; padding: 40px; line-height: 1.6; }
  @media print { body { padding: 20px; } }
</style></head>
<body>${lines.join("\n")}</body></html>`;

  const printWindow = window.open("", "_blank");
  if (printWindow) {
    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => printWindow.print(), 300);
  }
};

const downloadBlob = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
};
