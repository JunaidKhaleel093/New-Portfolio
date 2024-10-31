import React from "react";

export default function Footer() {
  return (
    <>
      <section className="name-area">
        <h2 className="name-heading">Mohammed Junaid Ismail</h2>
      </section>
      <section>
        <div className="social-media">
          <a
            href="https://www.instagram.com/mohammed_junaid_khaleel"
            target="_blank"
            className="social-icon"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/junaidkhaleel093"
            className="social-icon"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/JunaidKhaleel093" className="social-icon">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://x.com/JunaidKhaleel96" className="social-icon">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
      </section>
      <p className="copyright">
        Copyrights &copy; Junaid Khaleel - All rights reserved
      </p>
    </>
  );
}
