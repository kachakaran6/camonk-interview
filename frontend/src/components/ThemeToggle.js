import { jsx as _jsx } from "react/jsx-runtime";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
const ThemeToggle = () => {
    const [dark, setDark] = useState(false);
    useEffect(() => {
        const root = window.document.documentElement;
        if (dark) {
            root.classList.add("dark");
        }
        else {
            root.classList.remove("dark");
        }
    }, [dark]);
    return (_jsx(Button, { variant: "ghost", size: "icon", onClick: () => setDark(!dark), children: dark ? _jsx(Sun, { size: 18 }) : _jsx(Moon, { size: 18 }) }));
};
export default ThemeToggle;
