import { motion } from "framer-motion";

const timeline = [
  {
    year: "2023",
    title: "Primeiros Passos na Programação",
    description:
      "Realizei meus primeiros estudos em HTML, CSS e JavaScript, descobrindo uma nova paixão pela criação de soluções digitais.",
  },

  {
    year: "2024 - 2025",
    title: "Construindo Base Profissional",
    description:
      "Atuei na área financeira, desenvolvendo competências analíticas, organização e capacidade de resolver problemas complexos sob pressão.",
  },

  {
    year: "Março 2026",
    title: "Início da Transição de Carreira",
    description:
      "Decidi direcionar minha trajetória profissional para a tecnologia, intensificando os estudos e estabelecendo uma rotina focada em desenvolvimento de software.",
  },

  {
    year: "Maio 2026",
    title: "Desenvolvimento de Projetos Reais",
    description:
      "Criei aplicações responsivas e interativas utilizando React, JavaScript, Git e Node.js, transformando conhecimento teórico em experiência prática.",
  },

  {
    year: "Hoje",
    title: "Em Busca da Primeira Oportunidade",
    description:
      "Continuo expandindo minhas habilidades técnicas, construindo projetos cada vez mais completos e preparado para contribuir profissionalmente como desenvolvedor Front-End.",
  },
];

function Timeline() {
  return (
    <section id="jornada" className="timeline-section">

      <div className="section-header">

        <span className="section-badge">
          Minha Jornada
        </span>

        <h2>Evolução Profissional</h2>

        <p>
          Cada projeto, curso e desafio representa um
          passo importante na minha trajetória como
          desenvolvedor.
        </p>

      </div>

      <div className="timeline">

        {timeline.map((item, index) => (

          <motion.div
            key={index}
            className="timeline-item"
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -50 : 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span className="timeline-year">
                {item.year}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Timeline;