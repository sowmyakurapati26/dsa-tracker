import type { Difficulty } from "@/data/problems";
import { cn } from "@/lib/utils";

const filters: (Difficulty | "All")[] = ["All", "Easy", "Medium", "Hard"];

const filterStyles: Record<string, string> = {
  All: "bg-primary text-primary-foreground",
  Easy: "bg-easy/20 text-easy-foreground dark:text-easy",
  Medium: "bg-medium/20 text-medium-foreground dark:text-medium",
  Hard: "bg-hard/20 text-hard-foreground dark:text-hard",
};

export function DifficultyFilter({
  active,
  onChange,
}: {
  active: Difficulty | "All";
  onChange: (d: Difficulty | "All") => void;
}) {
  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-hide py-1">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => onChange(f)}
          className={cn(
            "flex-shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 active-press tap-highlight",
            active === f ? filterStyles[f] : "bg-secondary text-muted-foreground"
          )}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
