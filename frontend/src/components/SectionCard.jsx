/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function SectionCard({ card }) {
  return (
    <div>
      <div className="w-40 bg-darkBlue opacity-75 rounded-lg mb-10">
        <Link to={`/home/${card.id}`}>
          <button type="button">
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
                card.pictures[0].image_url
              }`}
              alt={`${card.pictures[0].image_alt}`}
              className="opacity-100 rounded-t-lg"
            />
            <h1 className="text-white font-sansita flex justify-center text-center">
              {card.artTitle}
            </h1>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SectionCard;
