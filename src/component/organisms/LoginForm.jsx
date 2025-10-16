import Button from "../atoms/Button";
import FormField from "../molecules/FormField";
import ThemeToggle from "../molecules/ThemeToggle";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userName,
        password: password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Username e/o password non corretta ");
        }
        return response.text();
      })
      .then((token) => {
        console.log("Token ricevuto:", token);
        localStorage.setItem("token", token);
        try {
          const decoded = jwtDecode(token);
          localStorage.setItem("ruolo", decoded.role);
          console.log("Ruolo salvato:", decoded.role);
        } catch (err) {
          console.error("Errore nella decodifica del token:", err);
        }
        setError("");
        navigate("/");
      })
      .catch((error) => {
        console.error("Errore:", error.message);
        setError(error.message);
        setTimeout(() => {
          setError("");
        }, 5000);
      });
  };

  return (
    <div className=" flex flex-col w-10/12  3xl:w-8/12 mx-auto ">
      <div className=" bg-section-light/50 dark:bg-section-dark/70 backdrop-blur-xs p-5 rounded-3xl my-auto">
        <div className="">
          <ThemeToggle />
        </div>
        <div className="mt-2">
          <div className="mb-6 ">
            <h1 className="font-h font-medium xl:hidden  text-text-secondary-light dark:text-text-secondary-dark text-shadow-2xs text-4xl">
              d/haccp
            </h1>

            <p className="font-p  text-md lg:text-lg  mt-2 lg:mt-6 text-shadow-xs text-text-secondary-light dark:text-text-secondary-dark ">
              Bentornato! È bello rivederti: accedi e continua a gestire i tuoi
              controlli HACCP senza pensieri.
            </p>
          </div>

          <form className="flex flex-col " onSubmit={handleSubmit}>
            <FormField
              id={"username"}
              text={"Username"}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <FormField
              id={"password"}
              type={"password"}
              text={"Password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <p className="text-accent-red font-p font-bold text-md text-center animate-fade-in ">
                {error}
              </p>
            )}
            <Button className="mt-6 " variant={"accent"} text={"Accedi"} />{" "}
          </form>
          <p className="text-center font-p mt-8   text-text-secondary-light dark:text-text-secondary-dark ">
            Non hai un account?
            <button
              className="text-accent-blue-dark  font-bold ml-2 cursor-pointer"
              onClick={() => navigate("/registration")}
            >
              {" "}
              Registrati
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
