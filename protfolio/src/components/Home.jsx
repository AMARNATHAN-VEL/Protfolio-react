import React from "react";
import profileImg1 from "../assets/amar-profile1.png"
import {Link} from "react-router-dom"

const Home = () => {
  return (
    <main>
    <section className="hero">
      <section className="hero__left">
        <h1 className="nowrap">Hi, I'm Amarnathan</h1>
        <h3 className="hero__sub-title nowrap">Frontend Web Developer</h3>
        <p>
          Welcome to my personal portfolio! I'm a self-driven frontend developer
          with a focus on writing clean, semantic HTML and crafting responsive
          UIs using modern CSS and JavaScript. I love bringing web designs to
          life and continuously learning new web technologies.
        </p>
        <div className="hero__buttons">
            <Link to={"/project"} className="hero__btn-link nowrap">View My Work</Link>
            <Link to={"/contact"} className="hero__btn-link nowrap">Contact Me</Link>
        </div>
      </section>

      <section className="hero__right">
        <div className="hero__img">
          <img
            src={profileImg1}
            alt="Amar-Image"
          />
        </div>
      </section>
    </section>
    </main>
  );
};

export default Home;
