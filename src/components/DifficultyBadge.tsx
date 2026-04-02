import type { Difficulty } from "@/data/problems";
import { cn } from "@/lib/utils";

const difficultyStyles: Record<Difficulty, string> = {
  Easy: "bg-easy/15 text-easy-foreground dark:text-easy",
  Medium: "bg-medium/15 text-medium-foreground dark:text-medium",
  Hard: "bg-hard/15 text-hard-foreground dark:text-hard",
};

export function DifficultyBadge({ difficulty, className }: { difficulty: Difficulty; className?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold", difficultyStyles[difficulty], className)}>
      {difficulty}
    </span>
  );
}
