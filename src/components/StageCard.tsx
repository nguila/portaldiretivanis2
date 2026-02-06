import { useState } from "react";
import { ChevronDown, Clock, Users, CheckCircle2, Check } from "lucide-react";
import { Stage } from "@/data/nis2Stages";
import ProcedureItem from "./ProcedureItem";

interface StageCardProps {
  stage: Stage;
  index: number;
  stageProgress: { completed: number; total: number; percentage: number };
  isProcedureCompleted: (procedureIndex: number) => boolean;
  isDetailCompleted: (procedureIndex: number, detailIndex: number) => boolean;
  onToggleProcedure: (procedureIndex: number) => void;
  onToggleDetail: (procedureIndex: number, detailIndex: number) => void;
}

const StageCard = ({ 
  stage, 
  index,
  stageProgress,
  isProcedureCompleted,
  isDetailCompleted,
  onToggleProcedure,
  onToggleDetail
}: StageCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = stage.icon;
  const isStageComplete = stageProgress.percentage === 100;

  return (
    <div 
      className="animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div 
        className={`
          bg-card rounded-2xl shadow-card transition-all duration-300
          ${isExpanded ? 'shadow-hover ring-2 ring-primary/20' : 'hover:shadow-hover'}
          ${isStageComplete ? 'ring-2 ring-green-500/30' : ''}
        `}
      >
        {/* Header */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-6 flex items-start gap-4 text-left"
        >
          <div className={`relative`}>
            <div className={`stage-indicator ${stage.colorClass} shrink-0 ${
              isStageComplete ? 'bg-green-500 text-white' : ''
            }`}>
              {isStageComplete ? <Check className="w-5 h-5" /> : stage.id}
            </div>
            {/* Progress ring */}
            {!isStageComplete && stageProgress.percentage > 0 && (
              <svg className="absolute -inset-1 w-12 h-12 -rotate-90">
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-green-500/30"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray={`${stageProgress.percentage * 1.256} 125.6`}
                  className="text-green-500 transition-all duration-500"
                />
              </svg>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className={`text-xl font-semibold mb-1 transition-colors ${
                  isStageComplete ? 'text-green-600 dark:text-green-400' : 'text-foreground'
                }`}>
                  {stage.title}
                </h3>
                <p className="text-muted-foreground">
                  {stage.subtitle}
                </p>
              </div>
              
              <div className="flex items-center gap-3 shrink-0">
                <div className={`p-2 rounded-lg ${isStageComplete ? 'bg-green-500/10' : 'bg-secondary'}`}>
                  <Icon className={`w-5 h-5 ${isStageComplete ? 'text-green-500' : 'text-primary'}`} />
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                    isExpanded ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </div>
            
            {/* Quick Info */}
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>{stage.timeline}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>{stage.responsibles.join(", ")}</span>
              </div>
              <div className={`flex items-center gap-2 text-sm ${
                isStageComplete ? 'text-green-600 dark:text-green-400' : 'text-muted-foreground'
              }`}>
                <CheckCircle2 className="w-4 h-4" />
                <span>{stageProgress.completed}/{stageProgress.total} tarefas</span>
                {stageProgress.percentage > 0 && !isStageComplete && (
                  <span className="text-xs bg-secondary px-2 py-0.5 rounded-full">
                    {stageProgress.percentage}%
                  </span>
                )}
              </div>
            </div>
          </div>
        </button>
        
        {/* Expanded Content */}
        {isExpanded && (
          <div className="px-6 pb-6 animate-scale-in">
            <div className="border-t border-border pt-6">
              {/* Overview */}
              <div className="bg-secondary/50 rounded-xl p-4 mb-6">
                <h4 className="font-medium text-foreground mb-2">Visão Geral</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {stage.overview}
                </p>
              </div>
              
              {/* Procedures */}
              <div className="space-y-4">
                <h4 className="font-medium text-foreground">Procedimentos</h4>
                {stage.procedures.map((procedure, idx) => (
                  <ProcedureItem 
                    key={idx} 
                    procedure={procedure} 
                    stageColor={stage.colorClass}
                    stageId={stage.id}
                    procedureIndex={idx}
                    isProcedureCompleted={isProcedureCompleted(idx)}
                    isDetailCompleted={(detailIdx) => isDetailCompleted(idx, detailIdx)}
                    onToggleProcedure={() => onToggleProcedure(idx)}
                    onToggleDetail={(detailIdx) => onToggleDetail(idx, detailIdx)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StageCard;
