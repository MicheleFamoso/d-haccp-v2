import { useState, useEffect } from "react";

const ControllTemperatura = () => {
  const [temperature, SetTemperature] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataControllo, setdataControllo] = useState(
    new Date().toISOString().split("T")[0]
  );

  const giornoPrecedente = () => {
    const nuovaData = new Date(dataControllo);
    nuovaData.setDate(nuovaData.getDate() - 1);
    setdataControllo(nuovaData.toISOString().split("T")[0]);
  };

  const giornoSuccessivo = () => {
    const nuovaData = new Date(dataControllo);
    nuovaData.setDate(nuovaData.getDate() + 1);
    setdataControllo(nuovaData.toISOString().split("T")[0]);
  };

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
  useEffect(() => {
    HandleTemp();
  }, [dataControllo]);

  return (
    <div className="h-10/12">
      <nav>
        {" "}
        <button onClick={() => giornoPrecedente()}>{dataControllo}</button>
      </nav>

      <h1>Termperatura</h1>
    </div>
  );
};
export default ControllTemperatura;
