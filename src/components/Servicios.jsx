import React from "react";
import "../styles/Servicios.css";

import imgServicio1 from "../assets/servicio1.png";
import imgServicio2 from "../assets/servicio2.png";
import imgServicio3 from "../assets/servicio3.png";
import imgServicio4 from "../assets/servicio4.png";
import imgServicio5 from "../assets/servicio5.jpg"; 

// 🎯 CORREGIDO: Le quitamos el "export" de adelante. Ahora es una constante normal.
const listServicios = [
  {   
    id: 1,
    number: "01",
    title: "Diseño Arquitectónico de Viviendas y Edificios",
    description: "Desarrollamos proyectos integrales desde cero, optimizando cada metro cuadrado. Creamos planos de distribución, fachadas modernas y estructuras funcionales para casas unifamiliares o edificios multifamiliares.",
    img: imgServicio1,
    invested: false
  },
  {   
    id: 2,
    number: "02",
    title: "Remodelaciones y Ampliaciones",
    description: "Transformamos y modernizamos tus ambientes actuales. Si tu familia creció o quieres renovar el estilo de tu casa, diseñamos ampliaciones estructurales seguras y estéticas aprovechando al máximo lo existente.",
    img: imgServicio2,
    invested: true 
  },
  {   
    id: 3,
    number: "03",
    title: "Diseño de Interiores",
    description: "Le damos identidad y confort a cada rincón. Nos encargamos de la selección de materiales, acabados, paletas de colores, diseño de iluminación y elección de mobiliario para crear espacios elegantes y acogedores.",
    img: imgServicio3,
    invested: false
  },
  {   
    id: 4,
    number: "04",
    title: "Supervisión y Dirección de Obra",
    description: "Garantizamos que lo que está en el plano se construya a la perfección. Controlamos la calidad de los materiales, supervisamos al personal de obra y aseguramos el cumplimiento de los plazos y presupuestos establecidos.",
    img: imgServicio4,
    invested: true
  },
  {   
    id: 5,
    number: "05",
    title: "Elaboración de Expedientes Técnicos y Gestión de Licencias",
    description: "Nos encargamos de toda la carga legal y técnica para que construyas sin multas. Elaboramos los expedientes necesarios para la aprobación municipal y gestionamos las licencias de edificación correspondientes.",
    img: imgServicio5,
    invested: false
  }
];

const Servicios = () => {
  return (
    <section id="servicios" className="servicios-section">
      <div className="servicios-header">
        <span className="servicios-badge">Servicios Especializados</span>
        <h2 className="servicios-title">¿Cómo transformamos tu espacio?</h2>
        <div className="servicios-linea-decorativa"></div>
      </div>

      <div className="servicios-container">
        {listServicios.map((servicio) => (
          <div 
            key={servicio.id} 
            className={`servicio-bloque ${servicio.invested ? 'bloque-invertido' : ''}`}
          >
            <div className="servicio-imagen-wrapper">
              <div className="servicio-numero-flotante">{servicio.number}</div>
              <img src={servicio.img} alt={servicio.title} className="servicio-img" />
              <div className="servicio-overlay-borde"></div>
            </div>

            <div className="servicio-info">
              <h3 className="servicio-item-titulo">{servicio.title}</h3>
              <p className="servicio-item-descripcion">{servicio.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicios;