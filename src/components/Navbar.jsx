import React from 'react';
import '../styles/Navbar.css';
const Navbar = () => {
    {/*Menú de navegación del lado izquierdo*/}
    const navMenu = [
        { name: 'Sobre mí', url: '#sobre-mi' },
        { name: 'Servicios', url: '#servicios' },
        { name: 'Proyectos', url: '#proyectos' },
        { name: 'Contacto', url: '#contacto' },
        
    ];
    
    return (
        <nav className="navbar">
            {/* Navbar lado izquierdo */}
            <div className="navbar-left">
                <a className="nav-url" href="#">Inicio</a>
            </div>

            {/* Navbar lado derecho */}
            <div className="navbar-right">
                {navMenu.map((enlace, e) => (
                    <a key={e} href={enlace.url} className="nav-url">
                        {enlace.name}
                    </a>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;