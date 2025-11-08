import { Outlet } from "react-router-dom";
import Sidebar from "../organisms/SideBar";
import ThemeToggle from "../molecules/ThemeToggle";
import NavBar from "../organisms/NavBar";

const DashboardLayout = () => {
  return (
    <div className="bg-bg-light dark:bg-bg-dark min-h-screen">
      <div className="hidden md:flex justify-center">
        <NavBar />
      </div>

      <div className="flex ">
        <Sidebar />

        <div className=" md:px-10 px-3 flex-1 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;
