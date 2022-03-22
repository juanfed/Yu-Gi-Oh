import React from "react";
import '../styles/contact.css';
import emailjs from "emailjs-com";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    e.target.reset()

    emailjs.sendForm(
      "service_e2cysa3",
      "template_obw2fjh",
      e.target,
      "81Suy7vVIG6msJ5j7"
    ).then(res => {
      console.log(res);
    }).catch(err => console.log(err));
  }
    return (
    <main className="main-contacto">
      <div className="contact">
        <div className="contact-wrapper">
          <h2 className="contact-title">Contactanos</h2>
          <form className="contact-form" onSubmit={sendEmail}>
            <label className="contact-labels">Nombre</label>
            <input
              className="contact-inputs"
              type="text"
              name="name"
              placeholder="Nombre"
            />
            <label className="contact-labels">Email</label>
            <input
              className="contact-inputs"
              type="email"
              name="user_email"
              id=""
              placeholder="Email"
            />
            <label className="contact-labels">Mensaje</label>
            <textarea
              className="contact-message--textarea"
              name="message"
              rows="5"
            ></textarea>
            <input className="submit-input" type="submit" value="Enviar" />
          </form>
        </div>
      </div>
    </main>
  );
}

export default Contact;
