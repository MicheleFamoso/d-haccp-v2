import { useState, useEffect } from "react";
import { data } from "react-router-dom";

const ControllTemperatura = () => {
  //const Fetch
  const [temperature, SetTemperature] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //Const data odierna
  const [dataControllo, setdataControllo] = useState(
    new Date().toISOString().split("T")[0]
  );

  //Giorno odierno
  const x = new Date(dataControllo);
  const oggi = x.getDate();
  const mese = x.toLocaleString("it-IT", { month: "short" });

  // Funzione giorno precedente
  const giornoPrecedente = () => {
    const nuovaData = new Date(dataControllo);
    nuovaData.setDate(nuovaData.getDate() - 1);
    setdataControllo(nuovaData.toISOString().split("T")[0]);
  };

  //Const per render giorno prec
  const d = new Date(dataControllo);
  d.setDate(d.getDate() - 1);
  const giornoPrec = d.getDate();
  const mesePrec = d.toLocaleString("it-IT", { month: "short" });

  //Funzione giorno succ
  const giornoSuccessivo = () => {
    const nuovaData = new Date(dataControllo);
    nuovaData.setDate(nuovaData.getDate() + 1);
    setdataControllo(nuovaData.toISOString().split("T")[0]);
  };
  //Const per render giorno succ
  const e = new Date(dataControllo);
  e.setDate(e.getDate() + 1);
  const giornoSucc = d.getDate();
  const meseSucc = d.toLocaleString("it-IT", { month: "short" });

  //Fetch get
  const HandleTemp = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        `http://localhost:8080/temperature/data?data=${dataControllo}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("errore nel recupero");
      }
      const data = await response.json();
      SetTemperature(data);
      setIsLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  //UseEffect con dataControllo cosi da ri-renderizzare ad ogni cambio di data
  useEffect(() => {
    HandleTemp();
  }, [dataControllo]);

  return (
    <div className="h-10/12">
      <nav>
        {" "}
        <button onClick={() => giornoPrecedente()} className="bg-red-50 p-4">
          {giornoPrec} {mesePrec}
        </button>
        <p>{oggi}</p>
      </nav>

      <h1>Termperatura</h1>
    </div>
  );
};
export default ControllTemperatura;
