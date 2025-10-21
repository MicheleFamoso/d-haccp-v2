import AddTemperatura from "../organisms/AddTemperatura";
import ControllTemperatura from "../organisms/ControllTemperatura";

const Temperatura = () => {
  return (
    <div className="grid grid-col-1 xl:grid-cols-3 3xl:grid-cols-4  gap-4 xl:items-start">
      <div className="bg-section-light xl:col-span-2 3xl:col-span-3  p-5 rounded-3xl shadow-lg dark:bg-section-dark 3xl:h-[800px] h-[600px] overflow-y-auto ">
        <ControllTemperatura />
      </div>
      <div className="bg-section-light px-3  py-5 rounded-3xl shadow-lg dark:bg-section-dark">
        <AddTemperatura />
      </div>
    </div>
  );
};
export default Temperatura;
