import Header from "@/components/Header";
import ProgressIndicator from "@/components/ProgressIndicator";
import StageCard from "@/components/StageCard";
import { nis2Stages } from "@/data/nis2Stages";
import { useProgress } from "@/hooks/useProgress";
import { motion } from "framer-motion";
import { ShieldAlert, GraduationCap, Eye, UserCheck, ListChecks } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const governacao = [
  { icon: ListChecks, text: "Os órgãos de gestão devem aprovar as medidas de gestão de riscos de cibersegurança." },
  { icon: Eye, text: "Devem supervisionar a implementação dessas medidas." },
  { icon: UserCheck, text: "Podem ser responsabilizados pessoalmente pelo incumprimento." },
  { icon: GraduationCap, text: "É obrigatório que os membros da gestão frequentem formação em cibersegurança." },
];

const medidasObrigatorias = [
  "Políticas de análise de risco e segurança de sistemas.",
  "Tratamento de incidentes.",
  "Continuidade de negócio (backups, recuperação de desastres, gestão de crises).",
  "Segurança da cadeia de abastecimento (relações com fornecedores).",
  "Segurança na aquisição e manutenção de redes (incluindo gestão de vulnerabilidades).",
  "Avaliação da eficácia das medidas (auditorias/testes).",
  "Higiene cibernética e formação.",
  "Criptografia e cifragem.",
  "Segurança de RH, controlo de acessos e gestão de ativos.",
  "Autenticação multifator (MFA).",
];

const Obrigacoes = () => {
  const {
    getStageProgress,
    getTotalProgress,
    isProcedureCompleted,
    isDetailCompleted,
    getProcedureNotes,
    toggleProcedure,
    toggleDetail,
    updateNotes,
    resetProgress,
  } = useProgress();

  const totalProgress = getTotalProgress();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-8">
        <motion.div {...fadeIn}>
          <h2 className="text-3xl font-bold text-foreground mb-2">Obrigações das Empresas</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl leading-relaxed">
            As entidades abrangidas devem adotar medidas técnicas e organizativas baseadas numa abordagem multirriscos, cobrindo a segurança física e lógica.
          </p>
        </motion.div>

        {/* Governação */}
        <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bg-card rounded-2xl shadow-card p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10"><ShieldAlert className="w-5 h-5 text-primary" /></div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Governação e Responsabilidade (C-Level)</h3>
              <p className="text-sm text-muted-foreground">O "Board" está agora na linha da frente.</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {governacao.map((g, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-secondary/50">
                <div className="p-1.5 rounded-md bg-primary/10 shrink-0"><g.icon className="w-4 h-4 text-primary" /></div>
                <p className="text-sm text-muted-foreground">{g.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Medidas Obrigatórias - Artigo 21 */}
        <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-card rounded-2xl shadow-card p-6 mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-1">Medidas de Gestão de Risco (Artigo 21.º)</h3>
          <p className="text-sm text-muted-foreground mb-4">Lista de Verificação de Medidas Obrigatórias:</p>
          <ol className="space-y-2">
            {medidasObrigatorias.map((m, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-semibold">{i + 1}</span>
                {m}
              </li>
            ))}
          </ol>
        </motion.div>

        {/* Etapas de Implementação com checklist */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Etapas de Implementação</h2>
          <ProgressIndicator
            totalProgress={totalProgress}
            getStageProgress={getStageProgress}
            onReset={resetProgress}
          />
          <div className="space-y-4">
            {nis2Stages.map((stage, index) => (
              <StageCard
                key={stage.id}
                stage={stage}
                index={index}
                stageProgress={getStageProgress(stage.id)}
                isProcedureCompleted={(procIdx) => isProcedureCompleted(stage.id, procIdx)}
                isDetailCompleted={(procIdx, detailIdx) => isDetailCompleted(stage.id, procIdx, detailIdx)}
                getProcedureNotes={(procIdx) => getProcedureNotes(stage.id, procIdx)}
                onToggleProcedure={(procIdx) => toggleProcedure(stage.id, procIdx)}
                onToggleDetail={(procIdx, detailIdx) => toggleDetail(stage.id, procIdx, detailIdx)}
                onUpdateNotes={(procIdx, notes) => updateNotes(stage.id, procIdx, notes)}
              />
            ))}
          </div>
        </section>

        <footer className="mt-12 py-8 border-t border-border">
          <p className="text-center text-muted-foreground text-sm mb-4">
            Esta estrutura é fornecida como guia de referência. Consulte sempre as autoridades competentes e especialistas jurídicos para garantir total conformidade.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="https://diariodarepublica.pt/dr/detalhe/decreto-lei/125-2025-236981094" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              📜 DL 125/2025 ↗
            </a>
            <a href="https://eur-lex.europa.eu/legal-content/PT/TXT/?uri=CELEX%3A32022L2555" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              🇪🇺 Diretiva NIS2 ↗
            </a>
            <a href="https://www.cncs.gov.pt" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              🛡️ CNCS ↗
            </a>
            <a href="https://www.enisa.europa.eu" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              🔒 ENISA ↗
            </a>
            <a href="https://www.cncs.gov.pt/pt/perguntas-frequentes/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              ❓ FAQ CNCS ↗
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Obrigacoes;
