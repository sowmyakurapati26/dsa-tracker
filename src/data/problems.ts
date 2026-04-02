export type Difficulty = "Easy" | "Medium" | "Hard";
export type Category = "Arrays" | "Strings" | "Linked List" | "Trees" | "Graphs" | "DP" | "Stack" | "Queue" | "Sorting" | "Binary Search" | "Recursion" | "Hashing";

export interface Problem {
  id: number;
  title: string;
  difficulty: Difficulty;
  category: Category;
  tags: string[];
}

export const problems: Problem[] = [
  { id: 1, title: "Two Sum", difficulty: "Easy", category: "Arrays", tags: ["Hash Map"] },
  { id: 2, title: "Best Time to Buy and Sell Stock", difficulty: "Easy", category: "Arrays", tags: ["Sliding Window"] },
  { id: 3, title: "Contains Duplicate", difficulty: "Easy", category: "Arrays", tags: ["Hash Set"] },
  { id: 4, title: "Maximum Subarray", difficulty: "Medium", category: "Arrays", tags: ["Kadane's"] },
  { id: 5, title: "Product of Array Except Self", difficulty: "Medium", category: "Arrays", tags: ["Prefix Sum"] },
  { id: 6, title: "3Sum", difficulty: "Medium", category: "Arrays", tags: ["Two Pointers"] },
  { id: 7, title: "Container With Most Water", difficulty: "Medium", category: "Arrays", tags: ["Two Pointers"] },
  { id: 8, title: "Trapping Rain Water", difficulty: "Hard", category: "Arrays", tags: ["Stack", "Two Pointers"] },
  { id: 9, title: "Valid Parentheses", difficulty: "Easy", category: "Stack", tags: ["Stack"] },
  { id: 10, title: "Merge Two Sorted Lists", difficulty: "Easy", category: "Linked List", tags: ["Recursion"] },
  { id: 11, title: "Reverse Linked List", difficulty: "Easy", category: "Linked List", tags: ["Iterative"] },
  { id: 12, title: "Linked List Cycle", difficulty: "Easy", category: "Linked List", tags: ["Fast & Slow"] },
  { id: 13, title: "Remove Nth Node From End", difficulty: "Medium", category: "Linked List", tags: ["Two Pointers"] },
  { id: 14, title: "Merge K Sorted Lists", difficulty: "Hard", category: "Linked List", tags: ["Heap"] },
  { id: 15, title: "Valid Anagram", difficulty: "Easy", category: "Strings", tags: ["Hash Map"] },
  { id: 16, title: "Longest Substring Without Repeating", difficulty: "Medium", category: "Strings", tags: ["Sliding Window"] },
  { id: 17, title: "Longest Palindromic Substring", difficulty: "Medium", category: "Strings", tags: ["Expand Center"] },
  { id: 18, title: "Group Anagrams", difficulty: "Medium", category: "Strings", tags: ["Hash Map"] },
  { id: 19, title: "Minimum Window Substring", difficulty: "Hard", category: "Strings", tags: ["Sliding Window"] },
  { id: 20, title: "Binary Search", difficulty: "Easy", category: "Binary Search", tags: ["Divide & Conquer"] },
  { id: 21, title: "Search in Rotated Sorted Array", difficulty: "Medium", category: "Binary Search", tags: ["Binary Search"] },
  { id: 22, title: "Find Minimum in Rotated Array", difficulty: "Medium", category: "Binary Search", tags: ["Binary Search"] },
  { id: 23, title: "Invert Binary Tree", difficulty: "Easy", category: "Trees", tags: ["DFS"] },
  { id: 24, title: "Maximum Depth of Binary Tree", difficulty: "Easy", category: "Trees", tags: ["DFS"] },
  { id: 25, title: "Same Tree", difficulty: "Easy", category: "Trees", tags: ["DFS"] },
  { id: 26, title: "Binary Tree Level Order Traversal", difficulty: "Medium", category: "Trees", tags: ["BFS"] },
  { id: 27, title: "Validate BST", difficulty: "Medium", category: "Trees", tags: ["DFS"] },
  { id: 28, title: "Lowest Common Ancestor", difficulty: "Medium", category: "Trees", tags: ["DFS"] },
  { id: 29, title: "Serialize and Deserialize Binary Tree", difficulty: "Hard", category: "Trees", tags: ["BFS", "DFS"] },
  { id: 30, title: "Number of Islands", difficulty: "Medium", category: "Graphs", tags: ["BFS", "DFS"] },
  { id: 31, title: "Clone Graph", difficulty: "Medium", category: "Graphs", tags: ["BFS", "Hash Map"] },
  { id: 32, title: "Course Schedule", difficulty: "Medium", category: "Graphs", tags: ["Topological Sort"] },
  { id: 33, title: "Pacific Atlantic Water Flow", difficulty: "Medium", category: "Graphs", tags: ["DFS"] },
  { id: 34, title: "Word Ladder", difficulty: "Hard", category: "Graphs", tags: ["BFS"] },
  { id: 35, title: "Climbing Stairs", difficulty: "Easy", category: "DP", tags: ["Fibonacci"] },
  { id: 36, title: "House Robber", difficulty: "Medium", category: "DP", tags: ["Tabulation"] },
  { id: 37, title: "Coin Change", difficulty: "Medium", category: "DP", tags: ["Bottom-Up"] },
  { id: 38, title: "Longest Increasing Subsequence", difficulty: "Medium", category: "DP", tags: ["Binary Search"] },
  { id: 39, title: "Word Break", difficulty: "Medium", category: "DP", tags: ["Memoization"] },
  { id: 40, title: "Edit Distance", difficulty: "Hard", category: "DP", tags: ["2D DP"] },
  { id: 41, title: "Merge Sort", difficulty: "Medium", category: "Sorting", tags: ["Divide & Conquer"] },
  { id: 42, title: "Quick Sort", difficulty: "Medium", category: "Sorting", tags: ["Partition"] },
  { id: 43, title: "Kth Largest Element", difficulty: "Medium", category: "Sorting", tags: ["Heap", "Quick Select"] },
  { id: 44, title: "Implement Queue using Stacks", difficulty: "Easy", category: "Queue", tags: ["Stack"] },
  { id: 45, title: "Fibonacci Number", difficulty: "Easy", category: "Recursion", tags: ["Memoization"] },
  { id: 46, title: "Power of Two", difficulty: "Easy", category: "Recursion", tags: ["Bit Manipulation"] },
  { id: 47, title: "Subsets", difficulty: "Medium", category: "Recursion", tags: ["Backtracking"] },
  { id: 48, title: "Permutations", difficulty: "Medium", category: "Recursion", tags: ["Backtracking"] },
  { id: 49, title: "Two Sum (Hash Map)", difficulty: "Easy", category: "Hashing", tags: ["Hash Map"] },
  { id: 50, title: "First Non-Repeating Character", difficulty: "Easy", category: "Hashing", tags: ["Hash Map"] },
];

