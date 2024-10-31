import React from "react";

export default function Projects() {
  return (
    <>
      <section id="projects" className="projects-section">
        <h2 className="title-heading">My Projects</h2>
        <div className="projects-container">
          <div className="card">
            <div className="card-header">
              <h4 className="intro-heading">Slider-3D</h4>
            </div>
            <div className="card-body">
              <p>
                A 3D Slider is a visually captivating carousel or slideshow that
                brings an added depth to content, creating a more immersive user
                experience. Unlike standard sliders, this 3D slider mimics
                real-world perspectives, with each slide presenting in layers
                that can rotate, tilt, zoom, or even animate as users interact
                with it. Elements may appear to float, fade in and out, or move
                along an axis.
              </p>
              <a
                href="https://junaidkhaleel093.github.io/Slider-3D/"
                className="btn project-btn"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h4 className="intro-heading">HomeHaven Website</h4>
            </div>
            <div className="card-body">
              <p>
                HomeHaven is a sleek, user-friendly e-commerce platform designed
                to offer a curated selection of high-quality furniture. The site
                features an intuitive interface that enhances the shopping
                experience, with detailed product listings, filtering options,
                and an easy checkout process. Its modern design and responsive
                layout ensure a seamless experience across devices, while
                showcasing a range of stylish and functional furniture pieces
                for various tastes and budgets.
              </p>
              <a href="#" className="btn project-btn">
                View Project
              </a>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h4 className="intro-heading">My Blog Website</h4>
            </div>
            <div className="card-body">
              <p>
                This blog is a personal space where I share insights into my
                life, projects, and passions. Featuring an 'About Me' section
                for readers to get to know me better, it also showcases images
                of my completed projects. Blog posts are organized into
                categories—tech for the latest in technology, anime for reviews
                and recommendations, and food to highlight culinary adventures.
              </p>
              <a
                href="https://junaidkhaleel093.github.io/My-Blog/"
                className="btn project-btn"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
