/* eslint-disable import/no-unresolved */
import { useState } from "react";
import { useParams } from "react-router-dom";

import SerieDetails from "@components/SerieDetails";
import CloudRight from "@assets/cloud-right.png";
import CloudMid from "@assets/cloud-mid.png";

import creation from "../data/creation";

function Serie() {
  const { id } = useParams();
  const [creations] = useState(creation);

  console.warn(id);

  return (
    <div className="m-8">
      <div className="w-40 absolute right-0 pt-20 opacity-80 cloud-right">
        <img src={CloudRight} alt="tiny cloud" />
      </div>
      <h1 className="text-white font-sansita text-3xl pt-12 pb-16">
        {creations[0].serie_name}
      </h1>
      {creations[0].arts.map((crea) => (
        <div key={crea.id} className="pb-28">
          <SerieDetails crea={crea} />
        </div>
      ))}
      <div className="w-48 relative opacity-80 cloud-mid">
        <img src={CloudMid} alt="tiny cloud" />
      </div>
    </div>
  );
}

export default Serie;
