import { useState, useEffect } from "react";

import CardFornitore from "../cardComponent/CardFornitore";

const Getfornitori = () => {
  const [fornitori, setFornitori] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleFornitori = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:8080/fornitori/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error();
      const data = await response.json();
      setFornitori(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeletForn = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`http://localhost:8080/fornitori/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Errore durante l'eliminazione");
      setLoading(true);
      handleFornitori();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFornitori();
  }, []);
  return (
    <div>
      <h1 className="font-h text-4xl font-bold text-text-secondary-light mb-4 dark:text-text-primary-dark text-center text-shadow-xs">
        Fornitori
      </h1>
      {loading && (
        <h1 className="text-center text-accent-blue-medium font-black font-p">
          Caricamento forniture...
        </h1>
      )}
      <div className="grid grid-cols-2 xl:grid-cols-1 3xl:grid-cols-2 md:gap-5 gap-2 mx-12 mt-6">
        {loading === false &&
          fornitori.map((fornitore) => (
            <CardFornitore
              fornitore={fornitore}
              onDelete={() => handleDeletForn(fornitore.id)}
            />
          ))}
      </div>
    </div>
  );
};
export default Getfornitori;
