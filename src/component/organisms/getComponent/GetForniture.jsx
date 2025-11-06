import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardForniture from "../cardComponent/CardForniture";

const GetForniture = () => {
  const [forniture, setForniture] = useState([]);
  const [loading, setLoading] = useState(true);

  const render = useSelector((state) => {
    return state.aggiorna.forniture;
  });
  const HandleForniture = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:8080/forniture", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error();
      const data = await response.json();
      setForniture(data);
      setLoading(false);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleDeleteForniture = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`http://localhost:8080/forniture/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Errore durante l'eliminazione");
      HandleForniture();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    HandleForniture();
  }, [render]);

  return (
    <div className="h-8/12">
      <h1 className="font-h text-4xl font-bold text-text-secondary-light mb-4 dark:text-text-primary-dark text-center text-shadow-xs">
        Forniture
      </h1>
      {loading && <h3>Caricamento...</h3>}
      <div className="grid grid-cols-2 xl:grid-cols-2 3xl:grid-cols-4 md:gap-10 gap-2 mt-6 mx-12">
        {loading === false &&
          forniture.map((fornitura) => (
            <CardForniture
              fornitura={fornitura}
              onDelete={() => handleDeleteForniture(fornitura.id)}
            />
          ))}
      </div>
    </div>
  );
};
export default GetForniture;
