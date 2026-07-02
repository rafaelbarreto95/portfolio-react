import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";

const technologies = [
  {
    icon: <FaHtml5 />,
    title: "HTML5",
    level: "Intermediário",
    description:
      "Estruturação semântica e acessível."
  },

  {
    icon: <FaCss3Alt />,
    title: "CSS3",
    level: "Intermediário",
    description:
      "Layouts modernos e responsivos."
  },

  {
    icon: <FaJs />,
    title: "JavaScript",
    level: "Básico",
    description:
      "Lógica, DOM e aplicações dinâmicas."
  },

  {
    icon: <FaReact />,
    title: "React",
    level: "Básico",
    description:
      "Componentização e SPA modernas."
  },

  {
    icon: <FaNodeJs />,
    title: "Node.js",
    level: "Básico",
    description:
      "APIs e integração backend."
  },

  {
    icon: <FaGitAlt />,
    title: "Git",
    level: "Intermediário",
    description:
      "Controle de versão profissional."
  },

  {
    icon: <FaGithub />,
    title: "GitHub",
    level: "Intermediário",
    description:
      "Versionamento e deploy."
  },
];

function Technologies() {
  return (
    <section
      id="tecnologias"
      className="technologies"
    >

      <div className="section-header">

        <span className="section-badge">
          Tecnologias
        </span>

        <h2>
          Ferramentas que utilizo para
          transformar ideias em produtos digitais
        </h2>

      </div>

      <div className="tech-grid">

        {technologies.map((tech, index) => (

          <motion.div
            key={index}
            className="tech-card"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: index * 0.1,
            }}
          >

            <div className="tech-icon">
              {tech.icon}
            </div>

            <h3>{tech.title}</h3>

            <span className="tech-level">
              {tech.level}
            </span>

            <p>
              {tech.description}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Technologies;  