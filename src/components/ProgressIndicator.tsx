import { nis2Stages } from "@/data/nis2Stages";
import { Check, RotateCcw } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface ProgressIndicatorProps {
  totalProgress: { completed: number; total: number; percentage: number };
  getStageProgress: (stageId: number) => { completed: number; total: number; percentage: number };
  onReset: () => void;
}

const ProgressIndicator = ({ totalProgress, getStageProgress, onReset }: ProgressIndicatorProps) => {
  return (
    <motion.div 
      className="bg-card rounded-2xl shadow-card p-6 mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            Progresso de Implementação
          </h3>
          <p className="text-sm text-muted-foreground">
            <motion.span
              key={totalProgress.completed}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {totalProgress.completed} de {totalProgress.total} tarefas concluídas
            </motion.span>
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-right">
            <motion.span 
              key={totalProgress.percentage}
              className={`text-2xl font-bold inline-block ${
                totalProgress.percentage === 100 
                  ? 'text-accent' 
                  : 'text-primary'
              }`}
              initial={{ scale: 1.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {totalProgress.percentage}%
            </motion.span>
          </div>
          
          <AnimatePresence>
            {totalProgress.completed > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onReset}
                  className="text-muted-foreground hover:text-destructive"
                >
                  <RotateCcw className="w-4 h-4 mr-1" />
                  Reiniciar
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
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
                <motion.div 
                  className={`
                    stage-indicator text-sm
                    ${isComplete 
                      ? 'bg-accent text-accent-foreground' 
                      : hasProgress 
                        ? `${stage.colorClass} ring-2 ring-accent/50` 
                        : stage.colorClass
                    }
                  `}
                  animate={isComplete ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.4 }}
                  layout
                >
                  <AnimatePresence mode="wait">
                    {isComplete ? (
                      <motion.div key="check" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                        <Check className="w-4 h-4" />
                      </motion.div>
                    ) : (
                      <motion.span key="num" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        {stage.id}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
                <div className="mt-2 text-center hidden md:block">
                  <span className={`text-xs ${
                    isComplete ? 'text-accent font-medium' : 'text-muted-foreground'
                  }`}>
                    {stage.title.split(" ")[0]}
                  </span>
                  {hasProgress && !isComplete && (
                    <motion.div 
                      className="text-xs text-muted-foreground"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {stageProgress.percentage}%
                    </motion.div>
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
    </motion.div>
  );
};

export default ProgressIndicator;
