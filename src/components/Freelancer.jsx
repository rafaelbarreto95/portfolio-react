import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaStore,
  FaTools,
  FaComments,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Landing Pages & Sites Institucionais",
    description:
      "Sites rápidos, responsivos e com identidade visual própria para apresentar sua marca ou negócio.",
  },
  {
    icon: <FaStore />,
    title: "Cardápios & Catálogos Digitais",
    description:
      "Páginas com carrinho, integração via WhatsApp e foco em conversão para delivery e pequenos negócios.",
  },
  {
    icon: <FaTools />,
    title: "Manutenção & Melhorias",
    description:
      "Ajustes, correções de bugs, novas funcionalidades e atualizações em projetos já existentes.",
  },
  {
    icon: <FaComments />,
    title: "Consultoria Técnica",
    description:
      "Orientação sobre a melhor stack, arquitetura e boas práticas para o seu projeto Front-End.",
  },
];

function Freelancer() {
  return (
    <section id="freelancer" className="freelancer">

      <div className="section-header">

        <span className="section-badge">
          Freelancer
        </span>

        <h2>
          Disponível para projetos freelancer
        </h2>

        <p>
          Além de projetos próprios, também desenvolvo soluções sob
          demanda para clientes e pequenos negócios que precisam de
          um site ou sistema moderno, responsivo e feito sob medida.
        </p>

      </div>

      <div className="freelancer-grid">

        {services.map((service, index) => (

          <motion.div
            key={index}
            className="freelancer-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >

            <div className="freelancer-icon">
              {service.icon}
            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Freelancer;