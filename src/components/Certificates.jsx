import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    { title: "HTML5", category: "Front-End", image: "/certificados/html.png" },
    { title: "CSS Intermediário", category: "Front-End", image: "/certificados/css-intermediario.png" },
    { title: "CSS Avançado", category: "Front-End", image: "/certificados/css-avancado.png" },
    { title: "JavaScript", category: "JavaScript", image: "/certificados/javascript.png" },
    { title: "JavaScript Avançado", category: "JavaScript", image: "/certificados/javascript-avancado.png" },
    { title: "Git & GitHub", category: "Versionamento", image: "/certificados/git-github.png" },
    { title: "Node.js", category: "Back-End", image: "/certificados/node.png" },

    { loading: true, title: "Próxima Certificação" },
  ];

  const totalCertificates = certificates.filter(c => !c.loading).length;

  return (
    <section id="certificados">

      <div className="section-header">
        <span className="section-badge">Certificações</span>
        <h2>Minha Jornada de Aprendizado</h2>
        <p>Certificados conquistados durante minha formação em desenvolvimento Front-End.</p>
      </div>

      <div className="certificate-stats">
        <div>
          <h3>{totalCertificates}+</h3>
          <span>Certificados</span>
        </div>

        <div>
          <h3>100%</h3>
          <span>Projetos Práticos</span>
        </div>
      </div>

      <div className="certificados-grid">

        {certificates.map((certificate, index) => {

          // CARD DE LOADING
          if (certificate.loading) {
            return (
              <motion.div
                key={index}
                className="certificate-item loading-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="loader-wrapper">
                  <div className="apple-loader">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <span key={i} style={{ "--i": i }} />
                    ))}
                  </div>
                </div>

                  <div className="certificate-info">
                    <span className="certificate-badge">Em andamento</span>
                    <h3>Nova Certificação</h3>
                  </div>
              </motion.div>
            );
          }

          // CARD NORMAL
          return (
            <motion.div
              key={index}
              className="certificate-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedCertificate(certificate)}
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                loading="lazy"
              />

              <div className="certificate-info">
                <span className="certificate-badge">
                  {certificate.category}
                </span>
                <h3>{certificate.title}</h3>
              </div>
            </motion.div>
          );
        })}

      </div>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="close-modal"
                onClick={() => setSelectedCertificate(null)}
              >
                ✕
              </button>

              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

export default Certificates;