import { useState } from "react";
import FormField from "./FormField";
import Button from "../atoms/Button";

const EditUser = ({
  idUtente,
  nome,
  setNome,
  cognome,
  setCognome,
  username,
  setUsername,
  email,
  setEmail,
  password,
  setpassword,
  setShowForm,
  getProfilo,
}) => {
  const [updating, setUpdating] = useState(false);

  const modificaUtente = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.log("Token mancante, impossibile modificare l'utente.");
      return;
    }

    setUpdating(true);

    fetch(`http://localhost:8080/admin/${idUtente}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        nome,
        cognome,
        username,
        email,
        password,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Errore nella modifica dell'utente.");
        return res.json();
      })
      .then(() => {
        setShowForm(false);
        getProfilo();
      })
      .catch((err) => console.error(err))
      .finally(() => setUpdating(false));
  };

  return (
    <div className="fixed inset-0 bg-black/15 backdrop-blur-xs bg-opacity-40 flex justify-center z-50">
      <form
        className="flex flex-col bg-section-light dark:bg-section-dark pb-8 pt-3 px-5 rounded-4xl mr-20 w-fit mt-15 absolute"
        onSubmit={(e) => {
          e.preventDefault();
          modificaUtente();
        }}
      >
        <h2 className="font-h text-center text-2xl text-text-primary-light dark:text-text-primary-dark">
          Modifica profilo
        </h2>
        <FormField
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          id="nome"
          text="nome"
        />
        <FormField
          value={cognome}
          onChange={(e) => setCognome(e.target.value)}
          id="cognome"
          text="cognome"
        />
        <FormField
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="username"
          text="user name"
        />
        <FormField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          text="email"
          type="email"
        />
        <FormField
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          id="password"
          text="password"
          type="password"
        />
        <div className="flex gap-2 mt-4">
          <Button
            text={updating ? "Salvataggio..." : "Salva modifiche"}
            variant="accentText"
            type="submit"
            disabled={updating}
          />
          <Button
            text="Chiudi"
            variant="secondary"
            onClick={() => setShowForm(false)}
            type="button"
          />
        </div>
      </form>
    </div>
  );
};

export default EditUser;
