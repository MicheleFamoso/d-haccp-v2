import { useState, useEffect } from "react";
import CardDipendete from "../cardComponent/CardDipendenti";
import { useSelector } from "react-redux";
import { Plus } from "lucide-react";

import AddDipeMob from "../addComponent/AddDipeMob";
const GetDipendenti = () => {
  const [dipendenti, setDipendenti] = useState([]);
  const [loading, setLoading] = useState(true);
  const [add, setAdd] = useState(false);
  const render = useSelector((state) => {
    return state.aggiorna.dipendenti;
  });

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

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`http://localhost:8080/admin/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("errore nell'eliminazione del dipendente");
      handleDipendenti();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleDipendenti();
  }, [render]);

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
      <div className="grid md:grid-cols-2 xl:grid-cols-2 3xl:grid-cols-3 md:gap-5 gap-2 md:mx-12 mt-6 ">
        {!loading &&
          dipendenti.map((dipendente) => (
            <CardDipendete
              dipendente={dipendente}
              onDelete={() => handleDelete(dipendente.id)}
            />
          ))}
      </div>
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <button onClick={() => setAdd(true)}>
          <Plus className="size-16 p-2 bg-accent-blue-light shadow-xl text-white rounded-4xl " />
        </button>
      </div>
      <AddDipeMob isOpen={add} onClose={() => setAdd(false)} />
    </div>
  );
};
export default GetDipendenti;
