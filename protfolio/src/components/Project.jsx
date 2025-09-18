import React from "react";
import Project1 from "../assets/Portfolio.png";

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
              <img src={Project1} alt="project1" />
            </p>
            <p class="card__desc">
              Developed a fully responsive portfolio website showcasing technical skills and projects. Implemented smooth navigation and routing using React Router for seamless SPA experience. Optimized for mobile devices with modern responsive design principles.
            </p>
            <p class="card__skills">
              <strong>Tech Used:</strong> React.js, CSS3, React Router
            </p>
            <ul class="card__links">
              <li>
                <a
                  href="https://github.com/AMARNATHAN-VEL/Protfolio"
                  target="_blank"
                  class="nowrap"
                >
                  💻 GitHub Code
                </a>
              </li>
              <li>
                <a
                  href="https://amarnathan-vel.github.io/Protfolio/"
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
              <img src="https://placehold.co/600x400" alt="project1" />
            </p>
            <p class="card__desc">
              Built a comprehensive todo application with full CRUD (Create, Read, Update, Delete) operations. Implemented efficient state management using React Hooks (useState). Added advanced features including task priority levels and local storage persistence.
            </p>
            <p class="card__skills">
              <strong>Tech Used:</strong> React.js, React Hooks, localStorage
            </p>
            <ul class="card__links">
              <li>
                <a
                  href="https://github.com/amarnathanv/todo-app"
                  target="_blank"
                  class="nowrap"
                >
                  💻 GitHub Code
                </a>
              </li>
              <li>
                <a
                  href="https://amarnathanv.github.io/todo-app"
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
              <img src="https://placehold.co/600x400" alt="project1" />
            </p>
            <p class="card__desc">
              Created dynamic product listing application consuming external REST API data. Implemented advanced features including product filtering, search functionality, and shopping cart. Designed responsive layout using modern CSS Grid and Flexbox techniques.
            </p>
            <p class="card__skills">
              <strong>Tech Used:</strong> React.js, JavaScript, CSS3, Fake Store API
            </p>
            <ul class="card__links">
              <li>
                <a
                  href="https://github.com/amarnathanv/task-manager"
                  target="_blank"
                  class="nowrap"
                >
                  💻 GitHub Code
                </a>
              </li>
              <li>
                <a
                  href="https://task-manager.netlify.app/"
                  target="_blank"
                  class="nowrap"
                >
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
