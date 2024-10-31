import React from "react";
import { SiExpress } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaPython } from "react-icons/fa";

export default function Skills() {
  return (
    <>
      <section id="skills" className="skills-section">
        <h2 className="title-heading">Skills</h2>
        <div className="skills-content">
          <div className="bars">
            <div className="skills">
              <div className="card">
                <div className="card-header">
                  <h4 className="intro-heading">Frontend</h4>
                </div>
                <div className="card-body">
                  <ul className="skill-list">
                    <li>
                      <i className="fa-brands fa-html5"></i> HTML
                      <div className="skill-bar">
                        <div
                          className="skill-level skill-level-html"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <i className="fa-brands fa-css3"></i> CSS
                      <div className="skill-bar">
                        <div
                          className="skill-level skill-level-css"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <i className="fa-brands fa-js"></i> JavaScript
                      <div className="skill-bar">
                        <div
                          className="skill-level skill-level-js"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <i className="fa-brands fa-bootstrap"></i> Bootstrap
                      <div className="skill-bar">
                        <div
                          className="skill-level skill-level-bootstrap"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <span
                        className="iconify"
                        data-icon="mdi:tailwind"
                        data-inline="false"
                      ></span>{" "}
                      Tailwind
                      <div className="skill-bar">
                        <div
                          className="skill-level skill-level-tailwind"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Libraries Skills Card */}

              <div className="card">
                <div className="card-header">
                  <h4 className="intro-heading">Libraries</h4>
                </div>
                <div className="card-body">
                  <ul className="skill-list">
                    <li>
                      <span
                        className="iconify"
                        data-icon="mdi:jquery"
                        data-inline="false"
                      ></span>{" "}
                      jQuery
                      <div className="skill-bar">
                        <div
                          className="skill-level skill-level-jquery"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <SiVite /> Vite + React
                      <div className="skill-bar">
                        <div
                          className="skill-level skill-level-vite"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <i className="fa-brands fa-react"></i> React
                      <div className="skill-bar">
                        <div
                          className="skill-level skill-level-react"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <SiNextdotjs /> Next.js
                      <div className="skill-bar">
                        <div
                          className="skill-level skill-level-nextjs"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Backend Skills Card */}

              <div className="card">
                <div className="card-header">
                  <h4 className="intro-heading">Backend</h4>
                </div>
                <div className="card-body">
                  <ul className="skill-list">
                    <li>
                      <i className="fa-brands fa-node-js"></i> Node.JS
                      <div className="skill-bar">
                        <div
                          className="skill-level skill-level-nodejs"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <SiExpress /> Express.js
                      <div className="skill-bar">
                        <div
                          className="skill-level skill-level-express"
                          style={{ width: "50%" }}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <SiMongodb /> MongoDB{" "}
                      <i className="fa-solid fa-xmark"></i>
                      <div className="skill-bar">
                        <div
                          className="skill-level skill-level-mongoDB"
                          style={{ width: "10%" }}
                        ></div>
                      </div>
                    </li>
                    <li>
                      <FaPython /> Python <i className="fa-solid fa-xmark"></i>
                      <div className="skill-bar">
                        <div
                          className="skill-level skill-level-python"
                          style={{ width: "10%" }}
                        ></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
