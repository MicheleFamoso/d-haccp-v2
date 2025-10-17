import { useState, useEffect, useRef } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import Button from "../atoms/Button";
import LogOut from "./LogOut";
import EditUser from "./EditUser";

const User = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const popoverRef = useRef(null);
  const [utenti, setUtenti] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [idUtente, setIdUtente] = useState("");

  const getProfilo = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.warn("Nessun token trovato, fetch annullata.");
      setError("Nessun token trovato, impossibile caricare il profilo.");
      return;
    }

    setLoading(true);
    setError(null);

    fetch("http://localhost:8080/admin/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok)
          throw new Error(`Errore nella risposta: ${res.statusText}`);
        return res.json();
      })
      .then((data) => {
        setUtenti([data]);
        setIdUtente(data.id);
        setNome(data.nome);
        setCognome(data.cognome);
        setUsername(data.username);
        setEmail(data.email);
      })
      .catch((err) => {
        console.error("Errore nella fetch profilo:", err);
        setError("Errore nel caricamento del profilo.");
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getProfilo();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setClicked(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const open = hovered || clicked;

  return (
    <div
      className="relative"
      ref={popoverRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Button
        onClick={() => setClicked(!clicked)}
        text={<UserIcon className="size-5" />}
      />

      <div
        className={`absolute -left-15 mt-2 w-64 bg-section-light dark:bg-section-dark shadow-sm rounded-3xl p-4 z-50 transform transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-2">
          {utenti.map((utente) => (
            <div key={utente.id}>
              <h3 className="text-text-primary-light font-medium dark:text-text-primary-dark text-xl font-h">
                Ciao {utente.username}
              </h3>
              <p className="text-text-secondary-light dark:text-text-secondary-dark font-p">
                {utente.email}
              </p>
              <div className="flex gap-3 mt-2">
                <Button
                  text="Modifica"
                  variant="accentText"
                  onClick={() => setShowForm(true)}
                />
                <LogOut />
              </div>
            </div>
          ))}
        </div>
      </div>

      {showForm && (
        <EditUser
          idUtente={idUtente}
          nome={nome}
          setNome={setNome}
          cognome={cognome}
          setCognome={setCognome}
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          password={password}
          setpassword={setpassword}
          setShowForm={setShowForm}
          getProfilo={getProfilo}
        />
      )}
    </div>
  );
};

export default User;
