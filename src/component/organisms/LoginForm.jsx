import Button from "../atoms/Button";
import FormField from "../molecules/FormField";
import ThemeToggle from "../molecules/ThemeToggle";

const LoginForm = () => {
  return (
    <div className=" flex flex-col w-10/12 md:w-7/12 mx-auto static ">
      <div>
        <div className="justify-items-end mt-8">
          <ThemeToggle />
        </div>
        <div className="mt-12">
             <div className="mb-6 ">
          <h1 className="font-h font-medium text-text-secondary-light dark:text-text-secondary-dark text-4xl">
            d/haccp
          </h1>
          <p className="font-p text-md pr-4 mt-2 text-text-tertiary-light dark:text-text-secondary-dark">
            Bentornato! È bello rivederti: accedi e continua a gestire i tuoi
            controlli HACCP senza pensieri.
          </p>
        </div>

        <form className="flex flex-col " action="">
          <FormField text={"Username"} />
          <FormField type={"password"} text={"Password"} />
          <div className="self-end mt-2">
            <Button
            variant={"accent"}
            text={"Accedi"} />
          </div>
        </form>
      </div>
        </div>
       
    </div>
  );
};

export default LoginForm;
