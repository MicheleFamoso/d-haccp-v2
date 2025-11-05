import AddPulizia from "../organisms/addComponent/AddPulizia";
import GetPulizia from "../organisms/getComponent/GetPulizia";

const Pulizia = () => {
  return (
    <div>
      <div className="grid grid-col-1 xl:grid-cols-3 3xl:grid-cols-4  gap-4 xl:items-start">
        <div className="bg-section-light xl:col-span-2 3xl:col-span-3  p-5 rounded-3xl shadow-lg dark:bg-section-dark 3xl:h-[800px] h-[750px] overflow-y-auto no-scrollbar ">
          <GetPulizia />
        </div>
        <div className="bg-section-light px-3  py-5 rounded-3xl shadow-lg dark:bg-section-dark">
          <AddPulizia />
        </div>
      </div>
    </div>
  );
};

export default Pulizia;
