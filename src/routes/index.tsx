import { createFileRoute } from "@tanstack/react-router";
import { SearchBar } from "@/components/SearchBar";
import { DifficultyFilter } from "@/components/DifficultyFilter";
import { ProblemCard } from "@/components/ProblemCard";
import { ProblemCardSkeleton } from "@/components/Skeletons";
import { useProblems } from "@/hooks/use-problems";
import { Flame, Clock } from "lucide-react";
import { DifficultyBadge } from "@/components/DifficultyBadge";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const {
    problems, solvedIds, recentProblems, stats,
    search, setSearch, difficultyFilter, setDifficultyFilter,
    toggleSolved, addRecent, isLoaded,
  } = useProblems();

  if (!isLoaded) {
    return (
      <div className="px-4 pt-4 pb-24 space-y-4">
        <div className="skeleton-shimmer h-10 rounded-xl" />
        <div className="skeleton-shimmer h-8 rounded-xl w-48" />
        {Array.from({ length: 6 }).map((_, i) => (
          <ProblemCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="pb-24">
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border px-4 pt-4 pb-3 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-foreground tracking-tight">DSA Tracker</h1>
            <p className="text-xs text-muted-foreground mt-0.5">
              {stats.solved}/{stats.total} solved · {stats.percentage}%
            </p>
          </div>
          <div className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1.5">
            <Flame className="h-4 w-4 text-primary" />
            <span className="text-xs font-bold text-primary">{stats.solved}</span>
          </div>
        </div>
        <SearchBar value={search} onChange={setSearch} />
        <DifficultyFilter active={difficultyFilter} onChange={setDifficultyFilter} />
      </header>

      {recentProblems.length > 0 && !search && (
        <section className="px-4 pt-4">
          <div className="flex items-center gap-1.5 mb-2">
            <Clock className="h-3.5 w-3.5 text-muted-foreground" />
            <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Recently Viewed</h2>
          </div>
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-2">
            {recentProblems.slice(0, 5).map(p => (
              <div
                key={p.id}
                className="flex-shrink-0 rounded-lg border border-border bg-card px-3 py-2 min-w-[140px] active-press tap-highlight"
                onClick={() => addRecent(p.id)}
              >
                <p className="text-xs font-medium text-card-foreground truncate">{p.title}</p>
                <DifficultyBadge difficulty={p.difficulty} className="mt-1" />
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="px-4 pt-4 space-y-2">
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-sm font-semibold text-foreground">{search ? "Results" : "All Problems"}</h2>
          <span className="text-xs text-muted-foreground">{problems.length} problems</span>
        </div>
        {problems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <p className="text-sm text-muted-foreground">No problems found</p>
            <p className="text-xs text-muted-foreground mt-1">Try adjusting your filters</p>
          </div>
        ) : (
          problems.map((p, i) => (
            <ProblemCard
              key={p.id}
              problem={p}
              isSolved={solvedIds.includes(p.id)}
              onToggle={() => toggleSolved(p.id)}
              onView={() => addRecent(p.id)}
              index={i}
            />
          ))
        )}
      </section>
    </div>
  );
}
