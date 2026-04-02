import { useState, useMemo, useCallback } from "react";
import { problems, type Difficulty, type Category } from "@/data/problems";
import { useLocalStorage } from "./use-local-storage";

export function useProblems() {
  const [solvedIds, setSolvedIds, isLoaded] = useLocalStorage<number[]>("dsa-solved", []);
  const [recentIds, setRecentIds] = useLocalStorage<number[]>("dsa-recent", []);
  const [search, setSearch] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState<Difficulty | "All">("All");
  const [categoryFilter, setCategoryFilter] = useState<Category | "All">("All");

  const toggleSolved = useCallback((id: number) => {
    setSolvedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  }, [setSolvedIds]);

  const addRecent = useCallback((id: number) => {
    setRecentIds(prev => [id, ...prev.filter(x => x !== id)].slice(0, 10));
  }, [setRecentIds]);

  const filtered = useMemo(() => {
    return problems.filter(p => {
      if (difficultyFilter !== "All" && p.difficulty !== difficultyFilter) return false;
      if (categoryFilter !== "All" && p.category !== categoryFilter) return false;
      if (search && !p.title.toLowerCase().includes(search.toLowerCase()) && !p.category.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [search, difficultyFilter, categoryFilter]);

  const recentProblems = useMemo(() => {
    return recentIds.map(id => problems.find(p => p.id === id)).filter(Boolean) as typeof problems;
  }, [recentIds]);

  const stats = useMemo(() => {
    const total = problems.length;
    const solved = solvedIds.length;
    const easy = problems.filter(p => p.difficulty === "Easy");
    const medium = problems.filter(p => p.difficulty === "Medium");
    const hard = problems.filter(p => p.difficulty === "Hard");
    return {
      total, solved,
      percentage: total > 0 ? Math.round((solved / total) * 100) : 0,
      easy: { total: easy.length, solved: easy.filter(p => solvedIds.includes(p.id)).length },
      medium: { total: medium.length, solved: medium.filter(p => solvedIds.includes(p.id)).length },
      hard: { total: hard.length, solved: hard.filter(p => solvedIds.includes(p.id)).length },
    };
  }, [solvedIds]);

  return {
    problems: filtered, allProblems: problems, solvedIds, recentProblems, stats,
    search, setSearch, difficultyFilter, setDifficultyFilter,
    categoryFilter, setCategoryFilter, toggleSolved, addRecent, isLoaded,
  };
}
