import Header from "@/components/Header";
import QuickLinks from "@/components/QuickLinks";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Building2, AlertTriangle, Scale, ClipboardList, HelpCircle } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const sections = [
  { icon: Building2, title: "Quem é Abrangido?", desc: "Setores e entidades essenciais e importantes", path: "/setores", color: "bg-primary/10 text-primary" },
  { icon: Shield, title: "Obrigações", desc: "Governação, gestão de risco e checklist de implementação", path: "/obrigacoes", color: "bg-accent/10 text-accent" },
  { icon: AlertTriangle, title: "Notificação de Incidentes", desc: "Prazos críticos de 24h, 72h e 1 mês", path: "/incidentes", color: "bg-destructive/10 text-destructive" },
  { icon: Scale, title: "Regime Sancionatório", desc: "Coimas até €10M ou 2% do volume de negócios", path: "/sancoes", color: "bg-primary/10 text-primary" },
  { icon: ClipboardList, title: "Registo de Entidades", desc: "Informações obrigatórias a submeter", path: "/registo", color: "bg-accent/10 text-accent" },
  { icon: HelpCircle, title: "FAQ", desc: "DORA, jurisdição e vulnerabilidades", path: "/faq", color: "bg-primary/10 text-primary" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Resumo Executivo */}
        <motion.div {...fadeIn} className="bg-card rounded-2xl shadow-card p-6 mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-3">Resumo Executivo</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            A Diretiva NIS 2 estabelece um quadro jurídico unificado para garantir um elevado nível comum de cibersegurança na União Europeia. Esta legislação alarga o âmbito de aplicação a novos setores, introduz a responsabilidade direta dos órgãos de gestão e estabelece requisitos rigorosos de gestão de riscos e notificação de incidentes.
          </p>
          <Link
            to="/setores"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-xl font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Verifique se a sua empresa é abrangida
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <QuickLinks />

        {/* Navigation Cards */}
        <h2 className="text-2xl font-bold text-foreground mb-6">Explore a Diretiva</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {sections.map((s, i) => (
            <motion.div
              key={s.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i }}
            >
              <Link
                to={s.path}
                className="block bg-card rounded-2xl shadow-soft p-5 border border-border hover:border-primary/30 hover:shadow-hover transition-all group h-full"
              >
                <div className={`p-2.5 rounded-xl ${s.color} w-fit mb-3`}>
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        <footer className="mt-12 py-8 border-t border-border">
          <p className="text-center text-muted-foreground text-sm">
            Este documento foi elaborado com base nas disposições da Diretiva (UE) 2022/2555. Para a aplicação específica em Portugal, consulte o{" "}
            <a href="https://diariodarepublica.pt/dr/detalhe/decreto-lei/125-2025-962603401" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Decreto-Lei n.º 125/2025
            </a>.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
