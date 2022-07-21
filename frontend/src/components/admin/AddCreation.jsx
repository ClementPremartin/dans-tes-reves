import { useState, useEffect } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddCreation() {
  const [section, setSection] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/sectionall`)
      .then((res) => {
        setSection(res.data);
      })
      .catch(() =>
        toast.warning(
          "Une erreur s'est produite durant le chargement des données"
        )
      );
  }, []);

  console.warn(section);

  return <div>coucou</div>;
}

export default AddCreation;