export const categories: Category[] = [
  "Arrays", "Strings", "Linked List", "Trees", "Graphs", "DP",
  "Stack", "Queue", "Sorting", "Binary Search", "Recursion", "Hashing"
];

export const sheets = [
  { name: "SDE Sheet", description: "Top 50 DSA problems for interviews", icon: "🔥", problemIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 16, 20, 23, 24, 30, 35, 36] },
  { name: "Blind 75", description: "Must-do 75 LeetCode problems", icon: "👁️", problemIds: [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 15, 16, 17, 20, 21, 23, 24, 25, 26, 27, 30, 31, 32, 35, 36, 37, 38, 39] },
  { name: "Striver's A2Z", description: "Complete DSA roadmap", icon: "🗺️", problemIds: problems.map(p => p.id) },
  { name: "Arrays & Strings", description: "Foundation problems", icon: "📝", problemIds: problems.filter(p => p.category === "Arrays" || p.category === "Strings").map(p => p.id) },
  { name: "Trees & Graphs", description: "Advanced data structures", icon: "🌳", problemIds: problems.filter(p => p.category === "Trees" || p.category === "Graphs").map(p => p.id) },
  { name: "Dynamic Programming", description: "Optimization problems", icon: "🧩", problemIds: problems.filter(p => p.category === "DP").map(p => p.id) },
];
