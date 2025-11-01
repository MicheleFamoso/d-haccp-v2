import {
  Refrigerator,
  Thermometer,
  FileCheck,
  Check,
  TriangleAlert,
  Ellipsis,
  Trash,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const CardTemp = ({ temp, onDelete }) => {
  const [menu, setMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div key={temp.key} className=" mb-2">
      <div
        className={`font-h ${
          temp.conformita !== "CONFORME"
            ? "  bg-red-100 border-2 border-red-200 dark:bg-alert-3"
            : "  bg-bg-light/50 border-2 border-white  dark:bg-btn-dark dark:border-bg-list-dark "
        }   md:px-5 md:pt-2 shadow-md px-4 pt-0 pb-4 rounded-3xl font-bold select-none text-text-secondary-light dark:text-text-primary-dark`}
      >
        <div ref={menuRef} className="flex justify-end relative">
          <button
            onClick={() => setMenu(!menu)}
            className="hover:bg-text-tertiary-light p-1 rounded-full cursor-pointer"
          >
            <Ellipsis className="hover:text-white" />
          </button>
          {menu && (
            <div className="absolute right-0 top-8 bg-white/60 dark:bg-bg-list-dark/90 border-1 backdrop-blur-sm border-white dark:border-bg-list-dark   rounded-2xl shadow-2xl">
              <div
                onClick={() => {
                  onDelete(temp.id);
                  setMenu(false);
                }}
                className="flex items-center hover:bg-alert-2 px-6  hover:text-white py-2 rounded-3xl gap-3"
              >
                <Trash size={22} className=" cursor-pointer" />
                <button className=" cursor-pointer">Elimina</button>
              </div>
            </div>
          )}
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
    </div>
  );
};

export default CardTemp;
