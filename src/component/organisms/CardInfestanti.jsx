import { Check, TriangleAlert, Calendar, Rat, Bird, Bug } from "lucide-react";

const CardInfestanti = ({ infestante }) => {
  return (
    <div
      key={infestante.id}
      className="font-h  bg-bg-light/50 border-2 border-white  dark:bg-btn-dark dark:border-bg-list-dark   md:px-5 md:pt-2 shadow-md px-4 pt-0 pb-4 rounded-3xl font-bold select-none text-text-secondary-light dark:text-text-primary-dark"
    >
      {" "}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2 items-center text-text-primary-light font-medium dark:text-text-primary-dark">
          <Calendar
            size={26}
            strokeWidth={2}
            className="bg-red-400 p-1 rounded-md text-white"
          />
          <p>Data controllo</p>
        </div>

        <p>{infestante.data}</p>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2 items-center text-text-primary-light font-medium dark:text-text-primary-dark">
          <Rat
            size={26}
            strokeWidth={2}
            className="bg-gray-400 p-1 rounded-md text-white"
          />

          <p>Controllo roditori</p>
        </div>

        {infestante.roditori !== "CONFORME" ? (
          <Check size={26} strokeWidth={4} className="text-green-600" />
        ) : (
          <TriangleAlert
            size={26}
            strokeWidth={2}
            className="text-red-700 dark:text-red-600"
          />
        )}
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2 items-center text-text-primary-light font-medium dark:text-text-primary-dark">
          <Bird
            size={26}
            strokeWidth={2}
            className="bg-yellow-400 p-1 rounded-md text-white"
          />

          <p>Controllo animali volanti</p>
        </div>

        {infestante.insettiVolanti !== "CONFORME" ? (
          <Check size={26} strokeWidth={4} className="text-green-600" />
        ) : (
          <TriangleAlert
            size={26}
            strokeWidth={2}
            className="text-red-700 dark:text-red-600"
          />
        )}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center text-text-primary-light font-medium dark:text-text-primary-dark">
          <Bug
            size={26}
            strokeWidth={2}
            className="bg-teal-400 p-1 rounded-md text-white"
          />
          <p>Controllo animali striscianti</p>
        </div>

        {infestante.insettiStriscianti !== "CONFORME" ? (
          <Check size={26} strokeWidth={4} className="text-green-600" />
        ) : (
          <TriangleAlert
            size={26}
            strokeWidth={2}
            className="text-red-700 dark:text-red-600"
          />
        )}
      </div>
    </div>
  );
};
export default CardInfestanti;
