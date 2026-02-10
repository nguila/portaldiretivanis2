import Header from "@/components/Header";
import { motion } from "framer-motion";
import { Shield, Building2, Zap, Train, Landmark, Heart, Droplets, Globe, Satellite, ShieldCheck, Package, Trash2, FlaskConical, UtensilsCrossed, Factory, ShoppingCart, GraduationCap } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.06 } },
};

const staggerItem = {
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 0 },
};

const essenciais = [
  { icon: Zap, label: "Energia", desc: "Eletricidade, Petróleo, Gás, Hidrogénio, Redes de calor/frio" },
  { icon: Train, label: "Transportes", desc: "Aéreo, Ferroviário, Aquático, Rodoviário" },
  { icon: Landmark, label: "Banca e Infraestruturas Financeiras", desc: "Nota: Setor financeiro segue preferencialmente o Regulamento DORA" },
  { icon: Heart, label: "Saúde", desc: "Prestadores de cuidados, fabrico de produtos farmacêuticos e dispositivos críticos" },
  { icon: Droplets, label: "Água", desc: "Potável e Residual" },
  { icon: Globe, label: "Infraestrutura Digital", desc: "IXP, DNS, TLD, Cloud, Data Centers, CDN, Redes de comunicações públicas, Serviços de confiança" },
  { icon: ShieldCheck, label: "Gestão de Serviços TIC (B2B)", desc: "MSP e MSSP (Prestadores de serviços geridos)" },
  { icon: Satellite, label: "Espaço", desc: "Operadores de infraestruturas espaciais" },
  { icon: Building2, label: "Administração Pública", desc: "Entidades da administração pública central e regional" },
];

const importantes = [
  { icon: Package, label: "Serviços Postais e de Estafeta", desc: "Prestadores de serviços postais" },
  { icon: Trash2, label: "Gestão de Resíduos", desc: "Recolha e tratamento de resíduos" },
  { icon: FlaskConical, label: "Químicos", desc: "Fabrico, produção e distribuição" },
  { icon: UtensilsCrossed, label: "Alimentação", desc: "Produção, transformação e distribuição" },
  { icon: Factory, label: "Indústria Transformadora", desc: "Dispositivos médicos, computadores, eletrónica, equipamento elétrico, máquinas e veículos automóveis" },
  { icon: ShoppingCart, label: "Prestadores Digitais", desc: "Mercados em linha, Motores de busca, Redes sociais" },
  { icon: GraduationCap, label: "Investigação", desc: "Organizações de investigação" },
];

const Setores = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-8">
        <motion.div {...fadeIn}>
          <h2 className="text-3xl font-bold text-foreground mb-2">Quem é Abrangido?</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl leading-relaxed">
            A diretiva aplica-se a entidades públicas ou privadas que prestem serviços na UE e que, em regra, sejam médias ou grandes empresas (mais de 50 trabalhadores e volume de negócios/balanço &gt; 10 milhões de euros).
          </p>
        </motion.div>

        {/* Exceções */}
        <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="bg-card rounded-2xl shadow-card p-6 mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-3">Exceções — Abrangidos independentemente da dimensão</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Prestadores de redes/serviços de comunicações eletrónicas públicas, prestadores de serviços de confiança, registos de nomes de domínio de topo (TLD) e prestadores de DNS.</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Entidades identificadas como críticas ou cuja perturbação tenha impacto sistémico/transfronteiriço.</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span>Entidades da administração pública central (e regional, conforme avaliação de risco).</li>
          </ul>
        </motion.div>

        {/* Entidades Essenciais */}
        <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
          <h3 className="text-2xl font-bold text-foreground mb-1">A. Entidades Essenciais</h3>
          <p className="text-sm text-muted-foreground mb-4">Geralmente Grandes Empresas em Setores de Alta Criticidade</p>
        </motion.div>
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10" variants={staggerContainer} initial="initial" animate="animate">
          {essenciais.map((s) => (
            <motion.div key={s.label} variants={staggerItem} className="bg-card rounded-xl shadow-soft p-4 flex items-start gap-3 border border-border hover:border-primary/30 transition-colors">
              <div className="p-2 rounded-lg bg-primary/10 shrink-0"><s.icon className="w-5 h-5 text-primary" /></div>
              <div><h4 className="font-medium text-foreground text-sm">{s.label}</h4><p className="text-xs text-muted-foreground mt-0.5">{s.desc}</p></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Entidades Importantes */}
        <motion.div {...fadeIn} transition={{ delay: 0.3 }}>
          <h3 className="text-2xl font-bold text-foreground mb-1">B. Entidades Importantes</h3>
          <p className="text-sm text-muted-foreground mb-4">Geralmente Médias Empresas dos setores acima + Médias e Grandes dos setores abaixo</p>
        </motion.div>
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10" variants={staggerContainer} initial="initial" animate="animate">
          {importantes.map((s) => (
            <motion.div key={s.label} variants={staggerItem} className="bg-card rounded-xl shadow-soft p-4 flex items-start gap-3 border border-border hover:border-accent/30 transition-colors">
              <div className="p-2 rounded-lg bg-accent/10 shrink-0"><s.icon className="w-5 h-5 text-accent" /></div>
              <div><h4 className="font-medium text-foreground text-sm">{s.label}</h4><p className="text-xs text-muted-foreground mt-0.5">{s.desc}</p></div>
            </motion.div>
          ))}
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

export default Setores;
