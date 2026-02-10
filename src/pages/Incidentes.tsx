import Header from "@/components/Header";
import { motion } from "framer-motion";
import { AlertTriangle, Clock, FileText, Bell } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const timeline = [
  {
    icon: AlertTriangle,
    prazo: "24 Horas",
    titulo: "Alerta Precoce",
    descricao: "Indicar se há suspeita de ato malicioso ou impacto transfronteiriço.",
    color: "text-destructive",
    bg: "bg-destructive/10",
  },
  {
    icon: Clock,
    prazo: "72 Horas",
    titulo: "Notificação de Incidente",
    descricao: "Atualização com avaliação inicial de gravidade, impacto e indicadores de compromisso (IoC).",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: FileText,
    prazo: "1 Mês",
    titulo: "Relatório Final",
    descricao: "Descrição detalhada, causas, medidas aplicadas e impacto final.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
];

const Incidentes = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-8">
        <motion.div {...fadeIn}>
          <h2 className="text-3xl font-bold text-foreground mb-2">Notificação de Incidentes</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl leading-relaxed">
            As empresas devem notificar a CSIRT nacional ou autoridade competente sobre qualquer incidente significativo (que cause perturbação grave ou perdas financeiras).
          </p>
        </motion.div>

        {/* Cronograma */}
        <h3 className="text-xl font-semibold text-foreground mb-6">Cronograma de Notificação</h3>
        <div className="space-y-4 mb-8">
          {timeline.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="bg-card rounded-2xl shadow-card p-6 flex items-start gap-4 border-l-4"
              style={{ borderLeftColor: `hsl(var(--${i === 0 ? "destructive" : i === 1 ? "primary" : "accent"}))` }}
            >
              <div className={`p-3 rounded-xl ${t.bg} shrink-0`}>
                <t.icon className={`w-6 h-6 ${t.color}`} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className={`text-xs font-bold uppercase tracking-wider ${t.color}`}>{t.prazo}</span>
                  <h4 className="font-semibold text-foreground">{t.titulo}</h4>
                </div>
                <p className="text-sm text-muted-foreground">{t.descricao}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Nota */}
        <motion.div {...fadeIn} transition={{ delay: 0.4 }} className="bg-secondary/50 rounded-2xl p-6 mb-8">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Nota:</strong> Prestadores de serviços de confiança têm prazos diferentes (24h).
          </p>
        </motion.div>

        {/* Comunicação */}
        <motion.div {...fadeIn} transition={{ delay: 0.5 }} className="bg-card rounded-2xl shadow-card p-6 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-primary/10"><Bell className="w-5 h-5 text-primary" /></div>
            <h3 className="text-lg font-semibold text-foreground">Comunicação aos Clientes</h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Deve notificar os destinatários dos serviços se o incidente os puder afetar adversamente e informar sobre medidas de proteção que estes possam tomar.
          </p>
        </motion.div>

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

export default Incidentes;
