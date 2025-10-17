import ThemeToggle from "../molecules/ThemeToggle";
import User from "./User";

const NavBar = () => {
  return (
    <div className="flex w-11/12 pt-2 justify-end items-center gap-2">
      <User />
      <ThemeToggle />
    </div>
  );
};
export default NavBar;
