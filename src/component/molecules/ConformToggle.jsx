import { XMarkIcon, CheckIcon } from "@heroicons/react/24/outline";

const ConformToggle = ({ value = "CONFORME", onChange, label }) => {
  return (
    <div>
      <label className="dark:text-text-secondary-dark text-text-secondary-light font-h text-md ">
        {label}
      </label>
      <div
        className={`flex gap-1 w-full rounded-3xl p-0.5  shadow-md ${
          value === "CONFORME"
            ? "bg-green-300 dark:bg-green-800"
            : "dark:bg-accent-red bg-red-400"
        }`}
      >
        <button
          type="button"
          role="switch"
          aria-checked={value === "CONFORME"}
          onClick={() => onChange("CONFORME")}
          className={`dark:text-text-secondary-dark  text-text-secondary-light py-1 md:px-4 px-3 rounded-4xl  cursor-pointer hover:bg-green-300 dark:hover:bg-green-800   ${
            value === "CONFORME"
              ? " bg-btn-light dark:bg-btn-dark shadow-xl "
              : ""
          } `}
        >
          {value === "CONFORME" && <CheckIcon className="size-5" />}
        </button>
        <button
          type="button"
          role="switch"
          aria-checked={value === "NON_CONFORME"}
          onClick={() => onChange("NON_CONFORME")}
          className={`dark:text-text-secondary-dark  text-text-secondary-light py-1 md:px-4 px-3 rounded-4xl  cursor-pointer hover:bg-red-300 dark:hover:bg-red-800   ${
            value === "NON_CONFORME"
              ? " bg-btn-light  dark:bg-btn-dark shadow-xl "
              : ""
          } `}
        >
          {value === "NON_CONFORME" && <XMarkIcon className="size-5" />}
        </button>
      </div>
    </div>
  );
};

export default ConformToggle;
