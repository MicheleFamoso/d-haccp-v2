import ThemeToggle from "../molecules/ThemeToggle";
import User from "../molecules/User";

const NavBar = () => {
  return (
    <div className="flex  pt-2 justify-end-safe">
      <User />
      <ThemeToggle />
    </div>
  );
};
export default NavBar;
