import { useState, useEffect } from "react";
import CardDipendete from "../cardComponent/CardDipendenti";

const GetDipendenti = () => {
  const [dipendenti, setDipendenti] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDipendenti = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:8080/admin", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error("Errore nel recupero degli utenti");
      const data = await response.json();
      setDipendenti(data);
      setLoading(false);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleDipendenti();
  }, []);

  return (
    <div>
      <h1 className="font-h text-4xl font-bold text-text-secondary-light mb-4 dark:text-text-primary-dark text-center text-shadow-xs">
        Dipendenti
      </h1>
      {loading && (
        <h1 className="text-center text-accent-blue-medium font-black font-p">
          Caricamento...
        </h1>
      )}
      <div className="grid grid-cols-2 xl:grid-cols-2 3xl:grid-cols-2 md:gap-5 gap-2 mx-12 mt-6">
        {!loading &&
          dipendenti.map((dipendente) => (
            <CardDipendete dipendente={dipendente} />
          ))}
      </div>
    </div>
  );
};
export default GetDipendenti;
