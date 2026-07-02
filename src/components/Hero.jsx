import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const texts = [
  "Front-End Developer",
  "React Developer",
  "JavaScript Developer",
];

function Hero() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const word = texts[wordIndex];

    let index = 0;

    const interval = setInterval(() => {
      setText(word.slice(0, index + 1));
      index++;

      if (index === word.length) {
        clearInterval(interval);

        setTimeout(() => {
          setText("");
          setWordIndex(
            (prev) => (prev + 1) % texts.length
          );
        }, 2000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [wordIndex]);

  return (
    <section id="inicio" className="hero">

      <motion.div
        className="hero-content"
        initial={{
          opacity: 0,
          x: -50,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
      >
        <motion.span
          className="hero-badge"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Buscando oportunidade como Front-End Jr
        </motion.span>

        <h1>Rafael Barreto</h1>

        <h2>
          {text}
          <span className="cursor">|</span>
        </h2>

        <p>
          Desenvolvedor Front-End em transição de carreira,
          especializado em React, JavaScript e criação de
          interfaces modernas, responsivas e com foco em
          experiência do usuário.
        </p>

        <div className="hero-buttons">

          <a
            href="#projetos"
            className="btn-primary"
          >
            Ver Projetos
          </a>

          <a
            href="#certificados"
            className="btn-secondary"
          >
            📜 Certificações
          </a>

        </div>

        <div className="hero-stats">

          <div>
            <h3>4+</h3>
            <span>Projetos</span>
          </div>

          <div>
            <h3>7+</h3>
            <span>Certificados</span>
          </div>

          <div>
            <h3>100%</h3>
            <span>Responsivo</span>
          </div>

        </div>

      </motion.div>

      <motion.div
        className="hero-image-container"
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <div className="hero-glow"></div>

        <img
          src="/Rafael.jpeg"
          alt="Rafael Barreto"
          className="profile-img"
        />
      </motion.div>

      <div className="scroll-indicator">
        <span></span>
      </div>

    </section>
  );
}

export default Hero;