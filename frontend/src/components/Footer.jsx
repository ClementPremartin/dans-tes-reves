/* eslint-disable import/no-unresolved */
import { Link } from "react-router-dom";

import LogoInsta from "@assets/logo-instagram.svg";
import LogoLetter from "@assets/letter.svg";
import Logo from "@assets/logo-dtr-dark.png";

function Footer() {
  return (
    <div className="grid grid-cols-3 grid-rows-1">
      <Link to="/home">
        <img src={Logo} alt="logo dans tes rêves" className="p-5" />
      </Link>
      <img src={LogoInsta} alt="logo instagram" className="p-5" />
      <Link to="/contact">
        <img src={LogoLetter} alt="logo letter" className="p-5" />
      </Link>
    </div>
  );
}

export default Footer;
