import axios from "axios";
import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Presentation() {
  const [presentation, setPresentation] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/presentation`)
      .then((res) => {
        setPresentation(res.data);
      })
      .catch(() =>
        toast.warning(
          "Une erreur s'est produite durant le chargement des données"
        )
      );
  }, []);

  return (
    <div className="flex flex-col">
      {presentation &&
        presentation.map((pres) => (
          <p className="font-varta pb-5 text-white">{pres.description}</p>
        ))}
    </div>
  );
}

export default Presentation;
