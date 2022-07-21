import { useState, useEffect } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminForm from "./AdminForm";

function AddCreation() {
  const [section, setSection] = useState();
  const [idSelected, setIdSelected] = useState(1);

  const handleChangeSerie = (id) => {
    setIdSelected(id);
  };

  const [userCrea, setUserCrea] = useState({
    art_title: "",
    date: "",
    size: "",
    technical: "",
    story: "",
    image_url: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCrea({ ...userCrea, [name]: value });
  };

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

  const handleSubmitCrea = () => {
    if (
      userCrea.art_title === "" &&
      userCrea.date === "" &&
      userCrea.image_url === "" &&
      userCrea.size === "" &&
      userCrea.technical === "" &&
      userCrea.story === ""
    ) {
      toast.warning("Un ou plusieurs champs sont peut être vide boss...");
    } else {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/creation/${idSelected}`,
          userCrea
        )
        .then(() =>
          toast.success("Nouvelle Créa ajoutée avec succès ! Bien joué Boss !")
        )
        .catch(() =>
          toast.warning(
            "Une erreur s'est produite durant l'envoie des données. Veuillez réessayer plz."
          )
        );
    }
  };

  return (
    <div>
      <h2 className="font-varta text-white flex justify-center font-semibold text-2xl pb-5">
        Ajouter Une Création
      </h2>
      <label
        htmlFor="serie-select"
        className="text-white font-varta font-semibold"
      >
        Choisi une série:
      </label>
      <select name="select" onChange={(e) => handleChangeSerie(e.target.value)}>
        {section &&
          section.map((select) => (
            <option value={select.id}>{select.name}</option>
          ))}
      </select>
      <AdminForm
        name="art_title"
        label="Nom de l'oeuvre"
        placeholder=""
        handleChange={handleChange}
      />
      <AdminForm
        name="date"
        label="Date"
        placeholder=""
        handleChange={handleChange}
      />
      <AdminForm
        name="size"
        label="Taille"
        placeholder=""
        handleChange={handleChange}
      />
      <AdminForm
        name="technical"
        label="Technique"
        placeholder=""
        handleChange={handleChange}
      />
      <AdminForm
        name="story"
        label="Texte d'ambiance"
        placeholder=""
        handleChange={handleChange}
      />
      <div className="flex justify-center">
        <button
          type="button"
          className="px-6 py-2.5 cursor-pointer text-center text-white text-base bg-darkBlue hover:bg-opacity-90 rounded-full mt-9 mb-20"
          onClick={() => handleSubmitCrea()}
        >
          Ajouter
        </button>
      </div>
    </div>
  );
}

export default AddCreation;
