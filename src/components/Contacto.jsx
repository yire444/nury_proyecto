import React, { useState } from "react";
import "../styles/Contacto.css";
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    servicio: "Diseño Arquitectónico",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    alert(`¡Gracias ${formData.nombre}! Nos comunicaremos contigo a la brevedad.`);
    setFormData({ nombre: "", correo: "", telefono: "", servicio: "Diseño Arquitectónico", mensaje: "" });
  };

  const numeroWhatsapp = "51999888777"; 
  const mensajeWhatsapp = encodeURIComponent(
    "Hola NF Arquitectura, me gustaría solicitar una cotización para un proyecto."
  );

  return (
    <section id="contacto" className="contacto-section">
      <div className="contacto-header">
        <span className="contacto-badge">Contacto</span>
        <h2 className="contacto-title">Iniciemos tu Proyecto</h2>
        <div className="contacto-linea-decorativa"></div>
      </div>

      <div className="contacto-container">
        <div className="contacto-info-panel">
          <h3 className="contacto-subtitle">¿Tienes una idea en mente?</h3>
          <p className="contacto-text">
            Ponte en contacto con nosotros para agendar una reunión o solicitar una visita técnica. Estamos listos para construir tu espacio ideal.
          </p>

          <div className="contacto-items-list">
            <div className="contacto-item">
              <FiPhone className="contacto-icon" />
              <div>
                <h4>Llámanos</h4>
                <p>+51 999 888 777</p>
              </div>
            </div>

            <div className="contacto-item">
              <FiMail className="contacto-icon" />
              <div>
                <h4>Escríbenos</h4>
                <p>contacto@nfarquitectura.com</p>
              </div>
            </div>

            <div className="contacto-item">
              <FiMapPin className="contacto-icon" />
              <div>
                <h4>Oficina Principal</h4>
                <p>Lima, Perú</p>
              </div>
            </div>

            <div className="contacto-item">
              <FiClock className="contacto-icon" />
              <div>
                <h4>Horario de Atención</h4>
                <p>Lun - Vie: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          <a 
            href={`https://wa.me/${numeroWhatsapp}?text=${mensajeWhatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <FaWhatsapp className="ws-icon" /> Chat Directo por WhatsApp
          </a>
        </div>

        <div className="contacto-form-panel">
          <form onSubmit={handleSubmit} className="contacto-form">
            <div className="form-group">
              <label htmlFor="nombre">Nombre Completo</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder="Ej. Juan Pérez"
              />
            </div>

            <div className="form-group-row">
              <div className="form-group">
                <label htmlFor="correo">Correo Electrónico</label>
                <input
                  type="email"
                  id="correo"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                  placeholder="juan@correo.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefono">Teléfono / Celular</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="999888777"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="servicio">Servicio de Interés</label>
              <select
                id="servicio"
                name="servicio"
                value={formData.servicio}
                onChange={handleChange}
              >
                <option value="Diseño Arquitectónico">Diseño Arquitectónico de Viviendas/Edificios</option>
                <option value="Remodelaciones y Ampliaciones">Remodelaciones y Ampliaciones</option>
                <option value="Diseño de Interiores">Diseño de Interiores</option>
                <option value="Supervisión de Obra">Supervisión y Dirección de Obra</option>
                <option value="Expedientes y Licencias">Expedientes Técnicos y Licencias</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Cuéntanos sobre tu proyecto</label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows="5"
                value={formData.mensaje}
                onChange={handleChange}
                required
                placeholder="Detalla las dimensiones del terreno, ubicación o el estilo que buscas..."
              ></textarea>
            </div>

            <button type="submit" className="btn-enviar-formulario">
              Enviar Mensaje <FiSend className="btn-send-icon" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;