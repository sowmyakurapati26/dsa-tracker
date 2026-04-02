import { createFileRoute } from "@tanstack/react-router";
import { sheets, problems } from "@/data/problems";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { ChevronRight, BookOpen } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export const Route = createFileRoute("/sheets")({
  component: SheetsPage,
});

function SheetsPage() {
  const [solvedIds] = useLocalStorage<number[]>("dsa-solved", []);

  return (
    <div className="pb-24">
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border px-4 pt-4 pb-3">
        <h1 className="text-xl font-bold text-foreground tracking-tight">Problem Sheets</h1>
        <p className="text-xs text-muted-foreground mt-0.5">Curated problem sets for focused practice</p>
      </div>

      <div className="px-4 pt-4 space-y-3">
        {sheets.map((sheet, i) => {
          const sheetProblems = sheet.problemIds.map(id => problems.find(p => p.id === id)).filter(Boolean);
          const solved = sheetProblems.filter(p => p && solvedIds.includes(p.id)).length;
          const total = sheetProblems.length;
          const pct = total > 0 ? Math.round((solved / total) * 100) : 0;

          return (
            <div
              key={sheet.name}
              className="rounded-xl border border-border bg-card p-4 transition-all duration-200 hover:bg-surface-hover active-press tap-highlight animate-slide-up"
              style={{ animationDelay: `${i * 50}ms`, animationFillMode: "both" }}
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-lg">
                  {sheet.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-sm text-card-foreground">{sheet.name}</h3>
                    <ChevronRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{sheet.description}</p>
                  <div className="mt-3 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">{solved}/{total} solved</span>
                      <span className="font-semibold text-foreground">{pct}%</span>
                    </div>
                    <Progress value={pct} className="h-1.5" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="px-4 pt-6">
        <div className="rounded-xl border border-dashed border-border bg-surface p-6 text-center">
          <BookOpen className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
          <p className="text-sm font-medium text-foreground">More sheets coming soon</p>
          <p className="text-xs text-muted-foreground mt-1">Stay tuned for more curated problem sets</p>
        </div>
      </div>
    </div>
  );
}
