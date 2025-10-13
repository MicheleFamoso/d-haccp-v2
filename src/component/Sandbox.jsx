import Button from "./atoms/Button";
import SearchBar from "./atoms/SearchBar";
import ThemeToggle from "./ThemeToggle";

const Sandbox = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center    bg-bg-light dark:bg-bg-dark ">
      <div className=" flex flex-col mx-auto p-4 rounded-4xl shadow-md  bg-section-light dark:bg-section-dark w-6/12">
        <div className="mb-5">
          <ThemeToggle />
        </div>{" "}
        <h2 className="font-h text-4xl dark:text-white">Ciao Cioa</h2>
        <h1 className="dark:text-text-secondary-dark text-text-secondary-light p-4 font-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quam,
          magni, u xzvcsdVfst excepturi consequuntur maxime deserunt neque
          adipisci est, aperiam minima consectetur! Nostrum provident fuga hic
          magnam nam ipsa tempora!
        </h1>
        <Button
        variant="secondary"
        text={"      Prova"}
        ></Button>
      </div>
      <div className="m-auto">
       <SearchBar
       placeholder={"Ciao ciao"}
       />
      </div>
    </div>
  );
};
export default Sandbox;
