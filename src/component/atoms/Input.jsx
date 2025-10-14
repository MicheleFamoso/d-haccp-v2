import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const Input = ({ id, value, onChange, type = "text" }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div className="relative ">
      <input
        type={inputType}
        id={id}
        className="bg-btn-light/60 font-p dark:text-text-secondary-dark text-text-secondary-light dark:bg-btn-dark/80 w-full backdrop-blur-xs py-1 px-3 rounded-4xl shadow-md focus:outline-2  focus:outline-btn-light dark:focus:outline-btn-dark "
        value={value}
        onChange={onChange}
      />
      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1"
        >
          {showPassword ? (
            <EyeIcon className="size-6 cursor-pointer dark:text-text-secondary-dark  text-text-secondary-light" />
          ) : (
            <EyeSlashIcon className="size-6 cursor-pointer dark:text-text-secondary-dark  text-text-secondary-light" />
          )}
        </button>
      )}
    </div>
  );
};
export default Input;
