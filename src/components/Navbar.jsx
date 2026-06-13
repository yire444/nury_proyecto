import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";

export const navMenu = [
  { id: 1, name: "Inicio", url: "#inicio" },
  { id: 2, name: "Nosotros", url: "#nosotros" },
  { id: 3, name: "Servicios", url: "#servicios" },
  { id: 4, name: "Proyectos", url: "#proyectos" },
  { id: 5, name: "Contacto", url: "#contacto" },
];

const Navbar = () => {
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

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-active" : ""}`}>
      <div className="navbar-left">
        <a href="#inicio" className="logo-container" onClick={handleLinkClick}>
          <img src="/NFclaro.png" alt="Logo Arquitectura" className="logo" />
          <span className="logo-text">NF ARQUITECTURA</span>
        </a>
      </div>

      {/* Botón hamburguesa */}
      <button
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú de navegación"
        aria-expanded={menuOpen}
      > 
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </button>

      <div className={`navbar-right ${menuOpen ? "show" : ""}`}>
        {navMenu.map((enlace) => (
          <a 
            key={enlace.id} 
            href={enlace.url} 
            className="nav-url" 
            onClick={handleLinkClick}
          >
            {enlace.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;