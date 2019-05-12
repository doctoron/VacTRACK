import React from "react";

const NavBar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="./index.html">
      VacTrack
  </a>
    <button
      className="navbar-toggler"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            MyVac<span className="sr-only">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.who.int/campaigns/immunization-week/2018/en/" target="_blank">
            World Immunization Week
        </a>
        </li>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Resources 
        </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="http://www2.cdc.gov/nip/adultimmsched/" target ="_blank">
            Take the Adult Vaccination Quiz 
          </a> 
            <a className="dropdown-item" href="http://apps.who.int/worldimmunizationweek/" target = "_blank">
            Take the #vaccineswork Quiz
          </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">
              Something else here
          </a>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#">
            {/* Disabled */}
        </a>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
      </button>
      </form>
    </div>
  </nav>
);
export default NavBar;