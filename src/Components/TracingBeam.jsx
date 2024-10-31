import React, { useEffect } from "react";

export default function TracingBeam() {
  useEffect(() => {
    const handleScroll = () => {
      const line = document.querySelector(".tracing-beam .line");
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY / documentHeight;

      line.style.height = scrolled * 100 + "vh";
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="tracing-beam">
      <div className="dot"></div>
      <div className="line"></div>
    </div>
  );
}
