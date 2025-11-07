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
  }, [currentMonth, start, end]);

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
      return format(startDate, "MMM", { locale: it });
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
      <nav className=" flex md:justify-center mx-auto md:items-center gap-4 w-full md:w-auto px-2 md:mb-0 ">
        <button
          onClick={() => setCurrentMonth(subWeeks(currentMonth, 1))}
          className="dark:text-text-secondary-dark   text-text-tertiary-light bg-stone-200  dark:bg-btn-dark hover:bg-bg-list-light dark:hover:bg-icon-gray-dark backdrop-blur-xs   font-h font-bold border-1 border-white dark:border-btn-dark p-1 rounded-full  cursor-pointer  dark:shadow-xs shadow-md"
        >
          <ChevronLeft size={40} strokeWidth={2} />
        </button>
        <div className="bg-accent-blue-dark px-5 py-1 rounded-full font-p font-bold text-text-primary-dark">
          <p className="text-center text-sm">{formatMonthDisplay()}</p>
          <h1 className="text-lg">
            {format(startDate, "dd", { locale: it })} -{" "}
            {format(endDate, "dd", { locale: it })}
          </h1>
        </div>

        <button
          onClick={() => setCurrentMonth(addWeeks(currentMonth, 1))}
          className="dark:text-text-secondary-dark   text-text-tertiary-light bg-stone-200  dark:bg-btn-dark hover:bg-bg-list-light dark:hover:bg-icon-gray-dark backdrop-blur-xs   font-h font-bold border-1 border-white dark:border-btn-dark p-1 rounded-full  cursor-pointer  dark:shadow-xs shadow-md"
        >
          <ChevronRight size={40} strokeWidth={2} />
        </button>
      </nav>

      {sortedDates.length === 0 ? (
        <p className="text-text-secondary-light dark:text-text-secondary-dark font-p text-xl mt-8 text-center">
          Nessun controllo disponibile per questa settimana.
        </p>
      ) : (
        <div className="week-wrapper mt-6">
          <div className="week-grid gap-12 ">
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
                <div className="flex flex-col items-center gap-6 mb-5">
                  {groupedByDate[date].map((controllo) => (
                    <DashboardCard controllo={controllo} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default GetDash;
