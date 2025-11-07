import Button from "../../atoms/Button";
import AddTemperatura from "./AddTemperatura";
import { useState } from "react";
import AddInfestanti from "./AddInfestanti";
import AddForniture from "./AddForniture";
const AddDashboard = () => {
  const [seleziona, Setselezione] = useState("a");
  return (
    <div className="bg-section-light px-3  py-2 rounded-3xl shadow-lg dark:bg-section-dark">
      <div className="flex gap-1 w-fit mx-auto  rounded-3xl mb-6 font-p text-text-primary-light dark:text-text-primary-dark bg-btn-light dark:bg-btn-dark">
        <button
          onClick={() => Setselezione("a")}
          className={`px-3 py-2 rounded-3xl ${
            seleziona === "a"
              ? "bg-accent-blue-medium text-white dark:bg-accent-blue-dark font-bold "
              : "bg-transparent text-text-primary-light dark:text-text-primary-dark hover:text-white hover:bg-accent-blue-light"
          }`}
        >
          Temperatura
        </button>

        <button
          onClick={() => Setselezione("b")}
          className={`px-3 py-2 rounded-3xl ${
            seleziona === "b"
              ? "bg-accent-blue-medium text-white dark:bg-accent-blue-dark font-bold "
              : "bg-transparent text-text-primary-light dark:text-text-primary-dark hover:text-white hover:bg-accent-blue-light"
          }`}
        >
          Infestanti
        </button>

        <button
          onClick={() => Setselezione("c")}
          className={` px-3 py-2 rounded-3xl ${
            seleziona === "c"
              ? "bg-accent-blue-medium text-white dark:bg-accent-blue-dark font-bold "
              : "bg-transparent text-text-primary-light dark:text-text-primary-dark hover:text-white hover:bg-accent-blue-light"
          }`}
        >
          Fornitura
        </button>
      </div>

      <div>{seleziona === "a" && <AddTemperatura />}</div>
      <div>{seleziona === "b" && <AddInfestanti />}</div>
      <div>{seleziona === "c" && <AddForniture />}</div>
    </div>
  );
};
export default AddDashboard;
