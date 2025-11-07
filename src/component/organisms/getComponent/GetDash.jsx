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
const GetDash = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

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
    <main className="">
      <div className="sticky top-0 z-50 backdrop-blur-md dark:bg-section-dark/90  bg-section-light/60 py-4">
        <nav className="   flex justify-center items-center shadow-md bg-btn-light dark:bg-btn-dark rounded-4xl w-fit py-1 px-3 mx-auto">
          <button
            onClick={() => setCurrentMonth(subWeeks(currentMonth, 1))}
            className="dark:text-text-secondary-dark   text-text-tertiary-light bg-btn-light  dark:bg-btn-dark hover:bg-bg-list-light dark:hover:bg-icon-gray-dark backdrop-blur-xs   font-h font-bold  p-1 rounded-full  cursor-pointer"
          >
            <ChevronLeft size={40} strokeWidth={2} />
          </button>
          <div className="font-p font-bold text-accent-blue-medium mx-12">
            <h1 className="text-lg text-center">
              {format(startDate, "dd", { locale: it })} -{" "}
              {format(endDate, "dd", { locale: it })}
            </h1>
            <p className="text-center text-md">{formatMonthDisplay()}</p>
          </div>

          <button
            onClick={() => setCurrentMonth(addWeeks(currentMonth, 1))}
            className="dark:text-text-secondary-dark   text-text-tertiary-light bg-btn-light  dark:bg-btn-dark hover:bg-bg-list-light dark:hover:bg-icon-gray-dark backdrop-blur-xs   font-h font-bold  p-1 rounded-full  cursor-pointer"
          >
            <ChevronRight size={40} strokeWidth={2} />
          </button>
        </nav>
      </div>

      <div className="pl-5">
        {sortedDates.length === 0 ? (
          <p className="text-text-secondary-light dark:text-text-secondary-dark font-p text-xl mt-8 text-center">
            Nessun controllo disponibile per questa settimana.
          </p>
        ) : (
          <div className="week-wrapper mt-6">
            <div className="week-grid gap-6 ">
              {sortedDates.map((date) => (
                <div key={date} className="flex flex-col items-center">
                  {/* header del giorno */}
                  <div className="flex flex-col items-center justify-center  text-text-primary-dark font-h font-bold w-14 h-14 bg-red-500 shadow-md mb-4 rounded-full ">
                    <p className="md:text-lg text-xs">
                      {format(parseISO(date), "d", { locale: it })}
                    </p>
                    <p className="md:text-sm text-2xs">
                      {format(parseISO(date), "EEE", { locale: it })}
                    </p>
                  </div>

                  {/* lista controlli */}
                  <div className="flex flex-col items-center gap-4 mb-5">
                    {groupedByDate[date].map((controllo) => (
                      <DashboardCard controllo={controllo} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default GetDash;
