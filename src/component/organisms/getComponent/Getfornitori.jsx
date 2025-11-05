import { useState, useEffect } from "react";
import { Truck } from "lucide-react";

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
      <div className="grid grid-cols-2 xl:grid-cols-1 3xl:grid-cols-2 md:gap-5 gap-2 mt-6">
        {loading === false &&
          fornitori.map((fornitore) => (
            <div
              className="font-h  bg-bg-light/50 border-2 border-white  dark:bg-btn-dark dark:border-bg-list-dark   md:px-5 md:pt-2 shadow-md px-4 pt-0 pb-4 rounded-3xl font-bold select-none text-text-secondary-light dark:text-text-primary-dark"
              key={fornitore.id}
            >
              <div
                className=" grid grid-cols-3 mt-4
                 gap-6"
              >
                <div className="col-span-1">
                  <div className="flex gap-3 items-center">
                    <Truck
                      size={56}
                      strokeWidth={1.3}
                      className=" text-accent-blue-medium"
                    />
                    <p className="text-4xl truncate ">
                      {fornitore.nomeFornitore}
                    </p>
                  </div>

                  <p>{fornitore.sede}</p>
                  <p>{fornitore.telefono}</p>
                  <p>{fornitore.email}</p>
                </div>
                <div className="col-span-2">
                  <p>Prodotti</p>
                  <p>{fornitore.prodottiForniti}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Getfornitori;
