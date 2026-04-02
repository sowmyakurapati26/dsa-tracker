import { createFileRoute } from "@tanstack/react-router";
import { useTheme } from "@/hooks/use-theme";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { Moon, Sun, RotateCcw, Code2 } from "lucide-react";

export const Route = createFileRoute("/profile")({
  component: ProfilePage,
});

function ProfilePage() {
  const { isDark, toggle } = useTheme();
  const [solvedIds, setSolvedIds] = useLocalStorage<number[]>("dsa-solved", []);

  const handleReset = () => {
    if (confirm("Reset all progress? This cannot be undone.")) {
      setSolvedIds([]);
    }
  };

  return (
    <div className="pb-24">
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-xl border-b border-border px-4 pt-4 pb-3">
        <h1 className="text-xl font-bold text-foreground tracking-tight">Profile</h1>
        <p className="text-xs text-muted-foreground mt-0.5">Settings & preferences</p>
      </div>

      <div className="flex flex-col items-center pt-8 pb-6 animate-fade-in">
        <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
          <Code2 className="h-10 w-10 text-primary" />
        </div>
        <h2 className="text-lg font-bold text-foreground mt-3">DSA Learner</h2>
        <p className="text-xs text-muted-foreground">{solvedIds.length} problems solved</p>
      </div>

      <div className="px-4 space-y-2">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Preferences</h3>

        <button
          onClick={toggle}
          className="w-full flex items-center justify-between rounded-xl border border-border bg-card p-4 active-press tap-highlight transition-all hover:bg-surface-hover"
        >
          <div className="flex items-center gap-3">
            {isDark ? <Moon className="h-5 w-5 text-primary" /> : <Sun className="h-5 w-5 text-medium" />}
            <div className="text-left">
              <p className="text-sm font-medium text-card-foreground">Appearance</p>
              <p className="text-xs text-muted-foreground">{isDark ? "Dark mode" : "Light mode"}</p>
            </div>
          </div>
          <div className={`h-6 w-11 rounded-full transition-colors duration-300 flex items-center px-0.5 ${isDark ? "bg-primary" : "bg-border"}`}>
            <div className={`h-5 w-5 rounded-full bg-card shadow-sm transition-transform duration-300 ${isDark ? "translate-x-5" : "translate-x-0"}`} />
          </div>
        </button>

        <button
          onClick={handleReset}
          className="w-full flex items-center gap-3 rounded-xl border border-border bg-card p-4 active-press tap-highlight transition-all hover:bg-surface-hover"
        >
          <RotateCcw className="h-5 w-5 text-destructive" />
          <div className="text-left">
            <p className="text-sm font-medium text-card-foreground">Reset Progress</p>
            <p className="text-xs text-muted-foreground">Clear all solved problems</p>
          </div>
        </button>
      </div>

      <div className="px-4 pt-6">
        <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">About</h3>
        <div className="rounded-xl border border-border bg-card p-4">
          <p className="text-sm font-medium text-card-foreground">DSA Tracker v1.0</p>
          <p className="text-xs text-muted-foreground mt-1">
            A mobile-first platform to track your Data Structures & Algorithms learning journey.
          </p>
        </div>
      </div>
    </div>
  );
}
