import Input from "../atoms/Input";
import Label from "../atoms/Label";

const FormField = ({ id, value, onChange, text, type = "text" }) => {
  return (
    <div className="flex flex-col gap-1 mb-4">
      <Label htmlFor={id} text={text} />
      <Input value={value} onChange={onChange} id={id} type={type} />
    </div>
  );
};

export default FormField;
