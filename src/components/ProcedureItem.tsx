import { useState } from "react";
import { ChevronRight, Check } from "lucide-react";
import { Procedure } from "@/data/nis2Stages";
import { Checkbox } from "@/components/ui/checkbox";

interface ProcedureItemProps {
  procedure: Procedure;
  stageColor: string;
  stageId: number;
  procedureIndex: number;
  isProcedureCompleted: boolean;
  isDetailCompleted: (detailIndex: number) => boolean;
  onToggleProcedure: () => void;
  onToggleDetail: (detailIndex: number) => void;
}

const ProcedureItem = ({ 
  procedure, 
  stageColor,
  isProcedureCompleted,
  isDetailCompleted,
  onToggleProcedure,
  onToggleDetail
}: ProcedureItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const completedCount = procedure.details.filter((_, idx) => isDetailCompleted(idx)).length;
  const totalCount = procedure.details.length;
  const progressPercentage = (completedCount / totalCount) * 100;

  return (
    <div className={`border rounded-xl overflow-hidden transition-all duration-200 ${
      isProcedureCompleted 
        ? 'border-green-500/50 bg-green-500/5' 
        : 'border-border'
    }`}>
      <div className="flex items-center">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleProcedure();
          }}
          className="p-4 hover:bg-secondary/30 transition-colors"
        >
          <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200 ${
            isProcedureCompleted 
              ? 'bg-green-500 border-green-500' 
              : 'border-muted-foreground/30 hover:border-primary'
          }`}>
            {isProcedureCompleted && <Check className="w-3 h-3 text-white" />}
          </div>
        </button>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex-1 p-4 pl-0 flex items-center gap-3 text-left hover:bg-secondary/30 transition-colors"
        >
          <ChevronRight 
            className={`w-5 h-5 text-primary shrink-0 transition-transform duration-200 ${
              isOpen ? 'rotate-90' : ''
            }`}
          />
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h5 className={`font-medium transition-colors ${
                isProcedureCompleted ? 'text-green-600 dark:text-green-400' : 'text-foreground'
              }`}>
                {procedure.title}
              </h5>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                isProcedureCompleted 
                  ? 'bg-green-500/20 text-green-600 dark:text-green-400' 
                  : 'bg-secondary text-muted-foreground'
              }`}>
                {completedCount}/{totalCount}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{procedure.description}</p>
            
            {/* Mini progress bar */}
            <div className="mt-2 h-1 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-green-500 transition-all duration-300 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </button>
      </div>
      
      {isOpen && (
        <div className="px-4 pb-4 animate-scale-in">
          <div className="ml-8 space-y-2">
            {procedure.details.map((detail, idx) => {
              const isCompleted = isDetailCompleted(idx);
              return (
                <label 
                  key={idx}
                  className={`flex items-start gap-3 text-sm p-2 rounded-lg cursor-pointer transition-all duration-200 hover:bg-secondary/50 ${
                    isCompleted ? 'bg-green-500/10' : ''
                  }`}
                >
                  <Checkbox 
                    checked={isCompleted}
                    onCheckedChange={() => onToggleDetail(idx)}
                    className="mt-0.5 shrink-0"
                  />
                  <span className={`transition-colors ${
                    isCompleted 
                      ? 'text-green-600 dark:text-green-400 line-through opacity-70' 
                      : 'text-muted-foreground'
                  }`}>
                    {detail}
                  </span>
                </label>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProcedureItem;
