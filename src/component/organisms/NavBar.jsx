import ThemeToggle from "../molecules/ThemeToggle";
import User from "./User";

const NavBar = () => {
  return (
    <div className=" p-2 gap-2">
      <div className="flex items-center   gap-2 bg-section-light shadow-xs p-2 rounded-4xl dark:bg-section-dark ">
        <User />
        <ThemeToggle />
      </div>
    </div>
  );
};
export default NavBar;
