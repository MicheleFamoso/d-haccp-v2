import { useState } from "react";
import ConformToggle from "../molecules/ConformToggle";
import FormField from "../molecules/FormField";
import Button from "../atoms/Button";

const AddInfestanti = () => {
  const [infestanti, setInfestanti] = useState({
    data: new Date().toISOString().split("T")[0],
    roditori: "CONFORME",
    insettiStriscianti: "CONFORME",
    insettiVolanti: "CONFORME",
  });

  const handleAddInfestanti = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:8080/infestanti", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(infestanti),
      });
      if (!response.ok) throw new Error("Errore nella fetch!");
      setInfestanti({
        data: new Date().toISOString().split("T")[0],
        roditori: "CONFORME",
        insettiStriscianti: "CONFORME",
        insettiVolanti: "CONFORME",
      });

      console.log();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="font-h text-xl font-bold text-text-secondary-light dark:text-text-primary-dark text-center text-shadow-xs mb-4">
        Aggiungi controllo infestanti
      </h1>
      <form
        onSubmit={(e) => {
          e.defaultPrevented();
          handleAddInfestanti();
        }}
      >
        <div className="flex justify-between mt-4">
          <div>
            <FormField
              text={"Data"}
              type={"date"}
              value={infestanti.data}
              onChange={(e) =>
                setInfestanti({ ...infestanti, data: e.target.value })
              }
            />
          </div>
          <div>
            <p className="  dark:text-text-secondary-dark text-text-secondary-light font-h text-md mb-1">
              Conf. Insetti striscianti
            </p>
            <div className="flex justify-end">
              <div className="w-fit">
                <ConformToggle
                  value={infestanti.insettiStriscianti}
                  onChange={(val) => {
                    setInfestanti({ ...infestanti, insettiStriscianti: val });
                  }}
                />
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="flex justify-between">
          <div>
            <p className=" dark:text-text-secondary-dark text-text-secondary-light font-h text-md mb-1">
              Conf. roditori
            </p>
            <div className="w-fit">
              <ConformToggle
                value={infestanti.roditori}
                onChange={(val) => {
                  setInfestanti({ ...infestanti, roditori: val });
                }}
              />
            </div>
          </div>
          <div>
            <p className="  dark:text-text-secondary-dark text-text-secondary-light font-h text-md mb-1">
              Conf. Insetti volanti
            </p>
            <div className="flex justify-end">
              <div className="w-fit">
                <ConformToggle
                  value={infestanti.insettiVolanti}
                  onChange={(val) => {
                    setInfestanti({ ...infestanti, insettiVolanti: val });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <Button type={"submit"} text={"aggiungi"} className="w-full mt-4" />
      </form>
    </div>
  );
};
export default AddInfestanti;
