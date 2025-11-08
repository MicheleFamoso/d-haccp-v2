import AddDashboard from "../organisms/addComponent/AddDashboard";
import Azienda from "../organisms/getComponent/Azienda";
import GetDash from "../organisms/getComponent/GetDash";

const Home = () => {
  return (
    <div className="grid grid-col-1   xl:grid-cols-3 3xl:grid-cols-4  md:gap-4 xl:items-start">
      <div className="md:bg-section-light xl:col-span-2 3xl:col-span-3   md:rounded-3xl md:shadow-lg md:dark:bg-section-dark 3xl:h-[950px] md:h-[750px] overflow-y-auto no-scrollbar">
        <GetDash />
      </div>
      <div className="hidden md:flex flex-col w-fit gap-5">
        <Azienda />
        <AddDashboard />
      </div>
    </div>
  );
};
export default Home;
