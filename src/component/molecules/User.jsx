import { useState } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef } from "react";
import Button from "../atoms/Button";

const User = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const popoverRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setClicked(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const open = hovered || clicked;

  return (
    <div
      className="relative"
      ref={popoverRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Button
        onClick={() => setClicked(!clicked)}
        text={<UserIcon className="size-6 " />}
      />

      <div
        className={`absolute  mt-2 w-64 bg-section-light dark:bg-section-dark shadow-lg rounded-xl p-4 z-50 transform transition-all duration-300
          ${
            open
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
      >
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-gray-800 dark:text-gray-100">
            Michele
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            michele@com
          </span>
        </div>
      </div>
    </div>
  );
};
export default User;
