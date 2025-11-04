import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CardInfestanti from "./CardInfestanti";

const GetInfestanti = () => {
  const [infestanti, setInfestanti] = useState([]);
  const [loading, setLoading] = useState(true);

  const render = useSelector((state) => {
    return state.aggiorna.infestanti;
  });

  const handleInfestanti = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:8080/infestanti/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error();
      const data = await response.json();
      setInfestanti(data);
      setLoading(false);
      console.log(infestanti, data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteInf = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`http://localhost:8080/infestanti/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Errore durante l'eliminazione");
      setLoading(true);
      handleInfestanti();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleInfestanti();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [render]);

  return (
    <div>
      <h1 className="font-h text-4xl font-bold text-text-secondary-light mb-4 dark:text-text-primary-dark text-center text-shadow-xs">
        Controllo animali infestanti
      </h1>
      {loading && (
        <div>
          <h1>Caricamento in corso</h1>
        </div>
      )}
      <div className="grid grid-cols-2 xl:grid-cols-2 3xl:grid-cols-4 md:gap-5 gap-2 mt-6">
        {loading === false &&
          infestanti.map((infestante) => (
            <CardInfestanti
              infestante={infestante}
              onDelete={() => handleDeleteInf(infestante.id)}
            />
          ))}
      </div>
    </div>
  );
};

export default GetInfestanti;
