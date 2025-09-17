import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <section className="header__sec">
        <div className="header__logo">
          <Link to={"/"}>
            <img src="/amar-logo.png" alt="Logo" />
          </Link>
        </div>
        <nav className="nav">
          <Link to={"/"} title="HOME">
            <i className="fa-solid fa-house"></i> <p>HOME</p>
          </Link>
          <Link to={"/aboutme"} title="ABOUT ME">
            <i className="fa-solid fa-circle-user"></i> <p>ABOUT ME</p>
          </Link>
          <Link to={"/project"} title="PROJECTS">
            <i className="fa-solid fa-check-to-slot"></i> <p>PROJECTS</p>
          </Link>
          <Link to={"/contact"} title="CONTACT ME">
            <i className="fa-solid fa-comment"></i> <p>CONTACT ME</p>
          </Link>
        </nav>
      </section>
    </header>
  );
};

export default Header;
