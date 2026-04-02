import { Check, Circle } from "lucide-react";
import type { Problem } from "@/data/problems";
import { DifficultyBadge } from "./DifficultyBadge";
import { cn } from "@/lib/utils";

interface ProblemCardProps {
  problem: Problem;
  isSolved: boolean;
  onToggle: () => void;
  onView: () => void;
  index: number;
}

export function ProblemCard({ problem, isSolved, onToggle, onView, index }: ProblemCardProps) {
  return (
    <div
      className="group rounded-xl border border-border bg-card p-4 transition-all duration-200 hover:bg-surface-hover active-press tap-highlight animate-slide-up"
      style={{ animationDelay: `${Math.min(index * 30, 300)}ms`, animationFillMode: "both" }}
      onClick={onView}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs text-muted-foreground font-mono">#{problem.id}</span>
            <DifficultyBadge difficulty={problem.difficulty} />
          </div>
          <h3 className="font-medium text-sm text-card-foreground leading-snug truncate">{problem.title}</h3>
          <div className="flex items-center gap-1.5 mt-2 flex-wrap">
            <span className="text-[10px] rounded-md bg-secondary px-1.5 py-0.5 text-secondary-foreground font-medium">
              {problem.category}
            </span>
            {problem.tags.slice(0, 2).map(tag => (
              <span key={tag} className="text-[10px] rounded-md bg-muted px-1.5 py-0.5 text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); onToggle(); }}
          className={cn(
            "flex-shrink-0 mt-1 h-6 w-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 active-press",
            isSolved
              ? "border-easy bg-easy/20 text-easy dark:text-easy"
              : "border-border text-transparent hover:border-muted-foreground"
          )}
        >
          {isSolved ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : <Circle className="h-3 w-3" />}
        </button>
      </div>
    </div>
  );
}
