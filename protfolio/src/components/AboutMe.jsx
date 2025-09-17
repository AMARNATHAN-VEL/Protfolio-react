import React from "react";
import profileImg2 from "../assets/amar-profile2.png"
import Resume from "../assets/Amarnathan_V_Resume.pdf"

const AboutMe = () => {
  return (
    <section id="aboutme" className="aboutme">
      <section className="aboutme__con">
        <h2>
          <i className="fa-solid fa-circle-user"></i> ABOUT ME
        </h2>
        <section className="aboutme__sec">
          <section className="aboutme__left">
            <img src={profileImg2} alt="amar-image2" />
          </section>
          <section className="aboutme__right">
            <p>
              I'm Amarnathan, a passionate and aspiring
              <strong>Frontend Web Developer</strong> from Krishnagiri, Tamil
              Nadu. I recently completed my Bachelor's degree in Computer
              Science from Anna University Regional Campus, Coimbatore (2025).
            </p>
            <p>
              I specialize in building responsive, accessible, and visually
              appealing web interfaces using
              <strong>HTML5, CSS3, JavaScript</strong>,and modern tools. I'm
              familiar with
              <strong>Git, GitHub, Chrome DevTools, and React.js</strong>.
            </p>
            <p>
              My goal is to create user-friendly websites that not only look
              great but also provide a smooth user experience across all
              devices. I enjoy learning new technologies and improving my skills
              through hands-on projects and collaboration.
            </p>
            <p>
              Outside of coding, I love watching anime, exploring design
              inspiration, and staying up to date with web development trends.
            </p>
            <ul className="aboutme__buttons">
              <li className="aboutme__resume-btn">
                <a href={Resume} download>
                  Resume <i className="fa-solid fa-circle-down"></i>
                </a>
              </li>
              <li className="aboutme__social-icon">
                <a href="https://www.linkedin.com/in/amarnathanvel" target="_blank">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li className="aboutme__social-icon">
                <a href="https://github.com/AMARNATHAN-VEL" target="_blank">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </section>
  );
};

export default AboutMe;
