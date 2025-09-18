import React from "react";
import Project1 from "../assets/Portfolio.png";
import Project2 from "../assets/Todo.png";

const Project = () => {
  return (
    <main>
      <section class="projects">
        <h2 class="project__title">
          <i class="fa-solid fa-check-to-slot"></i> MY PROJECTS
        </h2>
        <p class="project__desc">
          Here are some of the frontend projects I've built to practice my
          skills and explore real-world problems.
        </p>
        <section class="projects__sec">
          <div class="card">
            <h3 class="card__title">Personal Portfolio Website</h3>
            <p class="card__img">
              <img src={Project1} alt="project1-img" />
            </p>
            <p class="card__desc">
              Developed a fully responsive portfolio website showcasing
              technical skills and projects. Implemented smooth navigation and
              routing using React Router for seamless SPA experience. Optimized
              for mobile devices with modern responsive design principles.
            </p>
            <p class="card__skills">
              <strong>Tech Used:</strong> React.js, CSS3, React Router
            </p>
            <ul class="card__links">
              <li>
                <a
                  href="https://github.com/AMARNATHAN-VEL/Protfolio-react/tree/main/protfolio"
                  target="_blank"
                  class="nowrap"
                >
                  💻 GitHub Code
                </a>
              </li>
              <li>
                <a
                  href="https://amarnathanvel.netlify.app"
                  target="_blank"
                  class="nowrap"
                >
                  🌐 Live Demo
                </a>
              </li>
            </ul>
          </div>
          <div class="card">
            <h3 class="card__title">Task Management Application</h3>
            <p class="card__img">
              <img src={Project2} alt="project2-img" />
            </p>
            <p class="card__desc">
              Developed a responsive task management web application with
              features to create, complete, and delete tasks, ensuring smooth
              user interaction through DOM manipulation. Implemented
              localStorage to provide persistent task data across browser
              sessions without external databases.
            </p>
            <p class="card__skills">
              <strong>Tech Used:</strong> HTML5, CSS3, JavaScript (ES6+),
              localStorage
            </p>
            <ul class="card__links">
              <li>
                <a
                  href="https://github.com/AMARNATHAN-VEL/TO-DO-List"
                  target="_blank"
                  class="nowrap"
                >
                  💻 GitHub Code
                </a>
              </li>
              <li>
                <a
                  href="https://amarnathan-vel.github.io/TO-DO-List/"
                  target="_blank"
                  class="nowrap"
                >
                  🌐 Live Demo
                </a>
              </li>
            </ul>
          </div>
          <div class="card">
            <h3 class="card__title">E-commerce Product Showcase</h3>
            <p class="card__img">
              <img src="https://placehold.co/600x400" alt="project3-img" />
            </p>
            <p class="card__desc">
              Created dynamic product listing application consuming external
              REST API data. Implemented advanced features including product
              filtering, search functionality, and shopping cart. Designed
              responsive layout using modern CSS Grid and Flexbox techniques.
            </p>
            <p class="card__skills">
              <strong>Tech Used:</strong> React.js, JavaScript, CSS3, Fake Store
              API
            </p>
            <ul class="card__links">
              <li>
                <a href="#" target="_blank" class="nowrap">
                  💻 GitHub Code
                </a>
              </li>
              <li>
                <a href="#" target="_blank" class="nowrap">
                  🌐 Live Demo
                </a>
              </li>
            </ul>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Project;
