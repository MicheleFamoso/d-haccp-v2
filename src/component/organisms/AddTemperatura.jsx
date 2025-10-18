import { useEffect, useState } from "react";

const AddTemperatura = () => {
  const [controllo, setControllo] = useState({
    data: "",
    frigo: "",
    conformita: "",
    temperatura: "",
  });

  const handleAddTemperature = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:8080/temperature", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(controllo),
      });
      if (!response.ok) throw new Error("Errore nella fetch!");
      setControllo({
        data: "",
        frigo: "",
        conformita: "",
        temperatura: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return <div>ciaos</div>;
};
export default AddTemperatura;
