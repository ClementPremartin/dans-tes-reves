/* eslint-disable react/jsx-props-no-spreading */
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddCreation() {
  const [section, setSection] = useState();
  const [idSelected, setIdSelected] = useState(1);

  const handleChangeSerie = (id) => {
    setIdSelected(id);
  };

  const [userCrea] = useState({
    art_title: "",
    date: "",
    size: "",
    technical: "",
    story: "",
    image_url: "",
  });

  const { handleSubmit, register } = useForm({
    mode: "onChange",
  });

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

  const onSubmitCrea = (data) => {
    const formData = new FormData();

    if (data.image_url[0]) {
      formData.append("image_url", data.image_url[0]);
    }
    formData.append("userCrea", JSON.stringify(data));
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/creation/${idSelected}`,
        formData
      )
      .then(() => {
        toast.success("Nouvelle Créa ajoutée avec succès ! Bien joué Boss !");
      })
      .catch(() =>
        toast.warning(
          "Une erreur s'est produite durant l'envoie des données. Veuillez réessayer plz."
        )
      );
  };

  return (
    <div>
      <h2 className="font-varta text-white flex justify-center font-semibold text-2xl pb-5">
        Ajouter une création
      </h2>
      <div className="flex flex-col">
        <label
          htmlFor="serie-select"
          className="text-white font-varta font-semibold flex flex-col"
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
      <form>
        <div className="flex flex-col">
          <div className="name-container flex w-full flex-col">
            <label
              htmlFor="art_title"
              className="text-white font-varta font-semibold"
            >
              Titre de l'oeuvre
              <input
                defaultValue={userCrea.art_title}
                className="w-full text-darkBlue"
                placeholder="Titre de l'oeuvre"
                {...register("art_title")}
              />
            </label>
            <label
              htmlFor="date"
              className="text-white font-varta font-semibold"
            >
              Date
              <input
                defaultValue={userCrea.date}
                className="w-full text-darkBlue"
                placeholder="Date"
                {...register("date")}
              />
            </label>
            <label
              htmlFor="size"
              className="text-white font-varta font-semibold"
            >
              Dimensions
              <input
                defaultValue={userCrea.size}
                className="w-full text-darkBlue"
                placeholder="Dimensions"
                {...register("size")}
              />
            </label>
            <label
              htmlFor="technical"
              className="text-white font-varta font-semibold"
            >
              Technique
              <input
                defaultValue={userCrea.technical}
                className="w-full text-darkBlue"
                placeholder="Technique"
                {...register("technical")}
              />
            </label>
            <label
              htmlFor="story"
              className="text-white font-varta font-semibold"
            >
              Texte d'ambiance
              <input
                defaultValue={userCrea.story}
                className="w-full text-darkBlue"
                placeholder="Texte d'ambiance"
                {...register("story")}
              />
            </label>
          </div>
          <div className="flex flex-col items-center m-8">
            <input {...register("image_url")} type="file" />
            <img
              src={
                userCrea.image_url
                  ? `${import.meta.env.VITE_BACKEND_URL}/public/avatars/${
                      userCrea.image_url
                    }`
                  : ""
              }
              alt="En attente "
              className="opacity-0"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-2.5 cursor-pointer text-center text-white text-base bg-darkBlue hover:bg-opacity-90 rounded-full mb-20 w-48"
              onClick={handleSubmit(onSubmitCrea)}
            >
              Ajouter
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddCreation;
