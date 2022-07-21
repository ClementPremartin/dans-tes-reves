/* eslint-disable import/no-unresolved */
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import SectionCard from "./SectionCard";

import "react-toastify/dist/ReactToastify.css";

function Sections() {
  const [cards, setCards] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/section`)
      .then((res) => {
        setCards(res.data);
      })
      .catch(() =>
        toast.warning(
          "Une erreur s'est produite durant le chargement des données"
        )
      );
  }, []);

  return (
    <div>
      <h2 className="text-white font-sansita text-3xl pt-20 pb-36">
        Créations originales
      </h2>
      <div className="flex flex-col items-center">
        {cards &&
          cards.map((card) => <SectionCard key={card.serie_id} card={card} />)}
      </div>
    </div>
  );
}

export default Sections;
