import { Link, useLocation } from "@tanstack/react-router";
import { Home, BookOpen, BarChart3, User } from "lucide-react";

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/sheets", icon: BookOpen, label: "Sheets" },
  { to: "/progress", icon: BarChart3, label: "Progress" },
  { to: "/profile", icon: User, label: "Profile" },
] as const;

export function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-nav backdrop-blur-xl safe-bottom">
      <div className="mx-auto flex max-w-lg items-center justify-around px-2 py-1">
        {navItems.map(({ to, icon: Icon, label }) => {
          const isActive = to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);
          return (
            <Link
              key={to}
              to={to}
              className={`flex flex-col items-center gap-0.5 px-3 py-2 text-xs transition-all duration-200 active-press tap-highlight ${
                isActive ? "text-nav-active" : "text-muted-foreground"
              }`}
            >
              <Icon className={`h-5 w-5 transition-transform duration-200 ${isActive ? "scale-110" : ""}`} strokeWidth={isActive ? 2.5 : 1.8} />
              <span className={`font-medium ${isActive ? "text-[11px]" : "text-[10px]"}`}>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
