import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-brand">

        
          <h3>Rafael Barreto</h3>

          <p>
            Front-End Developer especializado em
            criar interfaces modernas, responsivas
            e experiências digitais de alta qualidade.
          </p>
        </div>

        <div className="footer-social">

          <a
            href="https://github.com/rafaelbarreto95"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/rafael-barreto-silva/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://wa.me/5511983786374"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

        </div>

        <a
          href="#inicio"
          className="back-top"
          aria-label="Voltar ao topo"
        >
          <FaArrowUp />
        </a>

      </div>

      <div className="footer-bottom">
        <p>
          © {year} Rafael Barreto.
          Todos os direitos reservados.
        </p>
      </div>

    </footer>
  );
}

export default Footer;