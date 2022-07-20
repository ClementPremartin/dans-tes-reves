import presentation from "../data/presentation";

function Presentation() {
  return (
    <div className="flex flex-col">
      {presentation.map((pres) => (
        <p className="font-varta pb-5 text-white">{pres.description}</p>
      ))}
    </div>
  );
}

export default Presentation;
