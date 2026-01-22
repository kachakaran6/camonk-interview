import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
const Header = () => {
    const location = useLocation();
    return (_jsxs("header", { className: "h-14 border-b flex items-center justify-between px-6 bg-white dark:bg-slate-800", children: [_jsx(Link, { to: "/", className: "text-lg font-bold", children: "CA Monk Blogs" }), _jsxs("nav", { className: "flex items-center gap-2", children: [_jsx(ThemeToggle, {}), location.pathname !== "/create" && (_jsx(Link, { to: "/create", children: _jsx(Button, { size: "sm", children: "+ New Blog" }) }))] })] }));
};
export default Header;
