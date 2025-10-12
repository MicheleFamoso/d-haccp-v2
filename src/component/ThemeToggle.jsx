import { useEffect, useState } from "react";
import Button from "./atoms/Button";
import { MoonIcon,SunIcon } from "@heroicons/react/24/outline";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        text={theme === "light" ? <SunIcon className="size-7"/> : <MoonIcon className="size-7"/>}
      ></Button>
    </>
  );
};

export default ThemeToggle;
