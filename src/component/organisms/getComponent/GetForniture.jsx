import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CardForniture from "../cardComponent/CardForniture";
import { Plus } from "lucide-react";
import AddFornitureMob from "../addComponent/AddFornitureMob";
import Loading from "../Loading";
const GetForniture = () => {
  const [forniture, setForniture] = useState([]);
  const [loading, setLoading] = useState(true);
  const [add, setAdd] = useState(false);
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
      {loading && <Loading />}
      <div className="grid md:grid-cols-2 xl:grid-cols-2 3xl:grid-cols-4 md:gap-10 gap-2 mt-6 md:mx-12">
        {loading === false &&
          forniture.map((fornitura) => (
            <CardForniture
              fornitura={fornitura}
              onDelete={() => handleDeleteForniture(fornitura.id)}
            />
          ))}
      </div>
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <button onClick={() => setAdd(true)}>
          <Plus className="size-16 p-2 bg-accent-blue-light shadow-xl text-white rounded-4xl " />
        </button>
      </div>
      <AddFornitureMob isOpen={add} onClose={() => setAdd(false)} />
    </div>
  );
};
export default GetForniture;
