import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <Link className="nav-link" to="/birds" >
          <span className="navbar-brand">Find My Bird</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/birds">
                User Sightings
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/birds/new">
                Add Sighting
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sighting">
                Recent Sightings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
