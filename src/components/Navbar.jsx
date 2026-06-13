import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/nfblanco.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-left">
        <a href="#inicio" className="logo-container">
          <img src={logo} alt="Logo Arquitectura" className="logo" />
          <span className="logo-text">ARQUITECTURA</span>
        </a>
      </div>

      <div className="navbar-right">
        <a href="#inicio" className="nav-url">Inicio</a>
        <a href="#nosotros" className="nav-url">Nosotros</a>
        <a href="#servicios" className="nav-url">Servicios</a>
        <a href="#proyectos" className="nav-url">Proyectos</a>
        <a href="#contacto" className="nav-url">Contacto</a>
      </div>
    </nav>
  );
};

export default Navbar;