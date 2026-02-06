import { useState, useEffect, useCallback } from "react";
import { nis2Stages } from "@/data/nis2Stages";

interface ProgressState {
  [stageId: number]: {
    [procedureIndex: number]: {
      completed: boolean;
      details: { [detailIndex: number]: boolean };
    };
  };
}

const STORAGE_KEY = "nis2-progress";

const initializeProgressState = (): ProgressState => {
  const state: ProgressState = {};
  nis2Stages.forEach((stage) => {
    state[stage.id] = {};
    stage.procedures.forEach((procedure, procIndex) => {
      state[stage.id][procIndex] = {
        completed: false,
        details: {},
      };
      procedure.details.forEach((_, detailIndex) => {
        state[stage.id][procIndex].details[detailIndex] = false;
      });
    });
  });
  return state;
};

export const useProgress = () => {
  const [progress, setProgress] = useState<ProgressState>(() => {
    if (typeof window === "undefined") return initializeProgressState();
    
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return initializeProgressState();
      }
    }
    return initializeProgressState();
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const toggleDetail = useCallback((stageId: number, procedureIndex: number, detailIndex: number) => {
    setProgress((prev) => {
      const newState = { ...prev };
      const stage = { ...newState[stageId] };
      const procedure = { ...stage[procedureIndex] };
      const details = { ...procedure.details };
      
      details[detailIndex] = !details[detailIndex];
      
      // Check if all details are completed
      const allDetailsCompleted = Object.values(details).every(Boolean);
      
      procedure.details = details;
      procedure.completed = allDetailsCompleted;
      stage[procedureIndex] = procedure;
      newState[stageId] = stage;
      
      return newState;
    });
  }, []);

  const toggleProcedure = useCallback((stageId: number, procedureIndex: number) => {
    setProgress((prev) => {
      const newState = { ...prev };
      const stage = { ...newState[stageId] };
      const procedure = { ...stage[procedureIndex] };
      
      const newCompletedState = !procedure.completed;
      procedure.completed = newCompletedState;
      
      // Set all details to the same state
      const details = { ...procedure.details };
      Object.keys(details).forEach((key) => {
        details[Number(key)] = newCompletedState;
      });
      procedure.details = details;
      
      stage[procedureIndex] = procedure;
      newState[stageId] = stage;
      
      return newState;
    });
  }, []);

  const getStageProgress = useCallback((stageId: number) => {
    const stageProgress = progress[stageId];
    if (!stageProgress) return { completed: 0, total: 0, percentage: 0 };
    
    let completed = 0;
    let total = 0;
    
    Object.values(stageProgress).forEach((procedure) => {
      Object.values(procedure.details).forEach((isCompleted) => {
        total++;
        if (isCompleted) completed++;
      });
    });
    
    return {
      completed,
      total,
      percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
    };
  }, [progress]);

  const getTotalProgress = useCallback(() => {
    let completed = 0;
    let total = 0;
    
    Object.values(progress).forEach((stage) => {
      Object.values(stage).forEach((procedure) => {
        const proc = procedure as { completed: boolean; details: { [key: number]: boolean } };
        Object.values(proc.details).forEach((isCompleted) => {
          total++;
          if (isCompleted) completed++;
        });
      });
    });
    
    return {
      completed,
      total,
      percentage: total > 0 ? Math.round((completed / total) * 100) : 0,
    };
  }, [progress]);

  const isDetailCompleted = useCallback((stageId: number, procedureIndex: number, detailIndex: number) => {
    return progress[stageId]?.[procedureIndex]?.details[detailIndex] ?? false;
  }, [progress]);

  const isProcedureCompleted = useCallback((stageId: number, procedureIndex: number) => {
    return progress[stageId]?.[procedureIndex]?.completed ?? false;
  }, [progress]);

  const resetProgress = useCallback(() => {
    setProgress(initializeProgressState());
  }, []);

  return {
    progress,
    toggleDetail,
    toggleProcedure,
    getStageProgress,
    getTotalProgress,
    isDetailCompleted,
    isProcedureCompleted,
    resetProgress,
  };
};
