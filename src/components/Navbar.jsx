import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header>
      <nav>
        <button
          className="nav-toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="#inicio" onClick={closeMenu}>Início</a>
          <a href="#jornada" onClick={closeMenu}>Evolução profissional</a>
          <a href="#sobre" onClick={closeMenu}>Sobre</a>
          <a href="#tecnologias" onClick={closeMenu}>Tecnologias</a>
          <a href="#projetos" onClick={closeMenu}>Projetos</a>
          <a href="#freelancer" onClick={closeMenu}>Freelancer</a>
          <a href="#certificados" onClick={closeMenu}>Certificados</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>

          <a
            href="./public/Rafael-Barreto-CV.pdf"
            download
            className="btn-cv"
            onClick={closeMenu}
          >
            Download CV
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;