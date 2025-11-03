import Label from "../atoms/Label";

const FormLabel = ({ id, text, value, onChange, v1, v2, v3 }) => {
  return (
    <div>
      <Label htmlFor={id} text={text} />
      <select
        value={value}
        onChange={onChange}
        className="bg-btn-light/60 font-p mt-1  dark:text-text-secondary-dark text-text-secondary-light dark:bg-btn-dark/80 w-full backdrop-blur-xs py-1 px-3 rounded-4xl shadow-md focus:outline-2  focus:outline-btn-light dark:focus:outline-btn-dark "
      >
        <option value="">Seleziona</option>
        <option value={v1.toLowerCase()}>{v1}</option>
        <option value={v2.toLowerCase()}>{v2}</option>
        <option value={v3.toLowerCase()}>{v3}</option>
      </select>
    </div>
  );
};
export default FormLabel;
