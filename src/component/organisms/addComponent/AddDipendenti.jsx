import { useState } from "react";
import FormField from "../../molecules/FormField";
import Button from "../../atoms/Button";
import { useDispatch } from "react-redux";

const AddDipendenti = ({ onClose }) => {
  const [dipendete, SetDipendente] = useState({
    nome: "",
    cognome: "",
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleDipendenti = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:8080/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(dipendete),
      });
      if (!response.ok)
        throw new Error("Errore neel'aggiuunta di un dipendente ");
      SetDipendente({
        nome: "",
        cognome: "",
        username: "",
        email: "",
        password: "",
      });
      dispatch({
        type: "AGGIORNA",
        key: "dipendenti",
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
        Aggiungi Dipendente
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleDipendenti();
        }}
      >
        <FormField
          text={"Nome"}
          value={dipendete.nome}
          onChange={(e) =>
            SetDipendente({ ...dipendete, nome: e.target.value })
          }
        />
        <FormField
          text={"Cognome"}
          value={dipendete.cognome}
          onChange={(e) =>
            SetDipendente({ ...dipendete, cognome: e.target.value })
          }
        />
        <FormField
          text={"Username"}
          value={dipendete.username}
          onChange={(e) =>
            SetDipendente({ ...dipendete, username: e.target.value })
          }
        />
        <FormField
          text={"Email"}
          type={"email"}
          value={dipendete.email}
          onChange={(e) =>
            SetDipendente({ ...dipendete, email: e.target.value })
          }
        />
        <FormField
          text={"Password"}
          type={"password"}
          value={dipendete.password}
          onChange={(e) =>
            SetDipendente({ ...dipendete, password: e.target.value })
          }
        />
        <Button type={"submit"} text={"aggiungi"} className="w-full mt-4" />
      </form>
    </div>
  );
};
export default AddDipendenti;
