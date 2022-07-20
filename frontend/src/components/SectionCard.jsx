/* eslint-disable react/prop-types */
function SectionCard({ card }) {
  return (
    <div className="w-40 bg-darkBlue opacity-75 rounded-lg h-60 object-contain">
      <img
        src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
          card.pictures[0].image_url
        }`}
        alt={`${card.pictures[0].image_alt}`}
        className="opacity-100"
      />
      <h1 className="text-white font-sansita flex justify-center text-center">
        {card.artTitle}
      </h1>
    </div>
  );
}

export default SectionCard;
