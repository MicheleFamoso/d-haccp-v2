import { useState } from "react";

const AddFornitori = () => {
  const [fornitore, setFornitore] = useState({
    nomeFornitore: "",
    sede: "",
    telefono: "",
    email: "",
    prodottiForniti: [],
  });

  const [loading, setLoading] = useState(true);

  return (
    <div>
      <h1 className="font-h text-xl font-bold text-text-secondary-light dark:text-text-primary-dark text-center text-shadow-xs mb-4">
        Aggiungi Fornitore
      </h1>
    </div>
  );
};
export default AddFornitori;
