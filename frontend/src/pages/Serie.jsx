/* eslint-disable import/no-unresolved */
import { useState } from "react";
import { useParams } from "react-router-dom";

import SerieDetails from "@components/SerieDetails";

import creation from "../data/creation";

function Serie() {
  const { id } = useParams();
  const [creations] = useState(creation);

  console.warn(id);

  return (
    <div className="m-8">
      <h1 className="text-white font-sansita text-3xl pt-12 pb-16">
        {creations[0].serie_name}
      </h1>
      {creations[0].arts.map((crea) => (
        <div className="pb-28">
          <SerieDetails crea={crea} />
        </div>
      ))}
    </div>
  );
}

export default Serie;
