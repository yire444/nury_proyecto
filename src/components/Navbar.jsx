import React from 'react';
import '../styles/Navbar.css';

// 🚀 Corregido: Afuera, exportado y con IDs únicos
export const navMenu = [
    { id: 1, name: 'Sobre Nosotros', url: '#sobre-mi' },
    { id: 2, name: 'Servicios', url: '#servicios' },
    { id: 3, name: 'Proyectos', url: '#proyectos' },
    { id: 4, name: 'Contacto', url: '#contacto' },
];

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a className="nav-url" href="#">Inicio</a>
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
}

export default Navbar;