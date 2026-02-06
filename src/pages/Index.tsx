import Header from "@/components/Header";
import ProgressIndicator from "@/components/ProgressIndicator";
import QuickLinks from "@/components/QuickLinks";
import StageCard from "@/components/StageCard";
import { nis2Stages } from "@/data/nis2Stages";
import { useProgress } from "@/hooks/useProgress";

const Index = () => {
  const {
    getStageProgress,
    getTotalProgress,
    isProcedureCompleted,
    isDetailCompleted,
    toggleProcedure,
    toggleDetail,
    resetProgress,
  } = useProgress();

  const totalProgress = getTotalProgress();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-6xl mx-auto px-6 py-8">
        <ProgressIndicator 
          totalProgress={totalProgress}
          getStageProgress={getStageProgress}
          onReset={resetProgress}
        />
        <QuickLinks />
        
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Etapas de Implementação
          </h2>
          
          <div className="space-y-4">
            {nis2Stages.map((stage, index) => (
              <StageCard 
                key={stage.id} 
                stage={stage} 
                index={index}
                stageProgress={getStageProgress(stage.id)}
                isProcedureCompleted={(procIdx) => isProcedureCompleted(stage.id, procIdx)}
                isDetailCompleted={(procIdx, detailIdx) => isDetailCompleted(stage.id, procIdx, detailIdx)}
                onToggleProcedure={(procIdx) => toggleProcedure(stage.id, procIdx)}
                onToggleDetail={(procIdx, detailIdx) => toggleDetail(stage.id, procIdx, detailIdx)}
              />
            ))}
          </div>
        </section>
        
        <footer className="mt-12 py-8 border-t border-border">
          <p className="text-center text-muted-foreground text-sm">
            Esta estrutura é fornecida como guia de referência. Consulte sempre as autoridades competentes e especialistas jurídicos para garantir total conformidade.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
