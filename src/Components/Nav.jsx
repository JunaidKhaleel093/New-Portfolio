"use client";
import { useEffect } from "react";

export default function Navbar() {
  useEffect(() => {
    const hamburger = document.getElementById("hamburger");
    const navContainer = document.querySelector(".nav-container");

    const toggleNav = () => {
      navContainer.classList.toggle("active");
    };

    if (hamburger) {
      hamburger.addEventListener("click", toggleNav);
    }

    return () => {
      if (hamburger) {
        hamburger.removeEventListener("click", toggleNav);
      }
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="hamburger" id="hamburger">
          &#9776;
        </div>
      </div>
    </nav>
  );
}
