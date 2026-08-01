import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaTimes,
} from "react-icons/fa";

function Contact() {
  const serviceId =
    import.meta.env.VITE_EMAILJS_SERVICE_ID;

  const templateId =
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  const publicKey =
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [isOpen, setIsOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setSending(true);
    setSuccess(false);

    emailjs.sendForm(
      serviceId,
      templateId,
      form.current,
      publicKey
    )
      .then(() => {
        setSuccess(true);
        form.current.reset();

        setTimeout(() => {
          setIsOpen(false);
          setSuccess(false);
        }, 2500);
      })
      .catch((error) => {
        console.error(error);
        alert("Erro ao enviar mensagem.");
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <section id="contato" className="contact">
      <h2>Contato</h2>

      {/* Redes Sociais */}

      <div className="contact-social">
        <a
          href="https://www.linkedin.com/in/rafael-barreto-silva/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/rafaelbarreto95"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
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

      <p className="contact-text">
        Você também pode entrar em contato por e-mail.
      </p>

      <button
        className="contact-btn"
        onClick={() => setIsOpen(true)}
      >
        Entrar em Contato
      </button>

      {/* Overlay */}

      <div
        className={`overlay ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}

      <div
        className={`contact-sidebar ${isOpen ? "active" : ""
          }`}
      >
        <button
          className="close-btn"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes />
        </button>

        <h3>Envie uma mensagem</h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
        >
          <label htmlFor="from_name" className="sr-only">
            Seu nome
          </label>
          <input
            id="from_name"
            type="text"
            name="from_name"
            placeholder="Seu nome"
            required
          />

          <label htmlFor="reply_to" className="sr-only">
            Seu e-mail
          </label>
          <input
            id="reply_to"
            type="email"
            name="reply_to"
            placeholder="Seu e-mail"
            required
          />

          <label htmlFor="subject" className="sr-only">
            Assunto
          </label>
          <input
            id="subject"
            type="text"
            name="subject"
            placeholder="Assunto"
            required
          />

          <label htmlFor="message" className="sr-only">
            Sua mensagem
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Digite sua mensagem..."
            required
          />

          <button type="submit">
            {sending
              ? "Enviando..."
              : "Enviar Mensagem"}
          </button>

          {success && (
            <p className="success-message">
              ✅ Mensagem enviada com sucesso!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;