import { nis2Stages } from "@/data/nis2Stages";
import { Check, RotateCcw } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

interface ProgressIndicatorProps {
  totalProgress: { completed: number; total: number; percentage: number };
  getStageProgress: (stageId: number) => { completed: number; total: number; percentage: number };
  onReset: () => void;
}

const ProgressIndicator = ({ totalProgress, getStageProgress, onReset }: ProgressIndicatorProps) => {
  return (
    <div className="bg-card rounded-2xl shadow-card p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            Progresso de Implementação
          </h3>
          <p className="text-sm text-muted-foreground">
            {totalProgress.completed} de {totalProgress.total} tarefas concluídas
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-right">
            <span className={`text-2xl font-bold ${
              totalProgress.percentage === 100 
                ? 'text-accent' 
                : 'text-primary'
            }`}>
              {totalProgress.percentage}%
            </span>
          </div>
          
          {totalProgress.completed > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onReset}
              className="text-muted-foreground hover:text-destructive"
            >
              <RotateCcw className="w-4 h-4 mr-1" />
              Reiniciar
            </Button>
          )}
        </div>
      </div>
      
      {/* Main progress bar */}
      <Progress value={totalProgress.percentage} className="h-3 mb-6" />
      
      {/* Stage indicators */}
      <div className="flex items-center justify-between gap-2">
        {nis2Stages.map((stage, index) => {
          const stageProgress = getStageProgress(stage.id);
          const isComplete = stageProgress.percentage === 100;
          const hasProgress = stageProgress.percentage > 0;
          
          return (
            <div key={stage.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div 
                  className={`
                    stage-indicator text-sm transition-all duration-300
                    ${isComplete 
                      ? 'bg-accent text-accent-foreground' 
                      : hasProgress 
                        ? `${stage.colorClass} ring-2 ring-accent/50` 
                        : stage.colorClass
                    }
                  `}
                >
                  {isComplete ? <Check className="w-4 h-4" /> : stage.id}
                </div>
                <div className="mt-2 text-center hidden md:block">
                  <span className={`text-xs ${
                    isComplete ? 'text-accent font-medium' : 'text-muted-foreground'
                  }`}>
                    {stage.title.split(" ")[0]}
                  </span>
                  {hasProgress && !isComplete && (
                    <div className="text-xs text-muted-foreground">
                      {stageProgress.percentage}%
                    </div>
                  )}
                </div>
              </div>
              
              {index < nis2Stages.length - 1 && (
                <div className={`h-0.5 flex-1 mx-2 transition-colors duration-300 ${
                  isComplete ? 'bg-accent' : 'bg-border'
                }`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressIndicator;
