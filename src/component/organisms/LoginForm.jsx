import Button from "../atoms/Button";
import FormField from "../molecules/FormField";
import ThemeToggle from "../molecules/ThemeToggle";

const LoginForm = () => {
  return (
    <div className=" flex flex-col w-10/12  3xl:w-8/12 mx-auto ">
      <div className=" bg-section-light/50 dark:bg-section-dark/70 backdrop-blur-xs p-5 rounded-3xl my-auto">
        <div className="">
          <ThemeToggle />
        </div>
        <div className="mt-2">
          <div className="mb-6 ">
            <h1 className="font-h font-medium xl:hidden text-text-primary-light dark:text-text-primary-dark text-shadow-2xs text-4xl">
              d/haccp
            </h1>
            <p className="font-p text-md lg:text-lg  mt-2 lg:mt-6 text-shadow-xs text-text-primary-light dark:text-text-primary-dark ">
              Bentornato! È bello rivederti: accedi e continua a gestire i tuoi
              controlli HACCP senza pensieri.
            </p>
          </div>

          <form className="flex flex-col " action="">
            <FormField id={"username"} text={"Username"} />
            <FormField id={"password"} type={"password"} text={"Password"} />
            <div className="self-end mt-2">
              <Button variant={"accent"} text={"Accedi"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
