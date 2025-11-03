import { useState, useEffect, useRef } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import Button from "../atoms/Button";
import LogOut from "../molecules/LogOut";
import EditUser from "../molecules/EditUser";
import { CircleUser, Mail, SquareUser } from "lucide-react";

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
      <button
        onClick={() => setClicked(!clicked)}
        className="hover:bg-accent-blue-light p-2 rounded-4xl bg-blue-300 shadow-xs cursor-pointer "
      >
        <UserIcon className="size-5 text-text-primary-light  " />
      </button>

      <div
        className={`absolute -left-15 mt-2 w-70 bg-section-light/50 backdrop-blur-md dark:bg-section-dark/80 shadow-xl border-1 border-white dark:border-black rounded-3xl px-4 z-50 transform transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-2">
          {utenti.map((utente) => (
            <div key={utente.id}>
              <div className="flex  gap-3 mt-8 mb-6 items-center">
                <CircleUser
                  size={45}
                  strokeWidth={1}
                  className="bg-accent-blue-medium rounded-full text-white"
                />
                <h3 className="text-text-primary-light font-medium dark:text-text-primary-dark text-3xl font-h">
                  Ciao {utente.nome}
                </h3>
              </div>

              <div className="flex items-center gap-3 text-text-secondary-light dark:text-text-secondary-dark ">
                <SquareUser size={18} />
                <p className=" font-p truncate">{utente.username}</p>
              </div>
              <div className="flex items-center gap-3 text-text-secondary-light dark:text-text-secondary-dark">
                <Mail size={18} />
                <p className="font-p truncate">{utente.email}</p>
              </div>
              <div className="flex gap-3 justify-end mt-12 mb-4 ">
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
