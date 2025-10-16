import { Outlet } from "react-router-dom";
import Sidebar from "../organisms/SideBar";
import ThemeToggle from "../molecules/ThemeToggle";
import NavBar from "../organisms/NavBar";

const DashboardLayout = () => {
  return (
    <div className="bg-bg-light dark:bg-bg-dark min-h-screen">
      <NavBar />
      <div className="flex ">
        <Sidebar />

        <div className=" px-10 flex-1 mt-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;
