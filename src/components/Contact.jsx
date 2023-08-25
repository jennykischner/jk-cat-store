import React from 'react'
import ImagenPerfil from '../assets/img/imagen-9.jpeg';
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-left">
      <img className="profile-image" src={ImagenPerfil} alt="Perfil" />
      </div>
      <div className="contact-right">
        <div className="social-media">
        <a href="https://github.com/jennykischner"><FaGithub /> GitHub</a>
        <a href="mailto:https://gmail.com/"><FaEnvelope /> kischnerjennifer@gmail.com</a>
        <a href="tel:1134654780"><FaPhone /> Contacto: 1134654780</a>
        </div>
      </div>
    </div>
  );
}

export default Contact