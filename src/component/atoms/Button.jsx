const VARIANTS = {
  primary:
    " dark:text-text-secondary-dark  text-text-tertiary-light bg-bg-list-light/60  dark:bg-btn-dark hover:bg-btn-light dark:hover:bg-icon-gray-dark",
  secondary:
    " dark:text-accent-red  text-accent-red  bg-bg-list-light/60 dark:bg-btn-dark hover:bg-btn-light dark:hover:bg-icon-gray-dark",
  accent:
    " text-accent-blue-light hover:bg-accent-blue-dark dark:text-accent-blue-dark bg-accent-blue-medium dark:bg-accent-blue-light text-shadow-xl text-xl dark:hover:bg-accent-blue-medium ",
  accentText:
    "dark:text-accent-blue-light  text-accent-blue-medium  bg-bg-list-light/60 dark:bg-btn-dark hover:bg-btn-light dark:hover:bg-icon-gray-dark",
};

const Button = ({ text, variant = "primary", className = "", onClick }) => {
  const variantClasses = VARIANTS[variant] || VARIANTS.primary;
  return (
    <button
      onClick={onClick}
      className={`${variantClasses} ${className}  backdrop-blur-xs   font-h font-bold   py-1 px-4 rounded-4xl  cursor-pointer  dark:shadow-xs shadow-md`}
    >
      {text}
    </button>
  );
};

export default Button;
