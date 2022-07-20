import presentation from "../data/presentation";

function Home() {
  return (
    <div className="m-8 flex flex-col">
      {presentation.map((pres) => (
        <p className="font-varta pb-5 text-white">{pres.description}</p>
      ))}
    </div>
  );
}

export default Home;
