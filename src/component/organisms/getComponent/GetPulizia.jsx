import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import CardPulizia from "../cardComponent/CardPulizia";
import { useSelector, useDispatch } from "react-redux";
import AddPuliMob from "../addComponent/AddPuliMob";
import Loading from "../Loading";

const GetPulizia = () => {
  const [pulizie, setPulizie] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [add, setAdd] = useState(false);
  const render = useSelector((state) => {
    return state.aggiorna.pulizie;
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

      dispatch({
        type: "AGGIORNA",
        key: "pulizie",
        payload: Date.now(),
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handlePulizie();
  }, [render]);
  return (
    <div>
      <h1 className="font-h text-3xl md:text-4xl font-bold text-text-secondary-light mb-4 dark:text-text-primary-dark text-center text-shadow-xs">
        Pulizie
      </h1>
      {loading && <Loading />}
      <div className="grid md:grid-cols-2 xl:grid-cols-2 3xl:grid-cols-4 md:gap-5 gap-2 mt-6">
        {loading === false &&
          pulizie.map((pulizie) => (
            <CardPulizia
              key={pulizie.id}
              pul={pulizie}
              onDelete={() => handleDelete(pulizie.id)}
            />
          ))}
      </div>
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <button onClick={() => setAdd(true)}>
          <Plus className="size-16 p-2 bg-accent-blue-light shadow-xl text-white rounded-4xl " />
        </button>
      </div>

      <AddPuliMob isOpen={add} onClose={() => setAdd(false)} />
    </div>
  );
};
export default GetPulizia;
