import React from "react";
import '../styles/register.css';

function Register() {

  return (
    <div className="contact">
      <div className="contact-wrapper">
        <h2 className="contact-title">Registrate</h2>
        <form className="contact-form">
          <label className="contact-labels">Nombre Completo</label>
          <input
            className="contact-inputs"
            type="text"
            name="name-register"
            placeholder="Tu Nombre Completo"
          />
          <label className="contact-labels">Email</label>
          <input
            className="contact-inputs"
            type="email"
            name="user_email-register"
            id=""
            placeholder="Tu Email"
          />
          <label className="contact-labels">Contraseña</label>
          <input
            className="contact-inputs"
            type="password"
            name="password-register"
            id=""
            placeholder="Contraseña"
          />
          <label className="contact-labels">Confirma la Contraseña</label>
          <input
            className="contact-inputs"
            type="password"
            name="confirm-password-register"
            id=""
            placeholder="Confirma la Contraseña"
          />
          <input className="submit-input" type="submit" value="Enviar" />
          <input className="cancel-input" type="submit" value="Cancelar" />
        </form>
      </div>
    </div>
  );
}

export default Register;
