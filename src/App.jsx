import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Freelancer from "./components/Freelancer";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />     
      <Timeline />
      <About />
      <Technologies />
      <Projects />
      <Freelancer />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}

export default App;