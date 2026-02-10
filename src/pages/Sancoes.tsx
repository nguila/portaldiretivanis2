import Header from "@/components/Header";
import { motion } from "framer-motion";
import { Scale, ShieldBan, Ban, Eye, AlertTriangle, UserX, FileWarning, Megaphone, ClipboardCheck, HandCoins, Gavel, Building2 } from "lucide-react";

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
          <p className="text-muted-foreground mb-4 max-w-3xl leading-relaxed">
            A Diretiva NIS 2 (Diretiva (UE) 2022/2555) introduz um regime sancionatório significativamente mais rigoroso do que a sua antecessora, estabelecendo coimas elevadas e responsabilização direta dos órgãos de gestão. As penalizações devem ser "eficazes, proporcionadas e dissuasivas".
          </p>
          <p className="text-sm text-muted-foreground mb-8 max-w-3xl italic">
            As diferenças nos valores máximos das coimas são definidas no Artigo 34.º da Diretiva.
          </p>
        </motion.div>

        {/* Tipos de Supervisão */}
        <motion.div {...fadeIn} transition={{ delay: 0.1 }}>
          <h3 className="text-xl font-semibold text-foreground mb-4">Tipos de Supervisão</h3>
        </motion.div>
        <motion.div {...fadeIn} transition={{ delay: 0.12 }} className="grid sm:grid-cols-2 gap-4 mb-8">
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

        {/* 1. Coimas Administrativas */}
        <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
          <h3 className="text-xl font-semibold text-foreground mb-2">1. Multas Administrativas (Coimas)</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Embora ambas as categorias estejam sujeitas a sanções, a Diretiva NIS 2 estabelece tetos distintos no Artigo 34.º. A diretiva define limites mínimos para os valores máximos das coimas — os Estados-Membros não podem estabelecer tetos inferiores a estes valores na sua lei nacional:
          </p>
        </motion.div>

        <motion.div {...fadeIn} transition={{ delay: 0.25 }} className="grid sm:grid-cols-2 gap-4 mb-4">
          <div className="bg-card rounded-2xl shadow-card p-6 border-l-4 border-primary">
            <div className="flex items-center gap-2 mb-2">
              <Scale className="w-5 h-5 text-primary" />
              <h4 className="font-semibold text-foreground">Entidades Essenciais</h4>
            </div>
            <p className="text-2xl font-bold text-primary mb-1">€10.000.000</p>
            <p className="text-sm text-muted-foreground">ou <strong>2%</strong> do volume de negócios anual mundial total do exercício financeiro anterior da empresa, consoante o montante que for mais elevado.</p>
          </div>
          <div className="bg-card rounded-2xl shadow-card p-6 border-l-4 border-accent">
            <div className="flex items-center gap-2 mb-2">
              <Scale className="w-5 h-5 text-accent" />
              <h4 className="font-semibold text-foreground">Entidades Importantes</h4>
            </div>
            <p className="text-2xl font-bold text-accent mb-1">€7.000.000</p>
            <p className="text-sm text-muted-foreground">ou <strong>1,4%</strong> do volume de negócios anual mundial total do exercício financeiro anterior da empresa, consoante o montante que for mais elevado.</p>
          </div>
        </motion.div>

        <motion.div {...fadeIn} transition={{ delay: 0.27 }} className="mb-8">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 border border-border">
            <Building2 className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              <strong>Nota sobre a Administração Pública:</strong> Os Estados-Membros têm autonomia para decidir se e em que medida as coimas administrativas são aplicáveis a entidades da administração pública.
            </p>
          </div>
        </motion.div>

        {/* 2. Sanções Pessoais */}
        <motion.div {...fadeIn} transition={{ delay: 0.3 }} className="bg-card rounded-2xl shadow-card p-6 mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-2">2. Sanções Pessoais e à Gestão</h3>
          <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wide font-medium">Apenas Entidades Essenciais — em casos de incumprimento persistente</p>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-destructive/5">
              <ShieldBan className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">Suspensão de Certificação/Autorização</p>
                <p className="text-sm text-muted-foreground">Suspensão temporária da certificação ou autorização relativa a parte ou à totalidade dos serviços prestados pela entidade.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-destructive/5">
              <Ban className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">Proibição de Exercício de Funções de Gestão</p>
                <p className="text-sm text-muted-foreground">Proibição temporária de qualquer pessoa com responsabilidades de chefia (CEO, administradores, representantes legais) de exercer funções de gestão nessa entidade.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-destructive/5">
              <UserX className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">Responsabilização Pessoal</p>
                <p className="text-sm text-muted-foreground">As pessoas singulares responsáveis pela representação ou controlo da entidade podem ser responsabilizadas pelo incumprimento dos seus deveres de garantir a conformidade.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3. Outras Medidas */}
        <motion.div {...fadeIn} transition={{ delay: 0.35 }} className="bg-card rounded-2xl shadow-card p-6 mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-2">3. Outras Medidas de Execução e Supervisão</h3>
          <p className="text-sm text-muted-foreground mb-4">Aplicáveis tanto a entidades essenciais como importantes:</p>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/50">
              <FileWarning className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">Advertências e Instruções Vinculativas</p>
                <p className="text-sm text-muted-foreground">Emitir avisos sobre infrações e dar ordens para remediar deficiências ou impedir certas condutas.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/50">
              <ClipboardCheck className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">Auditorias de Segurança</p>
                <p className="text-sm text-muted-foreground">Ordenar auditorias de segurança (regulares, ad hoc ou direcionadas) e scans de segurança.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/50">
              <Eye className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">Designação de Responsável de Monitorização</p>
                <p className="text-sm text-muted-foreground">Nomear um funcionário de monitorização com tarefas definidas para supervisionar o cumprimento por um período determinado (entidades essenciais).</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/50">
              <Megaphone className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">Divulgação Pública</p>
                <p className="text-sm text-muted-foreground">Ordenar que a entidade torne públicos aspetos do incumprimento ou informe clientes e público sobre o incidente e medidas de proteção.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-muted/50">
              <HandCoins className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-foreground">Sanções Pecuniárias Compulsórias</p>
                <p className="text-sm text-muted-foreground">Pagamentos periódicos para obrigar a cessar uma infração ou cumprir uma decisão administrativa.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4. Critérios */}
        <motion.div {...fadeIn} transition={{ delay: 0.4 }} className="bg-card rounded-2xl shadow-card p-6 mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-2">4. Critérios para Aplicação das Penalizações</h3>
          <p className="text-sm text-muted-foreground mb-4">Ao decidir sobre a aplicação de multas ou outras medidas, as autoridades devem ter em conta as circunstâncias de cada caso individual:</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "A gravidade e duração da infração.",
              "Se houve dolo (intenção) ou negligência.",
              "Os danos causados (financeiros, económicos, ou a outros utilizadores).",
              "A existência de infrações anteriores.",
              "O nível de cooperação da entidade com a autoridade competente.",
              "As medidas tomadas pela entidade para mitigar os danos.",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 p-3 rounded-xl bg-muted/30">
                <Gavel className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-3">
            <h4 className="text-sm font-semibold text-foreground">Pontos em Comum</h4>
            <p className="text-sm text-muted-foreground">Apesar da diferença nos valores, a aplicação das multas segue princípios semelhantes para ambos os tipos de entidades:</p>
            <div className="space-y-2">
              <div className="flex items-start gap-2 p-3 rounded-xl bg-primary/5">
                <span className="text-primary font-bold text-sm shrink-0">1.</span>
                <p className="text-sm text-muted-foreground"><strong>Critério do "Mais Elevado":</strong> Em ambos os casos, a autoridade competente deve aplicar o limite que for maior (o valor fixo ou a percentagem do volume de negócios).</p>
              </div>
              <div className="flex items-start gap-2 p-3 rounded-xl bg-primary/5">
                <span className="text-primary font-bold text-sm shrink-0">2.</span>
                <p className="text-sm text-muted-foreground"><strong>Motivos da Multa:</strong> Estas multas aplicam-se em caso de infração das obrigações de gestão de riscos de cibersegurança (Artigo 21.º) ou das obrigações de notificação (Artigo 23.º).</p>
              </div>
              <div className="flex items-start gap-2 p-3 rounded-xl bg-primary/5">
                <span className="text-primary font-bold text-sm shrink-0">3.</span>
                <p className="text-sm text-muted-foreground"><strong>Avaliação Individual:</strong> A decisão de aplicar uma multa e o seu montante deve ter em conta as circunstâncias de cada caso, como a gravidade da infração, a duração, danos causados, intencionalidade (dolo) ou negligência.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <footer className="mt-12 py-8 border-t border-border">
          <p className="text-center text-muted-foreground text-sm">
            Este documento foi elaborado com base nas disposições da Diretiva (UE) 2022/2555. Para a aplicação específica em Portugal, consulte o Decreto-Lei n.º 125/2025.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Sancoes;
