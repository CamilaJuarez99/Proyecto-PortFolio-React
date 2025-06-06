import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css"

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
          <div class="navbar-nav ">
            <Link className="nav-item nav-link" to="/">
              Home
            </Link>
            <Link className="nav-item nav-link" to="/contacts">
              Contacts
            </Link>
            <Link className="nav-item nav-link" to="/proyects">
              Proyects
            </Link>
            <Link className="nav-item nav-link" to="/aboutme">
              About Me
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
