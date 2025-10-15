import ThemeToggle from "../molecules/ThemeToggle";
import Button from "../atoms/Button";
import FormField from "../molecules/FormField";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const Handleregister = (e) => {
    e.preventDefault();

    if (!userName || !password || !nome || !cognome || !email) {
      setError("Compila tutti i campi");
      setTimeout(() => {
        setError("");
      }, 5000);
      return;
    }
    setError("");

    fetch("http://localhost:8080/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userName,
        password: password,
        nome: nome,
        cognome: cognome,
        email: email,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nella registrazione");
        } else {
          setSuccess("Registrazione avvenuta con successo!");
          setTimeout(() => navigate("/"), 1000);
        }
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
            <h1 className="font-h font-medium xl:hidden text-text-primary-light dark:text-text-primary-dark text-shadow-2xs text-4xl">
              d/haccp
            </h1>
            <p className="font-p  text-md lg:text-lg  mt-2 lg:mt-6 text-shadow-xs text-text-primary-light dark:text-text-primary-dark ">
              Benvenuto! Crea il tuo account e inizia subito a gestire i tuoi
              controlli HACCP in modo semplice e organizzato.
            </p>
          </div>

          <form className="flex flex-col " onSubmit={Handleregister}>
            <FormField
              id={"nome"}
              text={"nome"}
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <FormField
              id={"cognome"}
              text={"cognome"}
              value={cognome}
              onChange={(e) => setCognome(e.target.value)}
            />
            <FormField
              id={"email"}
              text={"email"}
              type={"email"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
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
            <Button className="mt-6 " variant={"accent"} text={"Registrati"} />{" "}
          </form>
          {success && (
            <p className="text-accent-blue-dark font-p font-bold text-md text-center animate-fade-in">
              {success}
            </p>
          )}
          {error && (
            <p className="text-accent-red font-p font-bold text-md text-center animate-fade-in ">
              {error}
            </p>
          )}
          <p className="text-center font-p mt-8  text-text-primary-light dark:text-text-primary-dark ">
            Hai un account?
            <button
              className="text-accent-blue-dark  font-bold ml-2 cursor-pointer"
              onClick={() => navigate("/")}
            >
              {" "}
              Accedi
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
