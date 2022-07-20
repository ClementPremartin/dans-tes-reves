/* eslint-disable import/no-unresolved */
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

import "@components/navbar.css";

function Navbar() {
  return (
    <div>
      <Menu className="bm-burger-bars bm-burger-button bm-burger-bars-hover bm-cross bm-menu-wrap bm-menu bm-morph-shape bm-item-list bm-item">
        <nav>
          <ul className="flex flex-col">
            <li>
              <Link to="/" className="menu-item">
                Wait
              </Link>
            </li>
            <li>
              <Link to="/home" className="menu-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" className="menu-item">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </Menu>
    </div>
  );
}

export default Navbar;
