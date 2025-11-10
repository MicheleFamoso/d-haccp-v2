import AddDipendenti from "../organisms/addComponent/AddDipendenti";
import GetDipendenti from "../organisms/getComponent/GetDipendenti";

const Dipendenti = () => {
  return (
    <div>
      <div className="grid grid-col-1 xl:grid-cols-3 3xl:grid-cols-4  gap-4 xl:items-start">
        <div className="md:bg-section-light xl:col-span-2 3xl:col-span-3  p-5 md:rounded-3xl md:shadow-lg md:dark:bg-section-dark 3xl:h-[950px] md:h-[750px] overflow-y-auto no-scrollbar ">
          <GetDipendenti />
        </div>
        <div className="hidden md:flex w-fit bg-section-light px-3  py-5 rounded-3xl shadow-lg dark:bg-section-dark">
          <AddDipendenti />
        </div>
      </div>
    </div>
  );
};
export default Dipendenti;
