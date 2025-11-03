import {
  CookingPot,
  PaintBucket,
  Bubbles,
  Calendar,
  Trash,
  Ellipsis,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
const CardPulizia = ({ pul, onDelete }) => {
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
    <div className="font-h  bg-bg-light/50 border-2 border-white  dark:bg-btn-dark dark:border-bg-list-dark   md:px-5 md:pt-2 shadow-md px-4 pt-0 pb-4 rounded-3xl font-bold select-none text-text-secondary-light dark:text-text-primary-dark">
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
                onDelete(pul.id);
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
          <CookingPot
            size={26}
            strokeWidth={2}
            className="bg-violet-300 p-1 rounded-md text-white"
          />
          <p>Oggetto da sanificare</p>
        </div>

        <p> {pul.oggetto}</p>
      </div>
      <div className="flex justify-between mb-4 mt-3">
        <div className="flex gap-2 items-center text-text-primary-light font-medium dark:text-text-primary-dark">
          <PaintBucket
            size={26}
            strokeWidth={2}
            className="bg-blue-300 p-1 rounded-md text-white"
          />
          <p>Attrezzatura utilizzata</p>
        </div>
        <p>{pul.attrezzatureUtilizzate}</p>
      </div>
      <div className="flex justify-between mb-4 mt-3">
        <div className="flex gap-2 items-center text-text-primary-light font-medium dark:text-text-primary-dark">
          <Bubbles
            size={26}
            strokeWidth={2}
            className="bg-yellow-400 p-1 rounded-md text-white"
          />
          <p>Detergente</p>
        </div>
        <p>{pul.detergente}</p>
      </div>
      <div className="flex justify-between mb-4 mt-3">
        <div className="flex gap-2 items-center text-text-primary-light font-medium dark:text-text-primary-dark">
          <Calendar
            size={26}
            strokeWidth={2}
            className="bg-red-400 p-1 rounded-md text-white"
          />
          <p>Frequenza</p>
        </div>

        <p>{pul.frequenza}</p>
      </div>
    </div>
  );
};
export default CardPulizia;
