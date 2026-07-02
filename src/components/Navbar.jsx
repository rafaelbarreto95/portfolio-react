

function Navbar() {
  return (
    <header>
    
      <nav>
        <a href="#inicio">Início</a>
        <a href="#jornada">Evoluçao profissional</a>
        <a href="#sobre">Sobre</a>
        <a href="#tecnologias">Tecnologias</a>
        <a href="#projetos">Projetos</a>
        <a href="#certificados">Certificados</a>
        <a href="#contato">Contato</a>

        <a
          href="/Rafael Barreto CV.pdf"
          download
          className="btn-cv"
        >
          Download CV
        </a>
      </nav>
    </header>
  );
}

export default Navbar;