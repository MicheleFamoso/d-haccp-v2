import { useState } from "react";
import { useSelector } from "react-redux";
import FormField from "../../molecules/FormField";
import ConformToggle from "../../molecules/ConformToggle";
import FormSelect from "../../molecules/FormSelect";
import Button from "../../atoms/Button";
import { useDispatch } from "react-redux";
const AddForniture = ({ onClose }) => {
  const fornitori = useSelector((state) => state.fornitori);
  const dispatch = useDispatch();
  const [fornitura, setFornitura] = useState({
    data: new Date().toISOString().split("T")[0],
    fornitoreId: "",
    prodotto: "",
    conformita: "CONFORME",
    lotto: "",
  });

  const Handlefornitori = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:8080/forniture", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(fornitura),
      });
      if (!response.ok) throw new Error("Fornitore non aggiunto");
      setFornitura({
        data: new Date().toISOString().split("T")[0],
        fornitoreId: "",
        prodotto: "",
        conformita: "CONFORME",
        lotto: "",
      });
      dispatch({
        type: "AGGIORNA",
        key: "forniture",
        payload: Date.now(),
      });
      onClose();
      console.log(fornitura);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="font-h text-xl font-bold text-text-secondary-light dark:text-text-primary-dark text-center text-shadow-xs mb-4">
        Aggiungi Fornitura
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          Handlefornitori();
        }}
        className="px-2"
      >
        <FormField
          text={"Data"}
          type={"date"}
          value={fornitura.data}
          onChange={(e) => setFornitura({ ...fornitura, data: e.target.value })}
        />
        <FormSelect
          text={"Fornitore"}
          fornitura={fornitura}
          fornitori={fornitori}
          onChange={(e) =>
            setFornitura({
              ...fornitura,
              fornitoreId: e.target.value,
            })
          }
        />
        <FormField
          text={"Prodotto"}
          value={fornitura.prodotto}
          onChange={(e) =>
            setFornitura({ ...fornitura, prodotto: e.target.value })
          }
        />
        <div className="flex justify-between gap-8">
          <div className="">
            <FormField
              text={"Lotto"}
              value={fornitura.lotto}
              onChange={(e) =>
                setFornitura({ ...fornitura, lotto: e.target.value })
              }
            />
          </div>
          <div className="flex justify-end">
            <div className="w-fit">
              <p className="  dark:text-text-secondary-dark text-text-secondary-light font-h text-md mb-1">
                Conformita
              </p>
              <ConformToggle
                value={fornitura.conformita}
                onChange={(val) => {
                  setFornitura({ ...fornitura, conformita: val });
                }}
              />
            </div>
          </div>
        </div>
        <Button type={"submit"} text={"aggiungi"} className="w-full mt-4" />
      </form>
    </div>
  );
};

export default AddForniture;
