import React from "react";
import "../styles/Nosotros.css"; 
import casa from "../imgfondo/nosotros.png";
import { FiAward, FiTarget, FiShield, FiCheckCircle, FiClock, FiUsers } from "react-icons/fi"; // Nuevos íconos

const Nosotros = ({ esPantallaCompleta = false }) => {
  return (
    <section className={`about-section ${esPantallaCompleta ? "full-page-mode" : ""}`} id="nosotros">
      <div className="about-container">

        <div className="about-left">
          <span className="about-badge">Nosotros</span>
          <h2>Sobre Nosotros</h2>
          <div className="line"></div>

          <p>
            NF ARQUITECTURA cuenta con más de 3 años de experiencia en el
            diseño, construcción y remodelación de viviendas.
          </p>

          <p>
            Acompañamos a nuestros clientes durante todo el proceso,
            desde la planificación y diseño arquitectónico hasta la
            ejecución final de la obra, garantizando calidad, seguridad
            y cumplimiento en cada proyecto.
          </p>

          {/* ⚡ NUEVO BLOQUE: Rellena el espacio vacío con propuestas de valor claras */}
          <div className="about-benefits">
            <div className="benefit-inline-item">
              <FiShield className="benefit-inline-icon" />
              <div>
                <h4>Garantía y Seguridad</h4>
                <p>Supervisión técnica rigurosa en cada etapa estructural.</p>
              </div>
            </div>
            <div className="benefit-inline-item">
              <FiClock className="benefit-inline-icon" />
              <div>
                <h4>Cumplimiento de Plazos</h4>
                <p>Planificación eficiente para entregar tu obra a tiempo.</p>
              </div>
            </div>
            <div className="benefit-inline-item">
              <FiUsers className="benefit-inline-icon" />
              <div>
                <h4>Equipo Especializado</h4>
                <p>Profesionales calificados en diseño y edificación residencial.</p>
              </div>
            </div>
          </div>

          <div className="stats">
            <div className="stat-card">
              <h3>3+</h3>
              <div className="card-line"></div>
              <p>Años de experiencia</p>
            </div>

            <div className="stat-card">
              <h3>100%</h3>
              <div className="card-line"></div>
              <p>Clientes satisfechos</p>
            </div>

            <div className="stat-card">
              <h3>1:1</h3>
              <div className="card-line"></div>
              <p>Atención personalizada</p>
            </div>
          </div>
        </div>

        <div className="about-right">
          <img src={casa} alt="Proyecto arquitectónico" />
        </div>

      </div>

      {esPantallaCompleta && (
        <div className="about-extended-content">
          <div className="mv-container">
            <div className="mv-card">
              <div className="mv-icon-wrapper"><FiTarget /></div>
              <h3>Nuestra Misión</h3>
              <p>
                Transformar las necesidades e ideas de nuestros clientes en espacios arquitectónicos óptimos, seguros y con una fuerte identidad estética, superando estándares de calidad mediante una dirección técnica rigurosa.
              </p>
            </div>
            
            <div className="mv-card">
              <div className="mv-icon-wrapper"><FiAward /></div>
              <h3>Nuestra Visión</h3>
              <p>
                Consolidarnos como un estudio referente en diseño y edificación residencial en la región, reconocidos por nuestra innovación espacial, la optimización presupuestal y el compromiso inquebrantable con la satisfacción del cliente.
              </p>
            </div>
          </div>

          <div className="valores-section">
            <h3 className="valores-title">Pilares de NF Arquitectura</h3>
            <div className="valores-grid">
              <div className="valor-item">
                <FiShield className="valor-icon" />
                <h4>Seguridad Estructural</h4>
                <p>Diseños respaldados bajo normativas técnicas vigentes para garantizar la tranquilidad de tu familia.</p>
              </div>
              <div className="valor-item">
                <FiCheckCircle className="valor-icon" />
                <h4>Transparencia Económica</h4>
                <p>Gestión de presupuestos realistas y control estricto de materiales para evitar sorpresas o cobros ocultos.</p>
              </div>
              <div className="valor-item">
                <FiAward className="valor-icon" />
                <h4>Excelencia en Acabados</h4>
                <p>Cuidamos hasta el más mínimo detalle en las uniones, texturas e iluminación de cada rincón.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Nosotros;