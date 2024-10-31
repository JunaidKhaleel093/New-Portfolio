import React from "react";

export default function About() {
  return (
    <>
      <section id="about" className="about-section">
        <h2 className="title-heading">About Me</h2>
        <div className="about-content">
          <div className="intro-card">
            <h3 className="intro-heading">My Introduction</h3>
            <p>
              I'm a passionate front-end developer with a talent for creating
              UIs that are easy to use and responsive. My topics of interest are
              designing smooth, mobile-friendly digital experiences with HTML,
              CSS, and JavaScript. My mission is to close the gap between
              technology and design by enabling creative ideas to be created
              online.
            </p>
            <a
              href="../CV/My-CV.pdf"
              download="../CV/My-CV.pdf"
              className="download-cv-btn"
            >
              Download CV <i className="fa-solid fa-download"></i>
            </a>
          </div>
          <div className="hobbies-section">
            <h3 className="intro-heading">Hobbies and Interest</h3>
            <p>
              When I'm not coding, I love to play Badminton or watch Anime.
              These activities keep me creative and balanced, allowing me to
              bring fresh perspectives to my work. Whether it's playing
              Badminton, or watching Anime, I find joy in learning and
              challenging myself in new ways.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
