import { useState } from "react";
import FormField from "../molecules/FormField";
import Button from "../atoms/Button";

const AddFornitori = () => {
  const [fornitore, setFornitore] = useState({
    nomeFornitore: "",
    sede: "",
    telefono: "",
    email: "",
    prodottiForniti: [],
  });

  const handleAddFornitori = async () => {
    const payload = {
      ...fornitore,
      prodottiForniti: fornitore.prodottiForniti
        .split(",")
        .map((p) => p.trim()),
    };
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:8080/fornitori", {
        method: "POST",

        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error();
      setFornitore({
        nomeFornitore: "",
        sede: "",
        telefono: "",
        email: "",
        prodottiForniti: "",
      });
      console.log(fornitore);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1 className="font-h text-xl font-bold text-text-secondary-light dark:text-text-primary-dark text-center text-shadow-xs mb-4">
        Aggiungi Fornitore
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddFornitori();
        }}
      >
        <FormField
          required
          text={"Nome fornitore"}
          value={fornitore.nomeFornitore}
          onChange={(e) =>
            setFornitore({ ...fornitore, nomeFornitore: e.target.value })
          }
        />
        <FormField
          required
          text={"Sede fornitore"}
          value={fornitore.sede}
          onChange={(e) => setFornitore({ ...fornitore, sede: e.target.value })}
        />
        <FormField
          required
          text={"Telefono fornitore"}
          value={fornitore.telefono}
          onChange={(e) =>
            setFornitore({ ...fornitore, telefono: e.target.value })
          }
        />
        <FormField
          required
          text={"Email fornitore"}
          value={fornitore.email}
          onChange={(e) =>
            setFornitore({ ...fornitore, email: e.target.value })
          }
        />
        <FormField
          required
          text={"Prodotti forniti"}
          value={fornitore.prodottiForniti}
          onChange={(e) =>
            setFornitore({ ...fornitore, prodottiForniti: e.target.value })
          }
        />
        <Button type={"submit"} text={"aggiungi"} className="w-full mt-4" />
      </form>
    </div>
  );
};
export default AddFornitori;
