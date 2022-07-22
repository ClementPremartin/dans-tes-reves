import { useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddSerie() {
  const [userSerie, setUserSerie] = useState({
    name: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserSerie({ ...userSerie, [name]: value });
  };

  const onSubmitSerie = () => {
    const serieName = userSerie.name;

    if (userSerie.name === "") {
      toast.warning("Il faut remplir le champ boss...");
    } else {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/section`, {
          name: serieName,
        })
        .then(() => {
          setUserSerie({ name: "" });
          toast.success("Nouvelle Créa ajoutée avec succès ! Bien joué Boss !");
        })
        .catch(() =>
          toast.warning(
            "Une erreur s'est produite durant l'envoie des données. Veuillez réessayer plz."
          )
        );
    }
  };
  return (
    <div>
      <div className="font-varta text-white flex justify-center font-semibold text-2xl pb-5">
        <h3>Ajouter une série</h3>
      </div>
      <div className="flex flex-col">
        <form className="">
          <label type="name" className="text-white font-varta">
            Série
            <input
              type="text"
              id="namefds"
              name="name"
              required
              className="w-full rounded-full bg-darkBlue opacity-75 p-2 text-left"
              onChange={(e) => handleChange(e)}
              value={userSerie.name}
            />
          </label>
        </form>
        <div className="flex justify-center">
          <button
            type="button"
            className="px-6 py-2.5 cursor-pointer text-center text-white text-base bg-darkBlue hover:bg-opacity-90 rounded-full mt-12 mb-20 w-48"
            onClick={() => onSubmitSerie()}
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddSerie;
