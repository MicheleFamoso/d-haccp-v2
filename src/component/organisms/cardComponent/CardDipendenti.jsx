import { useState, useRef, useEffect } from "react";
import { Trash, Ellipsis, User, Mail } from "lucide-react";
const CardDipendete = ({ dipendente, onDelete }) => {
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
    <div>
      <div
        className="font-h  bg-bg-light/50 border-2 border-white  dark:bg-btn-dark dark:border-bg-list-dark   md:px-5 md:pt-2 shadow-md  pt-2 pb-6 rounded-3xl font-bold select-none text-text-secondary-light dark:text-text-primary-dark"
        key={dipendente.id}
      >
        <div ref={menuRef} className="flex justify-end relative mr-2">
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
                  onDelete(dipendente.id);
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

        <div className="text-center text-3xl mb-6">
          <p>
            {dipendente.nome} {dipendente.cognome}
          </p>
        </div>
        <div className="px-4  ">
          <div className="flex justify-between mb-4">
            <div className="flex gap-2 items-center text-text-primary-light font-medium dark:text-text-primary-dark">
              <User
                size={26}
                strokeWidth={2}
                className="bg-blue-400 p-1 rounded-md text-white"
              />
              <p>Username</p>
            </div>{" "}
            <p>{dipendente.username}</p>
          </div>

          <div className="flex justify-between ">
            <div className="flex gap-2 items-center text-text-primary-light font-medium dark:text-text-primary-dark">
              <Mail
                size={26}
                strokeWidth={2}
                className="bg-red-400 p-1 rounded-md text-white"
              />
              <p>Email</p>
            </div>
            <p>{dipendente.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardDipendete;
