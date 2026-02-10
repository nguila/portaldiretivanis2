import Header from "@/components/Header";
import { motion } from "framer-motion";
import { ClipboardList, Building, Mail, Network, Globe, Layers } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const campos = [
  { icon: Building, label: "Nome da entidade" },
  { icon: Mail, label: "Endereço e dados de contacto atualizados" },
  { icon: Layers, label: "Setor e subsetor de atividade" },
  { icon: Network, label: "Gamas de endereços IP" },
  { icon: Globe, label: "Estados-Membros onde opera" },
];

const Registo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-8">
        <motion.div {...fadeIn}>
          <h2 className="text-3xl font-bold text-foreground mb-2">Registo de Entidades</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl leading-relaxed">
            As entidades abrangidas devem submeter as seguintes informações à autoridade competente (prazo até 17 de janeiro de 2025 para envio de dados, para constituição da lista nacional até 17 de abril de 2025).
          </p>
        </motion.div>

        <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bg-card rounded-2xl shadow-card p-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10"><ClipboardList className="w-5 h-5 text-primary" /></div>
            <h3 className="text-lg font-semibold text-foreground">Informações Obrigatórias</h3>
          </div>
          <div className="space-y-3">
            {campos.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.07 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50"
              >
                <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold">{i + 1}</span>
                <c.icon className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-foreground font-medium">{c.label}</span>
              </motion.div>
            ))}
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

export default Registo;
