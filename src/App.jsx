import "./App.css";
import Navbar from "./Components/Navbar";
import Nav from "./Components/Nav";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import TracingBeam from "./Components/TracingBeam";

function App() {
  return (
    <>
      <Navbar />
      <Nav />
      <HeroSection />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <TracingBeam />
      <Footer />
    </>
  );
}

export default App;
