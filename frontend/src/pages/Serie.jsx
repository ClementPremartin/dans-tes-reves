import { useParams } from "react-router-dom";

function Serie() {
  const { id } = useParams();
  return (
    <div>
      <h1>{`Serie Page${id}`}</h1>
    </div>
  );
}

export default Serie;
