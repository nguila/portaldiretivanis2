import Header from "@/components/Header";
import { motion } from "framer-motion";
import { Scale, ShieldBan, Ban, Eye, AlertTriangle } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const Sancoes = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-8">
        <motion.div {...fadeIn}>
          <h2 className="text-3xl font-bold text-foreground mb-2">Regime Sancionatório e Supervisão</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl leading-relaxed">
            As autoridades têm poderes reforçados para fiscalizar e punir o incumprimento.
          </p>
        </motion.div>

        {/* Tipos de Supervisão */}
        <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-card rounded-2xl shadow-card p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-primary/10"><Eye className="w-5 h-5 text-primary" /></div>
              <h3 className="font-semibold text-foreground">Entidades Essenciais</h3>
            </div>
            <p className="text-sm text-muted-foreground">Supervisão contínua (ex ante e ex post), inspeções in loco, auditorias regulares.</p>
          </div>
          <div className="bg-card rounded-2xl shadow-card p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-accent/10"><AlertTriangle className="w-5 h-5 text-accent" /></div>
              <h3 className="font-semibold text-foreground">Entidades Importantes</h3>
            </div>
            <p className="text-sm text-muted-foreground">Supervisão reativa (ex post), agindo perante indícios de incumprimento.</p>
          </div>
        </motion.div>

        {/* Coimas */}
        <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
          <h3 className="text-xl font-semibold text-foreground mb-4">Coimas Administrativas</h3>
          <p className="text-sm text-muted-foreground mb-4">Mínimos definidos pela UE:</p>
        </motion.div>

        <motion.div {...fadeIn} transition={{ delay: 0.25 }} className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-card rounded-2xl shadow-card p-6 border-l-4 border-primary">
            <div className="flex items-center gap-2 mb-2">
              <Scale className="w-5 h-5 text-primary" />
              <h4 className="font-semibold text-foreground">Entidades Essenciais</h4>
            </div>
            <p className="text-2xl font-bold text-primary mb-1">€10.000.000</p>
            <p className="text-sm text-muted-foreground">ou 2% do volume de negócios anual mundial (o que for mais elevado).</p>
          </div>
          <div className="bg-card rounded-2xl shadow-card p-6 border-l-4 border-accent">
            <div className="flex items-center gap-2 mb-2">
              <Scale className="w-5 h-5 text-accent" />
              <h4 className="font-semibold text-foreground">Entidades Importantes</h4>
            </div>
            <p className="text-2xl font-bold text-accent mb-1">€7.000.000</p>
            <p className="text-sm text-muted-foreground">ou 1,4% do volume de negócios anual mundial (o que for mais elevado).</p>
          </div>
        </motion.div>

        {/* Sanções adicionais */}
        <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="bg-card rounded-2xl shadow-card p-6 mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">Sanções Adicionais para Entidades Essenciais</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-destructive/5">
              <ShieldBan className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">Suspensão temporária da certificação ou autorização de serviços.</p>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-destructive/5">
              <Ban className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">Proibição temporária do exercício de funções de gestão a qualquer pessoa com responsabilidades de chefia (CEO/Administradores).</p>
            </div>
          </div>
        </motion.div>

        <footer className="mt-12 py-8 border-t border-border">
          <p className="text-center text-muted-foreground text-sm">
            Esta estrutura é fornecida como guia de referência. Consulte sempre as autoridades competentes e especialistas jurídicos para garantir total conformidade.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Sancoes;
