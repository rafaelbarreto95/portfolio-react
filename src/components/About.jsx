import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";

function About() {
  return (
    <section id="sobre" className="about">

      <div className="about-header">

        <span className="section-badge">
          Sobre Mim
        </span>

        <h2>
          Transformando ideias em
          experiências digitais modernas
        </h2>

      </div>

      <div className="about-container">

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <p>
            Sou Rafael Barreto, desenvolvedor Front-End
            em transição de carreira, apaixonado por
            tecnologia e pela criação de interfaces que
            unem design, performance e experiência do usuário.
          </p>

          <p>
            Atualmente trabalho com HTML, CSS,
            JavaScript, React, Git e Node.js,
            desenvolvendo projetos responsivos,
            interativos e focados em boas práticas.
          </p>

          <p>
            Meu objetivo é contribuir em equipes que
            valorizem aprendizado contínuo, inovação
            e desenvolvimento de produtos digitais
            que gerem impacto real.
          </p>

        </motion.div>

        <motion.div
          className="about-cards"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <div className="about-card">
            <FaCode />
            <h3>Clean Code</h3>

            <p>
              Código organizado,
              reutilizável e escalável.
            </p>
          </div>

          <div className="about-card">
            <FaLaptopCode />
            <h3>UI Responsiva</h3>

            <p>
              Experiências consistentes
              para qualquer dispositivo.
            </p>
          </div>

          <div className="about-card">
            <FaRocket />
            <h3>Performance</h3>

            <p>
              Aplicações rápidas
              e focadas em usabilidade.
            </p>
          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default About;