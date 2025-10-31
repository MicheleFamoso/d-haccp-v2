import { useState, useEffect } from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import {
  CheckIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import {
  Refrigerator,
  Thermometer,
  FileCheck,
  Check,
  TriangleAlert,
  Ellipsis,
} from "lucide-react";

const ControllTemperatura = () => {
  //const Fetch
  const [temperature, SetTemperature] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [setError] = useState(null);

  const render = useSelector((state) => {
    return state.temp.aggiorna;
  });

  //Const data odierna
  const [dataControllo, setdataControllo] = useState(
    new Date().toISOString().split("T")[0]
  );

  //Giorno odierno
  const x = new Date(dataControllo);
  const oggi = x.getDate();
  const mese = x.toLocaleString("it-IT", { month: "long" });

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

  //Funzione giorno succ
  const giornoSuccessivo = () => {
    const nuovaData = new Date(dataControllo);
    nuovaData.setDate(nuovaData.getDate() + 1);
    setdataControllo(nuovaData.toISOString().split("T")[0]);
  };
  //Const per render giorno succ
  const e = new Date(dataControllo);
  e.setDate(e.getDate() + 1);
  const giornoSucc = e.getDate();

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
  }, [dataControllo, render]);

  return (
    <div className="h-10/12">
      <nav className="flex items-center justify-center gap-6 select-none">
        <div
          onClick={() => giornoPrecedente()}
          className="bg-bg-list-light px-4 py-2 rounded-full text-text-primary-light dark:text-text-primary-dark cursor-pointer flex items-center gap-2 font-p dark:bg-icon-gray-dark"
        >
          <ChevronLeftIcon className="size-5" />
          <button className="cursor-pointer "> {giornoPrec}</button>
        </div>

        <div className="  flex flex-col justify-center justify-items-center items-center font-p font-bold text-text-primary-dark">
          <p className="bg-red-500  px-3 py-2 rounded-full">{oggi}</p>
        </div>
        <div
          onClick={() => giornoSuccessivo()}
          className="bg-bg-list-light px-4 py-2 rounded-full cursor-pointer flex items-center gap-2  dark:bg-icon-gray-dark text-text-primary-light dark:text-text-primary-dark"
        >
          <button className="cursor-pointer">{giornoSucc}</button>{" "}
          <ChevronRightIcon className="size-5" />
        </div>
      </nav>
      <div>
        <h1 className="text-center text-xl font-p text-text-secondary-light dark:text-text-secondary-dark select-none">
          {mese}
        </h1>
      </div>

      <div className="grid grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 md:gap-5 gap-2 mt-6">
        {isLoading && <div> Caricamento</div>}
        {isLoading === false &&
          temperature.map((temp) => (
            <div key={temp.key} className=" mb-2">
              <div
                className={`font-h ${
                  temp.conformita !== "CONFORME"
                    ? "  bg-red-100 dark:bg-alert-3"
                    : "  bg-bg-light  dark:bg-btn-dark  "
                }   md:px-5 md:pt-2 shadow-md px-4 pt-0 pb-4 rounded-4xl font-bold select-none text-text-secondary-light dark:text-text-primary-dark`}
              >
                <div className="flex justify-end ">
                  <button className="hover:bg-text-tertiary-light p-1 rounded-full cursor-pointer">
                    <Ellipsis className="hover:text-white" />
                  </button>
                </div>

                <div className="flex justify-between mb-4 mt-3">
                  <div className="flex gap-2 items-center text-text-primary-light font-medium dark:text-text-primary-dark">
                    <Refrigerator
                      size={26}
                      strokeWidth={2}
                      className="bg-violet-300 p-1 rounded-md text-white"
                    />
                    <h2 className="">Frigorifero</h2>
                  </div>

                  <p> {temp.frigo}</p>
                </div>
                <div className="flex justify-between mb-4">
                  <div className="flex gap-2 items-center text-text-primary-light font-medium dark:text-text-primary-dark">
                    <Thermometer
                      size={26}
                      strokeWidth={2}
                      className="bg-blue-300 p-1 rounded-md text-white"
                    />

                    <p> Temperatura </p>
                  </div>

                  <p>{temp.temperatura}&deg; C </p>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center text-text-primary-light font-medium dark:text-text-primary-dark">
                    <FileCheck
                      size={26}
                      strokeWidth={2}
                      className="bg-yellow-400 p-1 rounded-md text-white"
                    />
                    <p>Conformita</p>
                  </div>

                  {temp.conformita === "CONFORME" ? (
                    <Check
                      size={26}
                      strokeWidth={4}
                      className="text-green-600"
                    />
                  ) : (
                    <TriangleAlert
                      size={26}
                      strokeWidth={2}
                      className="text-red-700 dark:text-red-100"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default ControllTemperatura;
