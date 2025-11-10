import AddForniture from "../organisms/addComponent/AddForniture";
import GetForniture from "../organisms/getComponent/GetForniture";

const Forniture = () => {
  return (
    <div>
      <div className="grid grid-col-1 xl:grid-cols-3 3xl:grid-cols-4  gap-4 xl:items-start">
        <div className="md:bg-section-light xl:col-span-2 3xl:col-span-3  p-5 md:rounded-3xl md:shadow-lg md:dark:bg-section-dark 3xl:h-[950px] md:h-[750px] overflow-y-auto no-scrollbar ">
          <GetForniture />
        </div>
        <div className="hidden md:flex bg-section-light px-3 w-fit py-5 rounded-3xl shadow-lg dark:bg-section-dark">
          <AddForniture />
        </div>
      </div>
    </div>
  );
};
export default Forniture;
