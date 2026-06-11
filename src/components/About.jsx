import React from 'react';
import '../styles/About.css';
import logoEmpresa from '../assets/logo_img.jpg';

const About = () => {
    return (
        <section id="sobre-mi" className="about-container">
            <div className="about-content">
                
                {/* Columna Izquierda: Imagen Conceptual o Retrato */}
                <div className="about-image">
                    <div className="about-img-logo">
                        <img src={logoEmpresa} alt="Logo Nury Arquitectura" />
                    </div>
                </div>

                {/* Columna Derecha: El Mensaje y Filosofía */}
                <div className="about-text-content">
                    <span className="about-subtitle">Filosofía & Enfoque</span>
                    <h2 className="about-title">Creando espacios con alma y precisión técnica</h2>
                    
                    <p className="about-description">
                        En nuestro estudio, entendemos la arquitectura como el equilibrio perfecto entre la funcionalidad rigurosa y la estética vanguardista. Nuestro enfoque se centra en el desarrollo de espacios contemporáneos que trascienden la necesidad habitacional, proyectando una identidad propia a través del dominio de la luz, la selección de texturas nobles y la pureza de las líneas limpias.
                    </p>
                    
                    <p className="about-description">
                        Cada proyecto representa un lienzo en blanco y una oportunidad para traducir las aspiraciones de nuestros clientes en realidades tangibles. Desde la conceptualización mediante visualización tridimensional avanzada hasta la rigurosidad del plano técnico, respaldamos cada etapa con un compromiso absoluto por el detalle y la excelencia constructiva.
                    </p>

                    {/* Puntos del trabajo */}
                    <div className="about-pillars">
                        <div className="pillar-item">
                            <span className="pillar-number">01</span>
                            <span className="pillar-text">Diseño Funcional</span>
                        </div>
                        <div className="pillar-item">
                            <span className="pillar-number">02</span>
                            <span className="pillar-text">Visualización 3D</span>
                        </div>
                        <div className="pillar-item">
                            <span className="pillar-number">03</span>
                            <span className="pillar-text">Atención al Detalle</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;