import { useState, useEffect } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DeleteCreation() {
  const [section, setSection] = useState();
  const [selectId, setIdSelected] = useState(1);
  const [selectArtId, setSelectArtId] = useState(1);
  const [arts, setArts] = useState([]);

  const handleChangeSerie = (id) => {
    setIdSelected(id);
  };

  const handleChangeArtId = (id) => {
    setSelectArtId(parseInt(id, 10));
  };

  const handleClickDelete = () => {
    axios
      .delete(
        `${import.meta.env.VITE_BACKEND_URL}/creation/${
          arts[selectArtId - 1].id
        }`
      )
      .then(() => {
        toast.success(
          `${
            arts[selectArtId - 1].art_title
          } supprimée avec succès! Bien joué Boooss`
        );
      })
      .catch(() =>
        toast.warning(
          "Une erreur s'est produite durant le chargement des données"
        )
      );
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
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/creation`)
      .then((res) => {
        setArts(res.data);
      })
      .catch(() =>
        toast.warning(
          "Une erreur s'est produite durant le chargement des données"
        )
      );
  }, [arts]);

  return (
    <div>
      <h3 className="font-varta text-white flex justify-center font-semibold text-2xl pb-5">
        Supprimer une création
      </h3>
      <div>
        <label
          htmlFor="serie-select"
          className="text-white font-varta font-semibold"
        >
          Choisi une série:
        </label>
        <select
          name="select"
          onChange={(e) => handleChangeSerie(e.target.value)}
        >
          {section &&
            section.map((select) => (
              <option key={select.id} value={select.id}>
                {select.name}
              </option>
            ))}
        </select>
      </div>
      <label
        htmlFor="serie-select"
        className="text-white font-varta font-semibold"
      >
        Choisi une oeuvre:
      </label>
      <select name="select" onChange={(e) => handleChangeArtId(e.target.value)}>
        {arts &&
          arts
            .filter((crea) => crea.series_id === parseInt(selectId, 10))
            .map((crea) => (
              <option key={crea.id} value={crea.id}>
                {crea.art_title}
              </option>
            ))}
      </select>
      <button
        type="button"
        className="px-6 py-2.5 cursor-pointer text-center text-white text-base bg-darkBlue hover:bg-opacity-90 rounded-full mt-9 mb-20 w-48"
        onClick={() => handleClickDelete()}
      >
        Supprimer
      </button>
    </div>
  );
}

export default DeleteCreation;
