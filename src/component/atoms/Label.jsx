const Label = ({ htmlFor, text }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="dark:text-text-secondary-dark text-text-secondary-light font-h text-md  ml-4"
    >
      {text}
    </label>
  );
};
export default Label;
