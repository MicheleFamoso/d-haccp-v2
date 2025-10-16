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
  const [isExpanded, setIsExpanded] = useState(true);
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
          onClick={() => navigate("/dashboard")}
          className={`flex font-p items-center gap-3 p-2 mb-6 rounded-3xl cursor-pointer hover:bg-bg-list-light dark:hover:bg-btn-dark ${
            location.pathname === "/dashboard"
              ? "bg-bg-list-light text-accent-blue-dark dark:bg-btn-dark dark:text-accent-blue-light"
              : ""
          }`}
        >
          <HomeIcon
            className={`h-6 w-6   backdrop-blur-sm  ${
              location.pathname === "/dashboard" ? "" : ""
            }`}
          />
          {isExpanded && (
            <span
              className={`lg:text-sm text-lg ${
                location.pathname === "/dashboard" ? " font-medium" : ""
              }`}
            >
              Dashboard
            </span>
          )}
        </div>

        <div
          onClick={() => navigate("/temperatura")}
          className={`flex font-p items-center gap-3 p-2 mb-6 rounded-3xl cursor-pointer hover:bg-bg-list-light dark:hover:bg-btn-dark ${
            location.pathname === "/temperatura"
              ? "bg-bg-list-light text-accent-blue-dark dark:bg-btn-dark dark:text-accent-blue-light"
              : ""
          }`}
        >
          <ClipboardDocumentListIcon
            className={`h-6 w-6 backdrop-blur-sm ${
              location.pathname === "/temperatura" ? "" : ""
            }`}
          />
          {isExpanded && (
            <span
              className={`lg:text-sm text-lg  ${
                location.pathname === "/temperatura" ? " font-medium" : ""
              }`}
            >
              Controllo Temperatura
            </span>
          )}
        </div>
        <div
          onClick={() => navigate("/pulizie")}
          className={`flex font-p items-center gap-3 p-2 mb-6 rounded-3xl cursor-pointer hover:bg-bg-list-light dark:hover:bg-btn-dark ${
            location.pathname === "/pulizie"
              ? "bg-bg-list-light text-accent-blue-dark dark:bg-btn-dark dark:text-accent-blue-light"
              : ""
          }`}
        >
          <SparklesIcon
            className={`h-6 w-6   backdrop-blur-sm  ${
              location.pathname === "/pulizie" ? "" : ""
            }`}
          />
          {isExpanded && (
            <span
              className={`lg:text-sm text-lg   ${
                location.pathname === "/pulizie" ? " font-medium" : ""
              }`}
            >
              Pianificazione Pulizie
            </span>
          )}
        </div>
        <div
          onClick={() => navigate("/infestanti")}
          className={`flex font-p items-center gap-3 p-2 mb-6 rounded-3xl cursor-pointer hover:bg-bg-list-light dark:hover:bg-btn-dark ${
            location.pathname === "/infestanti"
              ? "bg-bg-list-light text-accent-blue-dark dark:bg-btn-dark dark:text-accent-blue-light"
              : ""
          }`}
        >
          <BugAntIcon
            className={`h-6 w-6  backdrop-blur-sm   ${
              location.pathname === "/infestanti" ? "" : ""
            }`}
          />
          {isExpanded && (
            <span
              className={`lg:text-sm text-lg  ${
                location.pathname === "/infestanti" ? " font-medium" : ""
              }`}
            >
              Controllo Infestanti
            </span>
          )}
        </div>

        <div
          onClick={() => navigate("/fornitori")}
          className={`flex font-p items-center gap-3 p-2 mb-6 rounded-3xl cursor-pointer hover:bg-bg-list-light dark:hover:bg-btn-dark ${
            location.pathname === "/fornitori"
              ? "bg-bg-list-light text-accent-blue-dark dark:bg-btn-dark dark:text-accent-blue-light"
              : ""
          }`}
        >
          <TruckIcon
            className={`h-6 w-6  backdrop-blur-sm  ${
              location.pathname === "/fornitori" ? " " : ""
            }`}
          />
          {isExpanded && (
            <span
              className={`lg:text-sm text-lg  ${
                location.pathname === "/fornitori" ? " font-medium" : ""
              }`}
            >
              Fornitori
            </span>
          )}
        </div>
        <div
          onClick={() => navigate("/forniture")}
          className={`flex font-p items-center gap-3 p-2 mb-6 rounded-3xl cursor-pointer hover:bg-bg-list-light dark:hover:bg-btn-dark ${
            location.pathname === "/forniture"
              ? "bg-bg-list-light text-accent-blue-dark dark:bg-btn-dark dark:text-accent-blue-light"
              : ""
          }`}
        >
          <ArchiveBoxIcon
            className={`h-6 w-6    backdrop-blur-sm  ${
              location.pathname === "/forniture" ? "" : ""
            }`}
          />
          {isExpanded && (
            <span
              className={`lg:text-sm text-lg  ${
                location.pathname === "/forniture" ? "font-medium" : ""
              }`}
            >
              Forniture
            </span>
          )}
        </div>

        {ruolo === "ADMIN" && (
          <div
            onClick={() => navigate("/utenti")}
            className={`flex font-p items-center gap-3 p-2 mb-6 rounded-3xl cursor-pointer hover:bg-bg-list-light dark:hover:bg-btn-dark ${
              location.pathname === "/utenti"
                ? "bg-bg-list-light text-accent-blue-dark dark:bg-btn-dark dark:text-accent-blue-light"
                : ""
            }`}
          >
            <UsersIcon
              className={`h-6 w-6   backdrop-blur-sm   ${
                location.pathname === "/utenti" ? " " : ""
              }`}
            />
            {isExpanded && (
              <span
                className={`lg:text-sm text-lg  ${
                  location.pathname === "/utenti" ? "font-medium" : ""
                }`}
              >
                Dipendenti
              </span>
            )}
          </div>
        )}
        <div
          onClick={() => navigate("/azienda")}
          className={`flex font-p items-center gap-3 p-2 mb-6 rounded-3xl cursor-pointer hover:bg-bg-list-light dark:hover:bg-btn-dark ${
            location.pathname === "/azienda"
              ? "bg-bg-list-light text-accent-blue-dark dark:bg-btn-dark dark:text-accent-blue-light"
              : ""
          }`}
        >
          <BuildingStorefrontIcon
            className={`h-6 w-6   backdrop-blur-sm  ${
              location.pathname === "/azienda" ? "" : ""
            }`}
          />
          {isExpanded && (
            <span
              className={`lg:text-sm text-lg   ${
                location.pathname === "/azienda" ? "font-medium" : ""
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
          className={`flex font-p items-center gap-3 p-2 mb-6 rounded-3xl cursor-pointer hover:bg-bg-list-light dark:hover:bg-btn-dark ${
            location.pathname === "/"
              ? "bg-bg-list-light text-accent-blue-dark dark:bg-btn-dark dark:text-accent-blue-light"
              : ""
          }`}
        >
          <XCircleIcon
            className={`h-6 w-6    backdrop-blur-sm   ${
              location.pathname === "/" ? "" : ""
            }`}
          />
          {isExpanded && (
            <span
              className={`lg:text-sm text-lg  ${
                location.pathname === "/" ? " font-medium" : ""
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
