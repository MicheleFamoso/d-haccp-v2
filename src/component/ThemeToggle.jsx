import { useEffect, useState } from "react";
import Button from "./atoms/Button";
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

      <div className="bg-bg-light flex gap-6  rounded-3xl py-1 dark:bg-bg-dark w-fit">
       
        <button
        className={`dark:text-text-secondary-dark  text-text-secondary-light py-1 px-6 rounded-4xl  cursor-pointer hover:bg-bg-list-light dark:hover:bg-icon-gray-dark   ${theme === "light"? " bg-btn-light  dark:bg-btn-dark shadow-xl ":""} `}
        onClick={()=>setTheme("light")}
        >
          <SunIcon className="size-7 " />
        </button>
        <button
         className={` dark:text-text-secondary-dark  text-text-secondary-light py-1 px-6 rounded-4xl  cursor-pointer hover:bg-btn-light dark:hover:bg-icon-gray-dark   ${theme === "dark"? " bg-btn-light dark:bg-btn-dark " : ""} `}
     onClick={()=>setTheme("dark")}
        >
          <MoonIcon className="size-7" />
        </button>
      </div>
    </>
  );
};

export default ThemeToggle;
