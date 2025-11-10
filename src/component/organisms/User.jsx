import { useState, useEffect, useRef } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import Button from "../atoms/Button";
import LogOut from "../molecules/LogOut";
import EditUser from "../molecules/EditUser";
import { CircleUser, Mail, SquareUser } from "lucide-react";
import Loading from "./Loading";

const User = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const popoverRef = useRef(null);

  const [utente, setUtente] = useState(null);
  const [loading, setLoading] = useState(true);
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
      setError("Nessun token trovato");
      setLoading(false);
      return;
    }

    setError(null);
    setLoading(true);

    fetch("http://localhost:8080/admin/me", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error(`Errore: ${res.statusText}`);
        return res.json();
      })
      .then((data) => {
        setUtente(data);
        setIdUtente(data.id);
        setNome(data.nome);
        setCognome(data.cognome);
        setUsername(data.username);
        setEmail(data.email);
      })
      .catch(() => setError("Errore nel caricamento"))
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
        <UserIcon className="size-5 text-text-primary-light" />
      </button>

      <div
        className={`absolute -left-15 mt-2 w-70 bg-section-light/50 backdrop-blur-md dark:bg-section-dark/80 shadow-xl border-1 border-white dark:border-black rounded-3xl px-4 z-55 transform transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-2 min-h-40 py-4">
          {loading && <Loading />}

          {!loading && utente && (
            <div>
              <div className="flex gap-3 mt-4 mb-6 items-center">
                <CircleUser
                  size={45}
                  strokeWidth={1}
                  className="bg-accent-blue-medium rounded-full text-white"
                />
                <h3 className="text-text-primary-light dark:text-text-primary-dark text-2xl">
                  Ciao {utente.nome}
                </h3>
              </div>

              <div className="flex items-center gap-3 text-text-secondary-light dark:text-text-secondary-dark">
                <SquareUser size={18} />
                <p className="truncate">{utente.username}</p>
              </div>
              <div className="flex items-center gap-3 text-text-secondary-light dark:text-text-secondary-dark">
                <Mail size={18} />
                <p className="truncate">{utente.email}</p>
              </div>

              <div className="flex gap-3 justify-end mt-10">
                <Button
                  text="Modifica"
                  variant="accentText"
                  onClick={() => setShowForm(true)}
                />
                <LogOut />
              </div>
            </div>
          )}

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
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
