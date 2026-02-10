import Header from "@/components/Header";
import { motion } from "framer-motion";
import { HelpCircle, Scale, MapPin, Database } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const faqs = [
  {
    icon: Scale,
    titulo: "Relação com o DORA",
    resposta: "As entidades financeiras seguem o Regulamento DORA (UE) 2022/2554, que é lex specialis, sobrepondo-se à NIS 2 nas obrigações de gestão de risco e notificação.",
  },
  {
    icon: MapPin,
    titulo: "Jurisdição",
    resposta: "Regra geral, a jurisdição é o Estado-Membro de estabelecimento. Exceção para fornecedores de comunicações eletrónicas (onde prestam o serviço) e \"Big Tech\" (DNS, Cloud, Data Centers, Redes Sociais), que respondem perante o Estado do estabelecimento principal na UE.",
  },
  {
    icon: Database,
    titulo: "Base de Dados de Vulnerabilidades",
    resposta: "A ENISA manterá uma base de dados europeia de vulnerabilidades para divulgação coordenada.",
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-8">
        <motion.div {...fadeIn}>
          <h2 className="text-3xl font-bold text-foreground mb-2">Notas Especiais (FAQ)</h2>
          <p className="text-muted-foreground mb-8">Questões frequentes sobre a aplicação da Diretiva NIS 2.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="bg-card rounded-2xl shadow-card p-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 shrink-0">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{f.titulo}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.resposta}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <footer className="mt-12 py-8 border-t border-border">
          <p className="text-center text-muted-foreground text-sm mb-4">
            Este documento foi elaborado com base nas disposições da Diretiva (UE) 2022/2555. Para a aplicação específica em Portugal, consulte o{" "}
            <a href="https://diariodarepublica.pt/dr/detalhe/decreto-lei/125-2025-236981094" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Decreto-Lei n.º 125/2025
            </a>.
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

export default FAQ;
