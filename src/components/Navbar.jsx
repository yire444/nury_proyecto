import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/NFnegro.png";

export const navMenu = [
  { id: 1, name: "Inicio", url: "#inicio" },
  { id: 2, name: "Nosotros", url: "#nosotros" },
  { id: 3, name: "Servicios", url: "#servicios" },
  { id: 4, name: "Proyectos", url: "#proyectos" },
  { id: 5, name: "Contacto", url: "#contacto" },
];

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
          <span className="logo-text">NF ARQUITECTURA</span>
        </a>
      </div>

      <div className="navbar-right">
        {navMenu.map((enlace) => (
          <a key={enlace.id} href={enlace.url} className="nav-url">
            {enlace.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;