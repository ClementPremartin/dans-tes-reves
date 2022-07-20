import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">Wait</Link>
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      ;
    </div>
  );
}

export default Navbar;
