import React, { useState } from "react";
import "../styles/Proyectos.css";
import ModeloSketchup from "./ModeloSketchup";

const proyectosData = [
  {
    id: 1,
    titulo: "Vivienda Multifamiliar",
    descripcion: "Diseño moderno con optimización de espacios y iluminación natural.",
    imagen: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    id: 2,
    titulo: "Casa Minimalista",
    descripcion: "Arquitectura limpia con enfoque en funcionalidad y estética.",
    imagen: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
  },
  {
    id: 3,
    titulo: "Residencia Contemporánea",
    descripcion: "Proyecto de lujo con materiales modernos y diseño abierto.",
    imagen: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
  },
];

function Proyectos() {
  const [proyectoActivo, setProyectoActivo] = useState(null);

  return (
    <section className="proyectos-section">

      {/* GRID DE TARJETAS */}
      {!proyectoActivo && (
        <>
          <div className="proyectos-header">
            <span className="proyectos-badge">Nuestros Proyectos</span>
            <h1>Portafolio Arquitectónico</h1>
            <p>Selecciona un proyecto para ver todos los detalles y su maqueta 3D.</p>
          </div>

          <div className="proyectos-grid">
            {proyectosData.map((proyecto) => (
              <div
                key={proyecto.id}
                className="proyecto-card-mini"
                onClick={() => setProyectoActivo(proyecto)}
              >
                <img src={proyecto.imagen} alt={proyecto.titulo} />
                <div className="proyecto-mini-info">
                  <h3>{proyecto.titulo}</h3>
                  <p>{proyecto.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* VISTA DETALLE */}
      {proyectoActivo && (
        <div className="proyecto-detalle">

          <button
            className="btn-volver"
            onClick={() => setProyectoActivo(null)}
          >
            ← Volver
          </button>

          <h1>{proyectoActivo.titulo}</h1>
          <p>{proyectoActivo.descripcion}</p>

          <div className="modelo-container">
            <ModeloSketchup />
          </div>
        </div>
      )}

    </section>
  );
}

export default Proyectos;