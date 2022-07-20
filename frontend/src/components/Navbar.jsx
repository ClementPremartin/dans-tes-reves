import { Link } from "react-router-dom";
import { useState } from "react";
import { slide as Menu } from "react-burger-menu";

function Navbar() {
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  const closeMenu = () => {
    setIsOpenBurger(true);
  };

  return (
    <div>
      <Menu right isOpen={isOpenBurger}>
        <nav nav>
          <Link to="/" className="menu-item" onClick={() => closeMenu()}>
            Wait
          </Link>
          <Link to="/home" className="menu-item" onClick={() => closeMenu()}>
            Home
          </Link>
          <Link to="/contact" className="menu-item" onClick={() => closeMenu()}>
            Contact
          </Link>
        </nav>
      </Menu>
    </div>
  );
}

export default Navbar;
