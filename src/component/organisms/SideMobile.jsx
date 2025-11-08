import { Bars3BottomLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
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
  Bars3BottomRightIcon,
} from "@heroicons/react/24/outline";
import ThemeToggle from "../molecules/ThemeToggle";
import User from "./User";

const SideMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");
  const ruolo = token ? jwtDecode(token).role : null;
  return (
    <>
      <div className="md:hidden fixed top-3 left-3 z-90 shadow-xl flex items-center dark:bg-bg-list-dark  bg-white px-2 py-2 rounded-full">
        <button onClick={() => setIsOpen(!isOpen)} className="">
          <Bars3BottomLeftIcon className="size-8 text-text-primary-light dark:text-text-primary-dark" />
        </button>
      </div>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-gray-700/40 h-dvh z-80"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="fixed top-2 left-2 rounded-4xl w-80 z-90 dark:text-text-secondary-dark text-text-secondary-light bg-bg-light/80 backdrop-blur-sm dark:bg-bg-dark p-4">
            <div className="flex justify-between">
              <div className="flex gap-8">
                <button
                  onClick={() => setIsOpen(false)}
                  className="mb-4  w-full text-text-primary-light dark:text-text-primary-dark "
                >
                  <Bars3BottomLeftIcon className="size-8" />
                </button>
                <User />
              </div>

              <div className="w-fit">
                <ThemeToggle />
              </div>
            </div>

            <nav className="space-y-4">
              <div
                onClick={() => {
                  navigate("/dashboard");
                  setIsOpen(false);
                }}
                className={`flex font-p items-center gap-3 p-2 mb-6 rounded-3xl cursor-pointer hover:bg-bg-list-light dark:hover:bg-btn-dark ${
                  location.pathname === "/dashboard" &&
                  "bg-bg-list-light text-accent-blue-dark dark:bg-btn-dark dark:text-accent-blue-light"
                }`}
              >
                <HomeIcon className="size-6" />
                {isOpen && (
                  <span
                    className={`lg:text-sm text-lg ${
                      location.pathname === "/dashboard" && " font-medium"
                    }`}
                  >
                    Dashboard
                  </span>
                )}
              </div>
              <div
                onClick={() => {
                  navigate("temperatura");
                  setIsOpen(false);
                }}
                className={`flex font-p items-center gap-3 p-2 mb-1 rounded-3xl cursor-pointer hover:bg-bg-list-light dark:hover:bg-btn-dark ${
                  location.pathname === "/dashboard/temperatura" &&
                  "bg-bg-list-light text-accent-blue-dark dark:bg-btn-dark dark:text-accent-blue-light"
                }`}
              >
                <ClipboardDocumentListIcon className="size-6" />
                {isOpen && (
                  <span
                    className={`lg:text-sm text-lg  ${
                      location.pathname === "/dashboard/temperatura" &&
                      " font-medium"
                    }`}
                  >
                    Controllo Temperatura
                  </span>
                )}
              </div>
              <div
                onClick={() => {
                  navigate("pulizie");
                  setIsOpen(false);
                }}
                className={`flex font-p items-center gap-3 p-2 mb-1 rounded-3xl cursor-pointer hover:bg-bg-list-light dark:hover:bg-btn-dark ${
                  location.pathname === "/dashboard/pulizie" &&
                  "bg-bg-list-light text-accent-blue-dark dark:bg-btn-dark dark:text-accent-blue-light"
                }`}
              >
                <SparklesIcon className="size-6" />
                {isOpen && (
                  <span
                    className={`lg:text-sm text-lg   ${
                      location.pathname === "/dashboard/pulizie" &&
                      " font-medium"
                    }`}
                  >
                    Pianificazione Pulizie
                  </span>
                )}
              </div>
              <div
                onClick={() => {
                  navigate("infestanti");
                  setIsOpen(false);
                }}
                className={`flex font-p items-center gap-3 p-2 mb-6 rounded-3xl cursor-pointer hover:bg-bg-list-light dark:hover:bg-btn-dark ${
                  location.pathname === "/dashboard/infestanti" &&
                  "bg-bg-list-light text-accent-blue-dark dark:bg-btn-dark dark:text-accent-blue-light"
                }`}
              >
                <BugAntIcon className="size-6" />
                {isOpen && (
                  <span
                    className={`lg:text-sm text-lg  ${
                      location.pathname === "/dashboard/infestanti" &&
                      " font-medium"
                    }`}
                  >
                    Controllo Infestanti
                  </span>
                )}
              </div>

              <div
                onClick={() => {
                  navigate("fornitori");
                  setIsOpen(false);
                }}
                className={`flex font-p items-center gap-3 p-2 mb-1 rounded-3xl cursor-pointer hover:bg-bg-list-light dark:hover:bg-btn-dark ${
                  location.pathname === "/dashboard/fornitori"
                    ? "bg-bg-list-light text-accent-blue-dark dark:bg-btn-dark dark:text-accent-blue-light"
                    : ""
                }`}
              >
                <TruckIcon className="size-6" />
                {isOpen && (
                  <span
                    className={`lg:text-sm text-lg  ${
                      location.pathname === "/dashboard/fornitori" &&
                      " font-medium"
                    }`}
                  >
                    Fornitori
                  </span>
                )}
              </div>
              <div
                onClick={() => {
                  navigate("forniture");
                  setIsOpen(false);
                }}
                className={`flex font-p items-center gap-3 p-2 mb-6 rounded-3xl cursor-pointer hover:bg-bg-list-light dark:hover:bg-btn-dark ${
                  location.pathname === "/dashboard/forniture" &&
                  "bg-bg-list-light text-accent-blue-dark dark:bg-btn-dark dark:text-accent-blue-light"
                }`}
              >
                <ArchiveBoxIcon className="size-6" />
                {isOpen && (
                  <span
                    className={`lg:text-sm text-lg  ${
                      location.pathname === "/dashboard/forniture" &&
                      "font-medium"
                    }`}
                  >
                    Forniture
                  </span>
                )}
              </div>

              {ruolo === "ADMIN" && (
                <div
                  onClick={() => {
                    navigate("dipendenti");
                    setIsOpen(false);
                  }}
                  className={`flex font-p items-center gap-3 p-2 rounded-3xl cursor-pointer hover:bg-bg-list-light dark:hover:bg-btn-dark ${
                    location.pathname === "/dashboard/dipendenti" &&
                    "bg-bg-list-light text-accent-blue-dark dark:bg-btn-dark dark:text-accent-blue-light"
                  }`}
                >
                  <UsersIcon className="size-6" />
                  {isOpen && (
                    <span
                      className={`lg:text-sm text-lg  ${
                        location.pathname === "/dashboard/dipendenti" &&
                        "font-medium"
                      }`}
                    >
                      Dipendenti
                    </span>
                  )}
                </div>
              )}
              <div
                onClick={() => {
                  navigate("/azienda");
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 p-2 rounded-3xl cursor-pointer hover:bg-salviaScuro ${
                  location.pathname === "/azienda" ? "bg-ambra" : ""
                }`}
              >
                <BuildingStorefrontIcon
                  className={`h-6 w-6 text-slate-800   backdrop-blur-sm  transform transition-transform duration-200 ease-in-out hover:scale-125 ${
                    location.pathname === "/azienda" ? "scale-110 h-7 w-7" : ""
                  }`}
                />

                <span
                  className={`lg:text-sm text-lg   text-slate-800${
                    location.pathname === "/azienda" ? "font-bold" : ""
                  }`}
                >
                  Azienda
                </span>
              </div>

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

                <span
                  className={`lg:text-sm text-lg  text-slate-800 ${
                    location.pathname === "/" ? " font-bold" : ""
                  }`}
                >
                  Log Out
                </span>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
};
export default SideMobile;
