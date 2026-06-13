import React from 'react';
import '../styles/Navbar.css';

export const navMenu = [
    { id:1, name: 'Sobre Nosotros', url: '#sobre-mi' },
    { id:2, name: 'Servicios', url: '#servicios' },
    { id:3, name: 'Proyectos', url: '#proyectos' },
    { id:4, name: 'Contacto', url: '#contacto' },
];

const Navbar = () => {
    
    return (
        <nav className="navbar">
            {/* Navbar lado izquierdo */}
            <div className="navbar-left">
                <a className="nav-url" href="#">Inicio</a>
            </div>

            {/* Navbar lado derecho */}
            <div className="navbar-right">
                {/* 3. Sigue leyendo el array de arriba sin problemas */}
                {navMenu.map((nav) => (
                    <a key={nav.id} href={nav.url} className="nav-url">
                        {nav.name}
                    </a>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;