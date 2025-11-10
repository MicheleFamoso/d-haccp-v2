import { jwtDecode } from "jwt-decode";

import { useState, useEffect } from "react";
import Button from "../../atoms/Button";
import FormField from "../../molecules/FormField";
import { MapPin, Phone, Mail, Store } from "lucide-react";

const Azienda = () => {
  const [azienda, setAzienda] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const token = localStorage.getItem("token");
  const ruolo = token ? jwtDecode(token).role : null;

  const [denominazioneAziendale, setDenominazioneAziendale] = useState("");
  const [ragioneSociale, setRagioneSociale] = useState("");
  const [tipologiaAttivita, setTipologiaAttivita] = useState("");
  const [sedeOperativa, setSedeOperativa] = useState("");
  const [partitaIva, setPartitaIva] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const getAziende = () => {
    const token = localStorage.getItem("token");
    console.log("Token:", token);
    if (!token) {
      console.warn("Nessun token trovato, fetch annullata.");
      setError("Nessun token trovato, impossibile caricare le aziende.");
      return;
    }
    setLoading(true);
    setError(null);

    fetch("http://localhost:8080/aziende/mia", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok)
          throw new Error(`Errore nella risposta: ${res.statusText}`);
        return res.text();
      })
      .then((text) => {
        if (!text) {
          setAzienda(null);
          setLoading(false);
          return;
        }
        const data = JSON.parse(text);
        console.log("Azienda ricevuta:", data);
        setAzienda(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Errore nella fetch aziende:", error);
        setError("Errore nel caricamento delle aziende.");
        setLoading(false);
      });
  };
  useEffect(() => {
    getAziende();
  }, []);

  const creaAzienda = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Token mancante, impossibile creare l'azienda.");
      return;
    }

    fetch("http://localhost:8080/aziende", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        denominazioneAziendale,
        ragioneSociale,
        tipologiaAttivita,
        sedeOperativa,
        partitaIva,
        telefono,
        email,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Errore nella creazione dell'azienda.");
        return res.json();
      })
      .then(() => {
        setShowForm(false);
        getAziende();
      })
      .catch((err) => {
        console.error(err);
        setError("Errore durante la creazione dell'azienda.");
      });
  };

  const modificaAzienda = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setError("Token mancante, impossibile modificare l'azienda.");
      return;
    }
    fetch(`http://localhost:8080/aziende/${azienda.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        denominazioneAziendale,
        ragioneSociale,
        tipologiaAttivita,
        sedeOperativa,
        partitaIva,
        telefono,
        email,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Errore nella modifica dell'azienda.");
        return res.json();
      })
      .then(() => {
        setShowForm(false);
        getAziende();
      })
      .catch((err) => {
        console.error(err);
        setError("Errore durante la modifica dell'azienda.");
      });
  };

  return (
    <div className="bg-section-light mt-25 md:mt-0 px-3  py-5 rounded-3xl shadow-lg dark:bg-section-dark">
      {loading && (
        <p className="text-xl text-center w-full py-10">
          Caricamento in corso...
        </p>
      )}
      {error && (
        <p className="text-xl text-center w-full py-10 text-rosso">{error}</p>
      )}
      {!loading && !error && !azienda && !showForm && (
        <div className="">
          <h3 className="font-h text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
            Benvenuto nella tua dashboard.
          </h3>
          <p className="font-p mt-2 text-text-secondary-light dark:text-text-secondary-dark">
            Non hai ancora registrato un’azienda. <br /> Per continuare, crea la
            tua azienda inserendo i dati richiesti qui sotto.
          </p>

          <Button
            text={"Aggiungi Azienda"}
            variant={"accentText"}
            onClick={() => setShowForm(true)}
            className="mt-2"
          />
        </div>
      )}
      {!loading && !error && showForm && (
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (azienda) {
                modificaAzienda();
              } else {
                creaAzienda();
              }
            }}
          >
            <FormField
              id={"azienda"}
              text={"Denominazione Aziendale"}
              value={denominazioneAziendale}
              onChange={(e) => setDenominazioneAziendale(e.target.value)}
            />
            <FormField
              id={"societa"}
              text={"Ragione Sociale"}
              value={ragioneSociale}
              onChange={(e) => setRagioneSociale(e.target.value)}
            />
            <FormField
              id={"attivita"}
              text={"Tipologia attivita"}
              value={tipologiaAttivita}
              onChange={(e) => setTipologiaAttivita(e.target.value)}
            />
            <FormField
              id={"sede"}
              text={"Sede"}
              value={sedeOperativa}
              onChange={(e) => setSedeOperativa(e.target.value)}
            />
            <FormField
              id={"iva"}
              text={"Partita Iva"}
              value={partitaIva}
              onChange={(e) => setPartitaIva(e.target.value)}
            />
            <FormField
              id={"telefono"}
              text={"Telefono"}
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
            <FormField
              id={"email"}
              text={"Email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
            <div className="flex justify-between">
              <Button
                text={"Chiudi"}
                type="button"
                onClick={() => setShowForm(false)}
              />{" "}
              <Button text={"Salva"} type="submit" variant="accentText" />
            </div>
          </form>
        </div>
      )}
      {!loading && !error && !showForm && azienda && (
        <div className="px-3">
          <div className="">
            <div className="mb-6 flex gap-3 items-center ">
              <Store size={60} strokeWidth={1.5} className="text-blue-400" />
              <div>
                <h1 className="font-h text-4xl font-bold text-text-primary-light dark:text-text-primary-dark">
                  {azienda.denominazioneAziendale}
                </h1>
                <h6 className="font-p text-lg font-semibold text-text-tertiary-light dark:text-text-secondary-dark">
                  {azienda.tipologiaAttivita}
                </h6>
              </div>
            </div>
            <div className="font-p text-text-secondary-light dark:text-text-secondary-dark mb-3">
              <div className="flex justify-between mb-3">
                <div className="flex gap-2 items-center">
                  <MapPin size={20} strokeWidth={1.5} />
                  <p>Sede</p>
                </div>

                <p> {azienda.sedeOperativa}</p>
              </div>

              <div className="flex justify-between mb-3">
                <div className="flex gap-2 items-center">
                  <Phone size={20} strokeWidth={1.5} />
                  <p>Telefono</p>
                </div>

                <p>{azienda.telefono}</p>
              </div>

              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <Mail size={20} strokeWidth={1.5} />
                  <p>Email</p>
                </div>

                <p>{azienda.email}</p>
              </div>
            </div>
          </div>{" "}
          {ruolo === "ADMIN" && (
            <Button
              text={"modifica"}
              onClick={() => {
                setDenominazioneAziendale(azienda.denominazioneAziendale || "");
                setRagioneSociale(azienda.ragioneSociale || "");
                setTipologiaAttivita(azienda.tipologiaAttivita || "");
                setSedeOperativa(azienda.sedeOperativa || "");
                setPartitaIva(azienda.partitaIva || "");
                setTelefono(azienda.telefono || "");
                setEmail(azienda.email || "");
                setShowForm(true);
              }}
              className="mt-2 w-full"
            />
          )}
        </div>
      )}
    </div>
  );
};
export default Azienda;
