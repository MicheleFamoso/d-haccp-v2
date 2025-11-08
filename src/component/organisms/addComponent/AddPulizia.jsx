import { useState } from "react";
import FormField from "../../molecules/FormField";
import Button from "../../atoms/Button";
import FormLabel from "../../molecules/FormLabel";
import { useDispatch } from "react-redux";
const AddPulizia = ({ onClose }) => {
  const [pulizia, setPulizia] = useState({
    oggetto: "",
    detergente: "",
    attrezzatureUtilizzate: "",
    frequenza: "",
  });
  const dispatch = useDispatch();
  const handleAddPulizia = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:8080/pulizie", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(pulizia),
      });
      if (!response.ok) throw new Error("Errore nella fetch!");
      setPulizia({
        oggetto: "",
        detergente: "",
        attrezzatureUtilizzate: "",
        frequenza: "",
      });
      dispatch({
        type: "AGGIORNA",
        key: "pulizie",
        payload: Date.now(),
      });
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="font-h text-xl font-bold text-text-secondary-light dark:text-text-primary-dark text-center text-shadow-xs mb-4">
        Aggiungi Pulizia
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddPulizia();
        }}
        className="px-2"
      >
        <FormField
          required
          text={"Oggetto da pulire"}
          value={pulizia.oggetto}
          onChange={(e) => setPulizia({ ...pulizia, oggetto: e.target.value })}
        />
        <FormField
          required
          text={"Detergente utilizzato"}
          value={pulizia.detergente}
          onChange={(e) =>
            setPulizia({ ...pulizia, detergente: e.target.value })
          }
        />
        <FormField
          required
          text={"Attrezzature utilizzate per pulire"}
          value={pulizia.attrezzatureUtilizzate}
          onChange={(e) =>
            setPulizia({
              ...pulizia,
              attrezzatureUtilizzate: e.target.value,
            })
          }
        />
        <FormLabel
          required
          text={"Frequenza sanificazione"}
          onChange={(e) =>
            setPulizia({
              ...pulizia,
              frequenza: e.target.value,
            })
          }
          value={pulizia.frequenza}
          v1={"Giornaliera"}
          v2={"Settimale"}
          v3={"Mensile"}
        />

        <Button type={"submit"} text={"aggiungi"} className="w-full mt-6" />
      </form>
    </div>
  );
};
export default AddPulizia;
