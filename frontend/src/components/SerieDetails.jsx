/* eslint-disable react/prop-types */
function SerieDetails({ crea }) {
  return (
    <div className="text-white">
      <h1 className="font-varta text-xl font-semibold pb-4">{`"${crea.artTitle}"`}</h1>
      <ul className="font-varta">
        <li className="pb-1">{crea.date}</li>
        <li className="pb-1">{crea.size}</li>
        <li className="pb-4">{crea.technical}</li>
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/assets/images/${
            crea.picture[0].image_url
          }`}
          alt={`${crea.picture[0].image_alt}`}
          className="w-100 rounded-xl shadow-lg mb-9 w-96"
        />
        <li>{crea.story}</li>
      </ul>
    </div>
  );
}

export default SerieDetails;
