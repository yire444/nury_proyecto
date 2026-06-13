import React from "react";
import "../styles/Nosotros.css";
import casa from "../imgfondo/casa1.png";

const Nosotros = () => {
  return (
    <section className="about-section" id="nosotros">
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
    </section>
  );
};

export default Nosotros;