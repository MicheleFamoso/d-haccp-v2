import { useEffect, useState } from "react";
import Button from "../atoms/Button";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

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
      {/* <Button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        text={theme === "light" ? <SunIcon className="size-7"/> : <MoonIcon className="size-7"/>}
      ></Button> */}

      <div className=" flex gap-1 w-fit rounded-3xl p-0.5 bg-icon-gray-light/30 shadow-md">
        <button
          className={`dark:text-text-secondary-dark  text-text-secondary-light py-1 md:px-4 px-3 rounded-4xl  cursor-pointer hover:bg-bg-list-light dark:hover:bg-icon-gray-dark   ${
            theme === "light"
              ? " bg-btn-light  dark:bg-btn-dark shadow-xl "
              : ""
          } `}
          onClick={() => setTheme("light")}
        >
          <SunIcon className="size-5 " />
        </button>
        <button
          className={` dark:text-text-secondary-dark  text-text-secondary-light py-1 md:px-4 px-3 rounded-4xl  cursor-pointer hover:bg-bg-list-light hover:shadow-2xl dark:hover:bg-icon-gray-dark   ${
            theme === "dark" ? " bg-btn-light dark:bg-bg-list-dark " : ""
          } `}
          onClick={() => setTheme("dark")}
        >
          <MoonIcon className="size-5" />
        </button>
      </div>
    </>
  );
};

export default ThemeToggle;
