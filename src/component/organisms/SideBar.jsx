import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate, useLocation } from "react-router-dom";
import {
  HomeIcon,
  UserIcon,
  BuildingStorefrontIcon,
  SparklesIcon,
  ClipboardDocumentListIcon,
  XCircleIcon,
  BugAntIcon,
  TruckIcon,
  ArchiveBoxIcon,
  UsersIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Bars3BottomLeftIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");
  const ruolo = token ? jwtDecode(token).role : null;
  return (
    <div>
      <div
        className={`ml-4   hidden md:flex bg-section-light dark:bg-section-dark dark:text-text-secondary-dark text-text-secondary-light rounded-4xl ${
          isExpanded ? "w-60" : "w-16 "
        } p-3 flex flex-col `}
      >
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mb-10    self-baseline"
        >
          {isExpanded ? (
            <div className="flex items-center  ">
              <Bars3BottomLeftIcon className="lg:h-10 lg:w-10 w-12 h-12 hover:bg-btn-light rounded-3xl p-2 cursor-pointer" />{" "}
              <h1 className="text-2xl ml-3 font-p  text-shadow-xs">d/Haccp</h1>
            </div>
          ) : (
            <Bars3BottomRightIcon className="lg:h-10 lg:w-10 w-12 h-12 hover:bg-btn-light rounded-3xl p-2 " />
          )}
        </button>

        <div
          onClick={() => navigate("/")}
          className={`flex font-p items-center gap-3 p-2 mb-6 rounded-3xl cursor-pointer hover:bg-bg-list-light dark:hover:bg-btn-dark ${
            location.pathname === "/HomePage" ? "bg-accent-blue-light" : ""
          }`}
        >
          <HomeIcon
            className={`h-6 w-6   backdrop-blur-sm  ${
              location.pathname === "/HomePage" ? "scale-110" : ""
            }`}
          />
          {isExpanded && (
            <span
              className={`lg:text-sm text-lg  text-slate-800${
                location.pathname === "/HomePage" ? " font-bold" : ""
              }`}
            >
              Dashboard
            </span>
          )}
        </div>

        <div
          onClick={() => navigate("/temperatura")}
          className={`flex items-center gap-3 p-2 rounded-3xl cursor-pointer hover:bg-salvia mb-1 ${
            location.pathname === "/temperatura" ? "bg-ambra" : ""
          }`}
        >
          <ClipboardDocumentListIcon
            className={`h-6 w-6  text-slate-800  backdrop-blur-sm transform transition-transform duration-200 ease-in-out hover:scale-125 ${
              location.pathname === "/temperatura" ? "scale-110" : ""
            }`}
          />
          {isExpanded && (
            <span
              className={`lg:text-sm text-lg  text-slate-800 ${
                location.pathname === "/temperatura" ? " font-bold" : ""
              }`}
            >
              Controllo Temperatura
            </span>
          )}
        </div>
        <div
          onClick={() => navigate("/pulizie")}
          className={`flex items-center gap-3 p-2 rounded-3xl cursor-pointer hover:bg-salvia mb-1 ${
            location.pathname === "/pulizie" ? "bg-ambra" : ""
          }`}
        >
          <SparklesIcon
            className={`h-6 w-6 text-slate-800   backdrop-blur-sm  transform transition-transform duration-200 ease-in-out hover:scale-125 ${
              location.pathname === "/pulizie" ? " scale-110" : ""
            }`}
          />
          {isExpanded && (
            <span
              className={`lg:text-sm text-lg   text-slate-800${
                location.pathname === "/pulizie" ? " font-bold" : ""
              }`}
            >
              Pianificazione Pulizie
            </span>
          )}
        </div>
        <div
          onClick={() => navigate("/infestanti")}
          className={`flex items-center gap-3 p-2 rounded-3xl cursor-pointer hover:bg-salvia mb-6 ${
            location.pathname === "/infestanti" ? "bg-ambra" : ""
          }`}
        >
          <BugAntIcon
            className={`h-6 w-6 text-slate-800   backdrop-blur-sm  transform transition-transform duration-200 ease-in-out hover:scale-125 ${
              location.pathname === "/infestanti" ? " scale-110" : ""
            }`}
          />
          {isExpanded && (
            <span
              className={`lg:text-sm text-lg  text-slate-800 ${
                location.pathname === "/infestanti" ? " font-bold" : ""
              }`}
            >
              Controllo Infestanti
            </span>
          )}
        </div>

        <div
          onClick={() => navigate("/fornitori")}
          className={`flex items-center gap-3 p-2 rounded-3xl cursor-pointer hover:bg-salvia mt-2  mb-1  ${
            location.pathname === "/fornitori" ? "bg-ambra" : ""
          }`}
        >
          <TruckIcon
            className={`h-6 w-6  text-slate-800  backdrop-blur-sm  transform transition-transform duration-200 ease-in-out hover:scale-125 ${
              location.pathname === "/fornitori" ? " scale-110" : ""
            }`}
          />
          {isExpanded && (
            <span
              className={`lg:text-sm text-lg  text-slate-800 ${
                location.pathname === "/fornitori" ? " font-bold" : ""
              }`}
            >
              Fornitori
            </span>
          )}
        </div>
        <div
          onClick={() => navigate("/forniture")}
          className={`flex items-center gap-3 p-2 rounded-3xl cursor-pointer hover:bg-salvia mb-6 ${
            location.pathname === "/forniture" ? "bg-ambra" : ""
          }`}
        >
          <ArchiveBoxIcon
            className={`h-6 w-6 text-slate-800    backdrop-blur-sm  transform transition-transform duration-200 ease-in-out hover:scale-125 ${
              location.pathname === "/forniture" ? "scale-110" : ""
            }`}
          />
          {isExpanded && (
            <span
              className={`lg:text-sm text-lg  text-slate-800 ${
                location.pathname === "/forniture" ? "font-bold" : ""
              }`}
            >
              Forniture
            </span>
          )}
        </div>

        {ruolo === "ADMIN" && (
          <div
            onClick={() => navigate("/utenti")}
            className={`flex items-center gap-3 p-2 rounded-3xl cursor-pointer hover:bg-salvia mt-2  mb-1 ${
              location.pathname === "/utenti" ? "bg-ambra" : ""
            }`}
          >
            <UsersIcon
              className={`h-6 w-6 text-slate-800   backdrop-blur-sm  transform transition-transform duration-200 ease-in-out hover:scale-125 ${
                location.pathname === "/utenti" ? " scale-110" : ""
              }`}
            />
            {isExpanded && (
              <span
                className={`lg:text-sm text-lg  text-slate-800 ${
                  location.pathname === "/utenti" ? "font-bold" : ""
                }`}
              >
                Dipendenti
              </span>
            )}
          </div>
        )}
        <div
          onClick={() => navigate("/azienda")}
          className={`flex items-center gap-3 p-2 rounded-3xl cursor-pointer hover:bg-salvia mb-1  ${
            location.pathname === "/azienda" ? "bg-ambra" : ""
          }`}
        >
          <BuildingStorefrontIcon
            className={`h-6 w-6 text-slate-800   backdrop-blur-sm  transform transition-transform duration-200 ease-in-out hover:scale-125 ${
              location.pathname === "/azienda" ? "scale-110 h-7 w-7" : ""
            }`}
          />
          {isExpanded && (
            <span
              className={`lg:text-sm text-lg   text-slate-800${
                location.pathname === "/azienda" ? "font-bold" : ""
              }`}
            >
              Azienda
            </span>
          )}
        </div>
        <hr className="my-3 border-t border-salviaScuro" />
        <div
          onClick={() => {
            navigate("/");
            localStorage.removeItem("token");
            localStorage.removeItem("ruolo");
          }}
          className={`flex items-center  gap-3 p-2 rounded-3xl cursor-pointer hover:bg-salviaScuro ${
            location.pathname === "/" ? "bg-ambra" : ""
          }`}
        >
          <XCircleIcon
            className={`h-6 w-6  text-slate-800  backdrop-blur-sm  transform transition-transform duration-200 ease-in-out hover:scale-125 ${
              location.pathname === "/" ? " scale-110" : ""
            }`}
          />
          {isExpanded && (
            <span
              className={`lg:text-sm text-lg  text-slate-800 ${
                location.pathname === "/" ? " font-bold" : ""
              }`}
            >
              Log Out
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
