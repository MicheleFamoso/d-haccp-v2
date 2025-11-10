import {
  format,
  parseISO,
  startOfWeek,
  endOfWeek,
  subWeeks,
  addWeeks,
} from "date-fns";
import { it } from "date-fns/locale";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import DashboardCard from "../cardComponent/DashboardCard";
import { useSelector } from "react-redux";
import Loading from "../Loading";
const GetDash = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const start = format(
    startOfWeek(currentMonth, { weekStartsOn: 1 }),
    "yyyy-MM-dd"
  );
  const end = format(
    endOfWeek(currentMonth, { weekStartsOn: 1 }),
    "yyyy-MM-dd"
  );

  const [datiCalendario, setDatiCalendario] = useState([]);

  const render = useSelector((state) => {
    return state.aggiorna;
  });

  useEffect(() => {
    const fetchDati = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(
          `http://localhost:8080/controlli/calendario?start=${start}&end=${end}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = await res.json();
        setDatiCalendario(data);
        console.log(data);
        setLoading(false);
      } catch (err) {
        console.error("Errore fetch calendario:", err);
      }
    };

    fetchDati();
  }, [currentMonth, start, end, render]);

  const groupedByDate = datiCalendario.reduce((acc, item) => {
    if (!item?.data || isNaN(new Date(item.data))) return acc;
    if (!acc[item.data]) acc[item.data] = [];
    acc[item.data].push(item);
    return acc;
  }, {});

  const sortedDates = Object.keys(groupedByDate).sort();

  const startDate = startOfWeek(currentMonth, { weekStartsOn: 1 });
  const endDate = endOfWeek(currentMonth, { weekStartsOn: 1 });

  const formatMonthDisplay = () => {
    if (startDate.getMonth() === endDate.getMonth()) {
      return format(startDate, "MMMM", { locale: it });
    } else {
      return `${format(startDate, "MMM", { locale: it })}-${format(
        endDate,
        "MMM",
        { locale: it }
      )}`;
    }
  };

  return (
    <main className="relative min-h-screen">
      <h1 className="md:hidden text-center font-h text-3xl py-6 font-bold text-text-secondary-light dark:text-text-secondary-dark">
        Dashboard
      </h1>
      <div className="hidden  md:flex sticky top-0 z-50 bg-section-light/80 dark:bg-section-dark/80  backdrop-blur-md md:dark:bg-section-dark/90  md:bg-section-light/60 py-4">
        <nav className="   flex justify-center items-center shadow-md bg-btn-light dark:bg-btn-dark rounded-4xl w-fit py-1 px-3 mx-auto">
          <button
            onClick={() => setCurrentMonth(subWeeks(currentMonth, 1))}
            className="dark:text-text-secondary-dark   text-text-tertiary-light bg-btn-light  dark:bg-btn-dark hover:bg-bg-list-light dark:hover:bg-icon-gray-dark backdrop-blur-xs   font-h font-bold  p-1 rounded-full  cursor-pointer"
          >
            <ChevronLeft size={40} strokeWidth={2} />
          </button>
          <div className="font-p font-bold text-accent-blue-medium mx-12">
            <h1 className="md:text-lg text-center">
              {format(startDate, "dd", { locale: it })} -{" "}
              {format(endDate, "dd", { locale: it })}
            </h1>
            <p className="text-center text-xs md:text-md">
              {formatMonthDisplay()}
            </p>
          </div>

          <button
            onClick={() => setCurrentMonth(addWeeks(currentMonth, 1))}
            className="dark:text-text-secondary-dark   text-text-tertiary-light bg-btn-light  dark:bg-btn-dark hover:bg-bg-list-light dark:hover:bg-icon-gray-dark backdrop-blur-xs   font-h font-bold  p-1 rounded-full  cursor-pointer"
          >
            <ChevronRight size={40} strokeWidth={2} />
          </button>
        </nav>
      </div>

      <div className="md:pl-5 ">
        {sortedDates.length === 0 ? (
          <p className="text-text-secondary-light dark:text-text-secondary-dark font-p text-xl mt-8 text-center">
            Nessun controllo disponibile per questa settimana.
          </p>
        ) : (
          <div className="week-wrapper md:mt-6">
            <div className="week-grid md:gap-6 ">
              {loading && <Loading />}
              {sortedDates.map((date) => (
                <div key={date} className="flex flex-col items-center">
                  {/* header del giorno */}

                  <div className="">
                    <div className="flex flex-col items-center justify-center  text-text-primary-dark font-h font-bold w-8 h-8 bg-red-500 shadow-md mb-1 rounded-full ">
                      <p className="md:text-lg text-xs">
                        {format(parseISO(date), "d", { locale: it })}
                      </p>
                    </div>
                    <p className="md:text-sm text-xs font-bold text-red-500">
                      {format(parseISO(date), "EEE", { locale: it })}
                    </p>
                  </div>

                  {/* lista controlli */}

                  {!loading && (
                    <div className="flex flex-col  items-center md:gap-4 mb-5 mt-2">
                      {groupedByDate[date].map((controllo) => (
                        <DashboardCard controllo={controllo} />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="md:hidden fixed bottom-4 left-0 w-full z-50  py-2">
        <nav className="   flex justify-center items-center shadow-md bg-btn-light/20 backdrop-blur-xl dark:bg-btn-dark/60 border-1 border-white dark:border-bg-list-dark/20 rounded-4xl w-fit py-1 px-3 mx-auto">
          <button
            onClick={() => setCurrentMonth(subWeeks(currentMonth, 1))}
            className="dark:text-text-secondary-dark   text-text-tertiary-light bg-btn-light  dark:bg-btn-dark hover:bg-bg-list-light dark:hover:bg-icon-gray-dark backdrop-blur-xs   font-h font-bold  p-1 rounded-full  cursor-pointer"
          >
            <ChevronLeft size={40} strokeWidth={2} />
          </button>
          <div className="font-p font-bold text-accent-blue-medium mx-12">
            <h1 className="md:text-lg text-center">
              {format(startDate, "dd", { locale: it })} -{" "}
              {format(endDate, "dd", { locale: it })}
            </h1>
            <p className="text-center text-xs md:text-md">
              {formatMonthDisplay()}
            </p>
          </div>

          <button
            onClick={() => setCurrentMonth(addWeeks(currentMonth, 1))}
            className="dark:text-text-secondary-dark   text-text-tertiary-light bg-btn-light  dark:bg-btn-dark hover:bg-bg-list-light dark:hover:bg-icon-gray-dark backdrop-blur-xs   font-h font-bold  p-1 rounded-full  cursor-pointer"
          >
            <ChevronRight size={40} strokeWidth={2} />
          </button>
        </nav>
      </div>
    </main>
  );
};

export default GetDash;
