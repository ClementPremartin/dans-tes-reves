/* eslint-disable import/no-unresolved */
import { useState } from "react";
import section from "../data/section";
import SectionCard from "./SectionCard";

function Sections() {
  const [cards] = useState(section);

  return (
    <div>
      <h2 className="text-white font-sansita text-2xl pt-12 pb-12">
        Créations originales
      </h2>
      <div className="flex flex-col items-center w-full">
        {cards.map((card) => (
          <SectionCard card={card} />
        ))}
      </div>
    </div>
  );
}

export default Sections;
