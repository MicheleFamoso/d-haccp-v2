import { useState, useEffect } from "react";
import { CookingPot, PaintBucket, Bubbles, Calendar } from "lucide-react";
import CardPulizia from "./CardPulizia";
import { useSelector } from "react-redux";

const GetPulizia = () => {
  const [pulizie, setPulizie] = useState([]);
  const [loading, setLoading] = useState(true);

  const render = useSelector((state) => {
    return state.pulizie.riaggiorna;
  });

  const handlePulizie = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:8080/pulizie", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error();
      const data = await response.json();
      setPulizie(data);
      setLoading(false);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`http://localhost:8080/pulizie/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Errore durante l'eliminazione");

      handlePulizie();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handlePulizie();
  }, [render, pulizie]);
  return (
    <div>
      {loading && <h1>Caricamento</h1>}
      <div className="grid grid-cols-2 xl:grid-cols-2 3xl:grid-cols-4 md:gap-5 gap-2 mt-6">
        {loading === false &&
          pulizie.map((pulizie) => (
            <CardPulizia
              key={pulizie.id}
              pul={pulizie}
              onDelete={() => handleDelete(pulizie.id)}
            />
          ))}
      </div>
    </div>
  );
};
export default GetPulizia;
