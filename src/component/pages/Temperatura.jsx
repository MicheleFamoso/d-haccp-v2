import AddTemperatura from "../organisms/addComponent/AddTemperatura";
import ControllTemperatura from "../organisms/getComponent/ControllTemperatura";
import { Thermometer } from "lucide-react";

const Temperatura = () => {
  return (
    <div>
      <div className="grid grid-col-1 xl:grid-cols-3 3xl:grid-cols-4  gap-4 xl:items-start">
        <div className="md:bg-section-light xl:col-span-2 3xl:col-span-3  p-5 rounded-3xl md:shadow-lg md:dark:bg-section-dark 3xl:h-[950px] md:h-[750px] overflow-y-auto no-scrollbar ">
          <ControllTemperatura />
        </div>
        <div className="hidden md:flex bg-section-light px-3  py-5 rounded-3xl shadow-lg dark:bg-section-dark">
          <AddTemperatura />
        </div>
      </div>
    </div>
  );
};
export default Temperatura;
