import { motion } from "framer-motion";

const projects = [
  {
    title: "Lin Kuei Experience",
    image: "/projetos/lin-kuei.jpg",
    description:
      "Experiência imersiva inspirada no universo Mortal Kombat.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React"
    ],

    demo:
      "https://rafaelbarreto95.github.io/lin-kuei-experience/",

    github:
      "https://github.com/rafaelbarreto95/lin-kuei-experience",
  },


  {
    title: "Mario & Luigi Plumbing",
    image: "/projetos/mario.jpg",
    description:
      "Site institucional moderno e responsivo, inspirado em Marios Bros.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    demo:
      "https://marioeluigiplumbing.netlify.app/",

    github:
      "https://github.com/rafaelbarreto95/marioeluigiplumbing",
  },
  {
    title: "Quick Notes",
    image: "/projetos/quick-notes.png",
    description:
      "Aplicação de gerenciamento de tarefas com CRUD completo, calendário interativo e sistema de prioridades.",

    technologies: [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    demo:
      "https://creatingquicknotes.netlify.app/",

    github:
      "https://github.com/rafaelbarreto95/Dashboard",
  },
  {
    title: "Império Burguer",
    image: "/projetos/imperio-burguer.png",
    description:
      "Cardápio digital com carrinho de compras, cálculo automático de pedidos e integração com WhatsApp.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript"
    ],

    demo:
      "https://lanchonetedelivery.netlify.app/",

    github:
      "https://github.com/rafaelbarreto95/Lanchonte",
  },
  {
    title: "Inspired apple",
    image: "/projetos/inspired-apple.png",
    description:
      "Página inspirada no design da Apple, com foco em simplicidade e elegância complementada por animações suaves e interações intuitivas.",
    technologies: [
      "React",
      "CSS",
      "TypeScript"
    ],

    demo:
      "https://inspirado-na-maca-mordida.netlify.app/",

    github:
      "https://github.com/rafaelbarreto95/apple-inspired",
  },

  {
    title: "Ateliê Sabrina Barreto",
    image: "/projetos/atelie-sabrina-barreto.png",
    description:
      "Desenvolvimento de um website moderno e responsivo para um ateliê de crochê artesanal, com foco em fortalecer a presença digital da marca, destacar seus produtos e facilitar o contato para encomendas.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript"
    ],

    demo:
      "https://atelie-sabrina-barreto.netlify.app/",

    github:
      "https://github.com/rafaelbarreto95/altelie-sabrina-barreto",
  },
];

function Projects() {
  return (
    <section id="projetos">

      <h2>Projetos</h2>

      <div className="projects-grid">

        {projects.map((project) => (
          <motion.div
            key={project.title}
            className="project-card"
            whileHover={{
              scale: 1.03,
              y: -10,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <img
              src={project.image}
              alt={project.title}
            />

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">

                {project.technologies.map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}

              </div>

              <div className="buttons">

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Projeto
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>

              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Projects;