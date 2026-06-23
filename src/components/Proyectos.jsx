import React from "react";
import "../styles/Proyectos.css";
import ModeloSketchup from "./ModeloSketchup";

function Proyectos() {
  return (
    <section className="proyectos-section">
      <div className="proyectos-header">
        <span className="proyectos-badge">Nuestros Proyectos</span>

        <h1>Explora nuestras maquetas 3D</h1>

        <p>
          Conoce nuestros proyectos arquitectónicos a través de modelos
          tridimensionales interactivos que te permitirán visualizar cada
          detalle antes de su ejecución.
        </p>
      </div>

      <div className="proyecto-card">
        <div className="proyecto-info">
          <h2>Vivienda Multifamiliar</h2>

          <p>
            Proyecto residencial diseñado por NF Arquitectura, enfocado en
            la funcionalidad, el confort y una propuesta estética moderna.
          </p>

          <div className="proyecto-tags">
            <span className="proyecto-tag">Arquitectura</span>
            <span className="proyecto-tag">Diseño Residencial</span>
            <span className="proyecto-tag">Modelado 3D</span>
          </div>
        </div>

        <div className="modelo-container">
          <ModeloSketchup />
        </div>
      </div>
    </section>
  );
}

export default Proyectos;