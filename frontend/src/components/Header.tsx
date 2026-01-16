import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const location = useLocation();

  return (
    <header className="h-14 border-b flex items-center justify-between px-6 bg-white dark:bg-slate-800">
      <Link to="/" className="text-lg font-bold">
        CA Monk Blogs
      </Link>

      <nav className="flex items-center gap-2">
        <ThemeToggle />
        {location.pathname !== "/create" && (
          <Link to="/create">
            <Button size="sm">+ New Blog</Button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
