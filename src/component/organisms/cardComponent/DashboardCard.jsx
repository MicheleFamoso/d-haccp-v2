import {
  Check,
  TriangleAlert,
  FileCheck,
  Thermometer,
  Bug,
  Truck,
  Refrigerator,
  Beef,
} from "lucide-react";
import Temperatura from "../../pages/Temperatura";

const DashboardCard = ({ controllo }) => {
  const icons = {
    Temperatura: <Thermometer strokeWidth={2} className="size-4 md:size-7" />,
    Infestanti: <Bug strokeWidth={2} className="size-4 md:size-7" />,
    Fornitura: <Truck strokeWidth={2} className="size-4 md:size-7" />,
  };
  return (
    <div
      key={controllo.id}
      className={`font-h md:w-65 w-50 ${
        controllo.conformita !== "CONFORME"
          ? "  bg-red-100 border-2 border-red-200 dark:bg-alert-3"
          : "  md:bg-bg-light/50 bg-section-light border-2 border-bg-light md:border-white  dark:bg-btn-dark dark:border-bg-list-dark "
      }   md:px-5 md:pt-2 md:shadow-md md:inset-shadow-sm  px-2 pt-0 md:pb-4 pb-1 md:rounded-3xl rounded-md font-bold select-none text-text-secondary-light dark:text-text-primary-dark`}
    >
      <div className="flex items-center gap-2 md:mb-6 mb-2">
        {icons[controllo.tipoControllo]}
        <p className=" font-bold md:text-2xl">{controllo.tipoControllo}</p>
      </div>

      {controllo.tipoControllo !== "Infestanti" && (
        <div className="flex justify-between md:mb-3">
          {controllo.tipoControllo === "Temperatura" ? (
            <div className="flex gap-2 items-center text-text-primary-light font-medium dark:text-text-primary-dark">
              <Refrigerator
                size={26}
                strokeWidth={2}
                className="bg-violet-300 p-1 rounded-md text-white hidden md:flex"
              />
              <p>Frigo</p>
            </div>
          ) : (
            <div className="flex gap-2 items-center text-text-primary-light font-medium dark:text-text-primary-dark">
              <Beef
                size={26}
                strokeWidth={2}
                className="bg-green-400 p-1 rounded-md hidden md:flex text-white"
              />
              <p>Prodotto</p>
            </div>
          )}
          <p>{controllo.descrizione}</p>
        </div>
      )}

      {controllo.tipoControllo === "Temperatura" && (
        <div className="flex justify-between md:mb-3">
          <div className="flex gap-2 items-center text-text-primary-light font-medium dark:text-text-primary-dark">
            <Thermometer
              size={26}
              strokeWidth={2}
              className="bg-blue-300 p-1 rounded-md hidden md:flex text-white"
            />
            <p>Temperatura</p>
          </div>

          <p>{controllo.valore}</p>
        </div>
      )}
      {controllo.tipoControllo === "Fornitura" && (
        <div className="flex justify-between mb-3">
          <div className="flex gap-2 items-center text-text-primary-light font-medium dark:text-text-primary-dark">
            <Thermometer
              size={26}
              strokeWidth={2}
              className="bg-blue-300 p-1 rounded-md text-white"
            />
            <p>Fornitore</p>
          </div>

          <p className="truncate">{controllo.valore}</p>
        </div>
      )}

      <div className="flex justify-between">
        <div className="flex gap-2 items-center text-text-primary-light font-medium dark:text-text-primary-dark">
          <FileCheck
            size={26}
            strokeWidth={2}
            className="bg-yellow-300 p-1 rounded-md text-white hidden md:flex"
          />
          <p>Conformita</p>
        </div>

        {controllo.conformita === "CONFORME" ? (
          <Check size={26} strokeWidth={4} className="text-green-600" />
        ) : (
          <TriangleAlert
            size={26}
            strokeWidth={2}
            className="text-red-700 dark:text-red-100"
          />
        )}
      </div>
    </div>
  );
};

export default DashboardCard;
