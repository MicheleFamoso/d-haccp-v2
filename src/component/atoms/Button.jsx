const VARIANTS = {
  primary: " dark:text-text-secondary-dark  text-text-secondary-light",
  secondary: " dark:text-accent-red  text-accent-red",
  accent:
    "dark:text-accent-blue-light text-accent-blue-medium text-shadow-xl text-xl ",
};

const Button = ({ text, variant = "primary", className = "", onClick }) => {
  const variantClasses = VARIANTS[variant] || VARIANTS.primary;
  return (
    <button
      onClick={onClick}
      className={`${variantClasses} ${className} hover:bg-btn-light backdrop-blur-xs text-shadow-md bg-bg-list-light/60 font-h font-bold dark:bg-btn-dark  py-1 px-4 rounded-4xl  cursor-pointer  dark:hover:bg-icon-gray-dark dark:shadow-xs shadow-xl`}
    >
      {text}
    </button>
  );
};

export default Button;
