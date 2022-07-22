/* eslint-disable no-plusplus */
import { useState, useEffect } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UpdatePresentation() {
  const [getPresnetation, setGetPresentation] = useState();

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    const provisoirPres = [...getPresnetation];
    provisoirPres[index][name] = value;
    setGetPresentation(provisoirPres);
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/presentation`)
      .then((res) => {
        setGetPresentation(res.data);
      })
      .catch(() =>
        toast.warning(
          "Une erreur s'est produite durant l'envoie des données. Veuillez réessayer plz."
        )
      );
  }, []);
  const handleClickUpdate = () => {
    const data = getPresnetation;
    for (let i = 0; i < data.length; i++) {
      axios
        .put(
          `${import.meta.env.VITE_BACKEND_URL}/presentation/${data[i].id}`,
          data[i]
        )
        .then(() => {
          toast.success(
            `Paragraphe ${data[i].id} modifié avec succès! Bien joué Boooss`
          );
        })
        .catch(() =>
          toast.warning(
            "Une erreur s'est produite durant le chargement des données"
          )
        );
    }
  };

  return (
    <div>
      <h5 className="font-varta text-white flex justify-center font-semibold text-2xl pb-5">
        Modifier la présentation
      </h5>
      <form className="">
        {getPresnetation &&
          getPresnetation.map((pres) => (
            <label key={pres.id} type="name" className="text-white font-varta">
              {`Description ${pres.id}`}
              <input
                type="text"
                id="name"
                name="description"
                className="w-full rounded-full bg-darkBlue opacity-75 p-2 text-left"
                placeholder={pres.description}
                onChange={(e) => handleChange(e, pres.id - 1)}
              />
            </label>
          ))}
      </form>
      <div className="flex justify-center">
        <button
          type="button"
          className="px-6 py-2.5 cursor-pointer text-center text-white text-base bg-darkBlue hover:bg-opacity-90 rounded-full mt-12 mb-20 w-48"
          placeholder=""
          onClick={() => handleClickUpdate()}
        >
          Modifier
        </button>
      </div>
    </div>
  );
}

export default UpdatePresentation;
