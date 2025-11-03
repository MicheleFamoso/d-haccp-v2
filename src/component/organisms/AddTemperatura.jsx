import { useState } from "react";
import FormField from "../molecules/FormField";
import RangeFrigo from "../molecules/RangeFrigo";
import ConformToggle from "../molecules/ConformToggle";
import Button from "../atoms/Button";
import { useDispatch } from "react-redux";

const AddTemperatura = () => {
  const dispatch = useDispatch();

  const [controllo, setControllo] = useState({
    data: new Date().toISOString().split("T")[0],
    frigo: "",
    conformita: "CONFORME",
    temperatura: "0",
  });

  const handleAddTemperature = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:8080/temperature", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(controllo),
      });
      if (!response.ok) throw new Error("Errore nella fetch!");
      setControllo({
        data: new Date().toISOString().split("T")[0],
        frigo: "",
        conformita: "CONFORME",
        temperatura: "0",
      });
      dispatch({
        type: "AGGIORNA",
        payload: Date.now(),
      });
      console.log(controllo);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="font-h text-xl font-bold text-text-secondary-light dark:text-text-primary-dark text-center text-shadow-xs mb-4">
        Aggiungi temperatura
      </h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTemperature();
        }}
        className="px-2"
      >
        {" "}
        <div className="flex justify-between">
          <div className="w-6/12">
            <FormField
              text={"Frigo"}
              type={"number"}
              value={controllo.frigo}
              onChange={(e) =>
                setControllo({ ...controllo, frigo: e.target.value })
              }
            />
          </div>
          <div>
            <ConformToggle
              value={controllo.conformita}
              onChange={(val) =>
                setControllo({ ...controllo, conformita: val })
              }
            />
          </div>
        </div>
        <RangeFrigo
          value={controllo.temperatura}
          onChange={(e) =>
            setControllo({ ...controllo, temperatura: e.target.value })
          }
        />
        <FormField
          text={"Data"}
          type={"date"}
          value={controllo.data}
          onChange={(e) => setControllo({ ...controllo, data: e.target.value })}
        />
        <Button type={"submit"} text={"aggiungi"} className="w-full" />
      </form>
    </div>
  );
};
export default AddTemperatura;
