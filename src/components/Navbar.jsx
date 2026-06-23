import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import logoCompanyBlack from "../assets/NFclaro.png";
import { FiMenu, FiX } from "react-icons/fi";

export const navMenu = [
  { id: 1, name: "Inicio", url: "#inicio" },
  { id: 2, name: "Nosotros", url: "#nosotros" },
  { id: 3, name: "Servicios", url: "#servicios" },
  { id: 4, name: "Proyectos", url: "#proyectos" },
  { id: 5, name: "Contacto", url: "#contacto" },
];

// 🎯 ADAPTADO: Añadimos onNavigateToNosotros a las props destructuradas
const Navbar = ({ onNavigateToInicio, onNavigateToNosotros, onNavigateToServicios,onNavigateToProyectos, onNavigateToContacto }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleInicioClick = (e) => {
    e.preventDefault();
    if (onNavigateToInicio) {
      onNavigateToInicio(e); 
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-active" : ""}`}>
      <div className="navbar-left">
        <a href="#inicio" className="logo-container" onClick={handleInicioClick}>
          <img src={logoCompanyBlack} alt="Logo Arquitectura" className="logo" />
          <span className="logo-text">NF ARQUITECTURA</span>
        </a>
      </div>

      {/* Botón hamburguesa */}
      <button
        className="menu-toggle-icon"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      <div className={`navbar-right ${menuOpen ? "show" : ""}`}>
        {navMenu.map((enlace) => (
          <a
            key={enlace.id}
            href={enlace.url}
            className="nav-url"
            onClick={(e) => {
              if (enlace.url === "#inicio") {
                handleInicioClick(e);
              } else if (enlace.url === "#nosotros") {
                // 🎯 ADAPTADO: Interceptamos el clic en Nosotros para cambiar la pantalla en App.jsx
                e.preventDefault();
                if (onNavigateToNosotros) onNavigateToNosotros(e);
                closeMenu();
              } else if (enlace.url === "#servicios") {
                e.preventDefault();
                onNavigateToServicios(e);
                closeMenu();
              } 
              else if (enlace.url === "#proyectos") {
                e.preventDefault();
                if (onNavigateToProyectos) onNavigateToProyectos(e);
                closeMenu();
              }
              else if (enlace.url === "#contacto") {
                e.preventDefault();
                if (onNavigateToContacto) onNavigateToContacto(e);
                closeMenu();
              } else {
                closeMenu();
              }
            }}
          >
            {enlace.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;