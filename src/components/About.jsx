import React, { useEffect, useState } from "react";
import "../styles/About.css";
import { FiLayers, FiFolder, FiPhoneCall, FiArrowRight } from "react-icons/fi"; // Íconos para los accesos rápidos

import img1 from "../imgfondo/casa1.jpg";
import img2 from "../imgfondo/casa21.png";
import img3 from "../imgfondo/casa31.png";

// 🎯 ADAPTADO: Ahora recibe las funciones de navegación de App.jsx como props
const About = ({ onNavigateToServicios, onNavigateToContacto, onNavigateToNosotros }) => {
  const slides = [
    {
      image: img1,
      title: "Diseño Arquitectónico",
      subtitle: "Creamos espacios modernos y funcionales",
    },
    {
      image: img2,
      title: "Construcción Profesional",
      subtitle: "Calidad y experiencia en cada proyecto",
    },
    {
      image: img3,
      title: "Remodelaciones Integrales",
      subtitle: "Transformamos tus ideas en realidad",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

 return (
    <div className="about-page-wrapper"> {/* 🎯 Agregamos un contenedor padre limpio */}
      
      {/* 🏙️ SECCIÓN HERO (El carrusel ahora se queda estrictamente cerrado aquí) */}
      <section className="hero">
        <img
          src={slides[current].image}
          alt=""
          className="hero-image"
        />

        <div className="overlay"></div>

        <div className="hero-content">
          <span className="badge">
            NF Arquitectura • Diseño y Construcción
          </span>

          <h1>{slides[current].title}</h1>
          <p>{slides[current].subtitle}</p>

          <button onClick={(e) => onNavigateToContacto(e)}>Cotizar Proyecto</button>
        </div>

        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={current === index ? "dot active" : "dot"}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </section> {/* 🎯 AQUÍ CIERRA EL HERO. Nada de lo nuevo debe meterse en esta etiqueta */}

      {/* ⚡ SECCIÓN RESUMEN EJECUTIVO (Completamente libre abajo) */}
      <section className="home-summary-section">
        <div className="summary-container">
          <div className="summary-header">
            <h3>¿Cómo trabajamos en NF Arquitectura?</h3>
            <p>Un enfoque integral pensado para materializar tus proyectos sin complicaciones legales ni sobrecostos estructurales.</p>
          </div>

          <div className="summary-cards-grid">
            
            <div className="summary-card" onClick={(e) => onNavigateToNosotros(e)}>
              <div className="summary-icon-box"><FiLayers /></div>
              <h4>Estudio Técnico</h4>
              <p>Conoce nuestra trayectoria, valores de diseño y pilares de seguridad estructural.</p>
              <span className="summary-link-text">Saber más <FiArrowRight /></span>
            </div>

            <div className="summary-card" onClick={(e) => onNavigateToServicios(e)}>
              <div className="summary-icon-box"><FiFolder /></div>
              <h4>Nuestros Servicios</h4>
              <p>Desde la elaboración de planos residenciales hasta licencias y supervisión de obra.</p>
              <span className="summary-link-text">Ver catálogo <FiArrowRight /></span>
            </div>

            <div className="summary-card" onClick={(e) => onNavigateToContacto(e)}>
              <div className="summary-icon-box"><FiPhoneCall /></div>
              <h4>Asesoría Directa</h4>
              <p>Agenda una visita técnica o solicita presupuestos realistas y transparentes para tu obra.</p>
              <span className="summary-link-text">Escríbenos <FiArrowRight /></span>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default About;