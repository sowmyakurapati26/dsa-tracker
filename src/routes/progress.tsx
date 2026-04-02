import { createFileRoute } from "@tanstack/react-router";
import { useProblems } from "@/hooks/use-problems";
import { ProgressRing } from "@/components/ProgressRing";
import { Progress } from "@/components/ui/progress";
import { StatCardSkeleton } from "@/components/Skeletons";
import { Trophy, Target, Zap, TrendingUp } from "lucide-react";
import { categories, problems as allProblemsData } from "@/data/problems";

export const Route = createFileRoute("/progress")({
  component: ProgressPage,
});

function ProgressPage() {
  const { solvedIds, stats, isLoaded } = useProblems();

  if (!isLoaded) {
    return (
      <div className="px-4 pt-4 pb-24 space-y-4">
        <div className="skeleton-shimmer h-8 w-40 rounded-lg" />
        <div className="grid grid-cols-2 gap-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <StatCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  const categoryStats = categories.map(cat => {
    const catProblems = allProblemsData.filter(p => p.category === cat);
    const solved = catProblems.filter(p => solvedIds.includes(p.id)).length;
    const pct = catProblems.length > 0 ? Math.round((solved / catProblems.length) * 100) : 0;
    return { name: cat, total: catProblems.length, solved, pct };
  });

  return (
    <div className="pb-24">
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border px-4 pt-4 pb-3">
        <h1 className="text-xl font-bold text-foreground tracking-tight">Progress</h1>
        <p className="text-xs text-muted-foreground mt-0.5">Track your DSA journey</p>
      </div>

      <div className="flex flex-col items-center pt-8 pb-4 animate-fade-in">
        <ProgressRing value={stats.solved} max={stats.total} size={120} strokeWidth={8} label="solved" />
        <p className="text-sm font-medium text-foreground mt-3">{stats.percentage}% Complete</p>
        <p className="text-xs text-muted-foreground">{stats.total - stats.solved} problems remaining</p>
      </div>

      <div className="grid grid-cols-2 gap-3 px-4 animate-slide-up" style={{ animationDelay: "100ms", animationFillMode: "both" }}>
        <StatCard icon={<Trophy className="h-4 w-4" />} label="Solved" value={stats.solved} color="text-primary" />
        <StatCard icon={<Target className="h-4 w-4" />} label="Total" value={stats.total} color="text-foreground" />
        <StatCard icon={<Zap className="h-4 w-4" />} label="Streak" value={solvedIds.length > 0 ? 1 : 0} color="text-medium" />
        <StatCard icon={<TrendingUp className="h-4 w-4" />} label="Accuracy" value={`${stats.percentage}%`} color="text-easy" />
      </div>

      <section className="px-4 pt-6 animate-slide-up" style={{ animationDelay: "200ms", animationFillMode: "both" }}>
        <h2 className="text-sm font-semibold text-foreground mb-3">By Difficulty</h2>
        <div className="space-y-3">
          <DifficultyRow label="Easy" solved={stats.easy.solved} total={stats.easy.total} color="var(--color-easy)" />
          <DifficultyRow label="Medium" solved={stats.medium.solved} total={stats.medium.total} color="var(--color-medium)" />
          <DifficultyRow label="Hard" solved={stats.hard.solved} total={stats.hard.total} color="var(--color-hard)" />
        </div>
      </section>

      <section className="px-4 pt-6 animate-slide-up" style={{ animationDelay: "300ms", animationFillMode: "both" }}>
        <h2 className="text-sm font-semibold text-foreground mb-3">By Category</h2>
        <div className="space-y-2">
          {categoryStats.map(cat => (
            <div key={cat.name} className="rounded-lg border border-border bg-card p-3">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-medium text-card-foreground">{cat.name}</span>
                <span className="text-xs text-muted-foreground">{cat.solved}/{cat.total}</span>
              </div>
              <Progress value={cat.pct} className="h-1.5" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function StatCard({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: number | string; color: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <div className={`${color} mb-1`}>{icon}</div>
      <p className="text-2xl font-bold text-card-foreground">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

function DifficultyRow({ label, solved, total, color }: { label: string; solved: number; total: number; color: string }) {
  const pct = total > 0 ? Math.round((solved / total) * 100) : 0;
  return (
    <div className="rounded-lg border border-border bg-card p-3">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-xs font-semibold" style={{ color }}>{label}</span>
        <span className="text-xs text-muted-foreground">{solved}/{total}</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-border overflow-hidden">
        <div className="h-full rounded-full transition-all duration-700" style={{ width: `${pct}%`, backgroundColor: color }} />
      </div>
    </div>
  );
}
