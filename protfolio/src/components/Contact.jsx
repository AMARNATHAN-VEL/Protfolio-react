import React from "react";

const Contact = () => {
  return (
    <section class="contact">
      <section class="contact__sec">
        <h2 class="nowrap">
          <i class="fa-solid fa-comment"></i> Contact Me
        </h2>
        <p class="contact__desc">
          Interested in working together or have a question? Feel free to reach
          out. I'm always open to new opportunities and collaborations!
        </p>
        <section class="contact-info">
          <p class="nowrap">
            <strong>Email:</strong>
            <a href="mailto:amarnathanvel@gmail.com">amarnathanvel@gmail.com</a>
          </p>
          <p>
            <strong>Phone:</strong> +91 99436 49329
          </p>
          <p>
            <strong>Location:</strong> Krishnagiri, Tamil Nadu, India
          </p>
        </section>
        <section class="social-links nowrap">
          <a href="https://github.com/AMARNATHAN-VEL" target="_blank">
            GitHub
          </a>
          |
          <a href="https://www.linkedin.com/in/amarnathanvel" target="_blank">
            LinkedIn
          </a>
        </section>
        <p class="contact__desc">
          Let’s build something awesome together. I’ll get back to you as soon
          as possible!
        </p>
      </section>
    </section>
  );
};

export default Contact;
