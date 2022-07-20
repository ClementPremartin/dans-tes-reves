/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function SectionCard({ card }) {
  return (
    <div className="bg-darkBlue opacity-75 rounded-lg mb-20 shadow-2xl w-72">
      <Link to={`/home/${card.id}`}>
        <button type="button">
          <img
            src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
              card.pictures[0].image_url
            }`}
            alt={`${card.pictures[0].image_alt}`}
            className="opacity-100 rounded-t-lg w-full object-fill"
          />
          <p className="text-white font-sansita flex justify-center text-center p-5">
            {card.artTitle}
          </p>
        </button>
      </Link>
    </div>
  );
}

export default SectionCard;
