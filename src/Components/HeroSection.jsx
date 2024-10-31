import React from "react";

export default function HeroSection() {
  return (
    <>
      <section className="hero-section portfolio-content">
        <div className="hero-content">
          <div className="intro-text">
            <span className="badge">Mohammed Junaid</span>
            <h1 className="title-heading">
              <span className="highlight" id="changing-text">
                Front-End Developer
              </span>
            </h1>
            <p>
              Hi, I'm <span className="junaid">Mohammed Junaid</span>, a
              front-end developer with a passion for creating intuitive and
              responsive user interfaces. I specialize in HTML, CSS, and
              JavaScript, and have experience with frameworks like React and
              Vue.js. I love bringing ideas to life in the browser and am
              dedicated to writing clean, efficient code. Let's build something
              amazing together!
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn hire-me-btn">
                Hire Me
              </a>
              <a
                href="../CV/My-CV.pdf"
                download="../CV/My-CV.pdf"
                className="download-cv-btn"
              >
                Download CV <i className="fa-solid fa-download"></i>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src="../images/shanks.jpg" alt="MEE" />
          </div>
        </div>
      </section>
    </>
  );
}
