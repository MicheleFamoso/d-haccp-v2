import { Truck, Map, Mail, Phone, Ellipsis, Trash } from "lucide-react";
import { useState, useRef, useEffect } from "react";
const CardFornitore = ({ fornitore, onDelete }) => {
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
    <div
      className="font-h  bg-bg-light/50 border-2 border-white  dark:bg-btn-dark dark:border-bg-list-dark   md:px-5 md:pt-2 shadow-md px-4 pt-0 pb-12 rounded-3xl font-bold select-none text-text-secondary-light dark:text-text-primary-dark"
      key={fornitore.id}
    >
      <div
        className=" grid grid-cols-3 mt-4
                 gap-18"
      >
        <div className="col-span-1 border-r-2 border-r-btn-light dark:border-r-bg-list-dark">
          <div className="flex gap-3 items-center p-1">
            <p className="text-3xl truncate ">{fornitore.nomeFornitore}</p>
          </div>
          <div className="flex gap-2 items-center mt-4">
            <Map size={22} strokeWidth={2} className="text-green-400 p" />
            <p>{fornitore.sede}</p>
          </div>
          <div className="flex gap-2 items-center mt-2">
            <Phone size={22} strokeWidth={2} className="text-blue-500" />
            <p>{fornitore.telefono}</p>
          </div>
          <div className="flex gap-2 items-center mt-2">
            <Mail size={22} strokeWidth={2} className="text-red-400 " />
            <p className="truncate">{fornitore.email}</p>
          </div>
        </div>
        <div className="col-span-2">
          <div ref={menuRef} className="flex justify-end relative">
            <button
              onClick={() => setMenu(!menu)}
              className="hover:bg-text-tertiary-light  rounded-full cursor-pointer"
            >
              <Ellipsis className="hover:text-white" />
            </button>
            {menu && (
              <div className="absolute right-0 top-8 bg-white/60 dark:bg-bg-list-dark/90 border-1 backdrop-blur-sm border-white dark:border-bg-list-dark   rounded-2xl shadow-2xl">
                <div
                  onClick={() => {
                    onDelete(fornitore.id);
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
          <p className="text-xl mb-6">Prodotti forniti</p>
          <div className="flex gap-3 mt-2 flex-wrap">
            {fornitore.prodottiForniti.map((prodotti, index) => (
              <p
                key={index}
                className=" text-white text-xl font-semibold bg-slate-400 dark:bg-slate-600  px-3 py-1  rounded-4xl"
              >
                {prodotti}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardFornitore;
