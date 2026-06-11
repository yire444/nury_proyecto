import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    const anioActual = new Date().getFullYear();

    return (
        <footer className="footer-container">
            <div className="footer-content">
                
                {/* Bloque 1: Marca de la Arquitecta */}
                <div className="footer-section brand-box">
                    <h2 className="footer-logo">
                        NURY <span className="footer-logo-sub">ARQUITECTURA</span>
                    </h2>
                    <p className="footer-tagline">Transformando ideas en espacios con identidad.</p>
                </div>

                {/* Bloque 2: Redes y Contacto (Enlaces Activos) */}
                <div className="footer-section links-box">
                    <h3 className="footer-title">Contacto</h3>
                    <div className="footer-links">
                        <a href="https://wa.me/tu_numero" target="_blank" rel="noopener noreferrer" className="footer-link-item">
                            WhatsApp
                        </a>
                        <a href="https://instagram.com/tu_usuario" target="_blank" rel="noopener noreferrer" className="footer-link-item">
                            Instagram
                        </a>
                    </div>
                </div>

                {/* Bloque 3: Sección Legal / Libro de Reclamaciones */}
                <div className="footer-section legal-box">
                    <h3 className="footer-title">Transparencia</h3>
                    <a href="#libro-reclamaciones" className="libro-reclamaciones-btn">
                        <span className="libro-icono">📘</span> Libro de Reclamaciones
                    </a>
                </div>

            </div>

            {/* Línea final de Créditos */}
            <div className="footer-bottom">
                <p>&copy; {anioActual} Todos los derechos reservados.</p>
                <p>Diseñado & Desarrollado por <span className="author-highlight">Nury</span></p>
            </div>
        </footer>
    );
}

export default Footer;