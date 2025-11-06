import Label from "../atoms/Label";

const FormSelect = ({ fornitura, fornitori, onChange, text }) => {
  return (
    <div className="flex flex-col gap-1 mb-4">
      <Label text={text} />
      <div>
        <select
          value={fornitura.fornitoreId}
          onChange={onChange}
          className=" bg-btn-light/60  font-p  dark:text-text-secondary-dark text-text-secondary-light dark:bg-btn-dark/80 w-full backdrop-blur-xs py-1 px-3 rounded-4xl shadow-md focus:outline-2 focus:outline-btn-light dark:focus:outline-btn-dark"
        >
          <option value="">Seleziona fornitore</option>
          {fornitori.map((f) => (
            <option key={f.id} value={f.id}>
              {f.nomeFornitore}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FormSelect;
