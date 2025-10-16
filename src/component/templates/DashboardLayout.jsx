import { Outlet } from "react-router-dom";
import Sidebar from "../organisms/SideBar";
import ThemeToggle from "../molecules/ThemeToggle";

const DashboardLayout = () => {
  return (
    <div className="bg-bg-light dark:bg-bg-dark flex h-dvh">
      <div className="mt-8">
        {" "}
        <Sidebar />
      </div>

      <div className="flex-1 overflow-aut">
        <div className="justify-self-end mr-6 mt-6">
          <ThemeToggle />
        </div>
        <div className="p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;
