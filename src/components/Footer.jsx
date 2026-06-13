import React from 'react';
import '../styles/Footer.css';
import logoCompany from '../assets/logo_img.jpg';
import { navMenu } from './Navbar';
import { FiBookOpen, FiMail, FiMapPin, FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export const listContacs = [
    {
        id: 1,
        text: 'yire2005lol@gmail.com',
        url: 'mailto:yire2005lol@gmail.com',
        icon: <FiMail />,
        esExterno: false
    },

    {
        id: 2,
        text: 'Whatsapp',
        url: 'https://wa.me/915214147',
        icon: <FaWhatsapp />,
        esExterno: true
    },

    {
        id: 3,
        text: 'Instagram',
        url: 'https://www.instagram.com/nf_arquitectura?igsh=MW5uanNqMDZlbHk3aw==',
        icon: <FiInstagram />,
        esExterno: true
    }
]


const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">

            {/*Sección logo y emblema*/}
            <figure className='footer-brand'>
                <img src={logoCompany} alt="Logo NF arquitectura" className='footer-logo' />
                <figcaption className='footer-slogan'><p>Transformando ideas en espacios con identidad</p></figcaption>
            </figure>

            {/*Sección de navegación*/}
            <section className='footer-section'>
                <h3 className='footer-subtitle'>Explorar</h3>
                <div className='footer-links-group'>
                    {navMenu.map((nav) => (
                        <a
                            key={nav.id}
                            href={nav.url}
                            className='footer-link'
                        >
                            {nav.name}
                        </a>
                    ))}
                </div>
            </section>


            {/*Sección contactos*/}
            <section className='footer-section'>
                <h3 className='footer-subtitle'>Contacto</h3>
                <div className='footer-links-group'>
                    {listContacs.map((contact) => (
                        <a
                            key={contact.id}
                            href={contact.url}
                            target={contact.esExterno ? "_blank" : "_self"}
                            rel={contact.esExterno ? "noopener noreferrer" : ""}
                            className="footer-link"
                        >

                            {React.cloneElement(contact.icon, { className: "footer-icon" })}
                            {contact.text}
                        </a>
                    ))}
                </div>
            </section>

            {/* Sección Soporte / Libro de Reclamaciones */}
            <section className='footer-section'>
                <h3 className='footer-subtitle'>Soporte</h3>
                <div className='footer-links-group'>
                    <a
                        href=""
                        className='footer-link'
                    >
                        <FiBookOpen className='footer-icon' />
                        <span>Libro de Reclamaciones</span>
                    </a>
                </div>
            </section>

            <div className='footer-credits'>
                <p>&copy; {currentYear} Todos los derechos reservados.</p>
                <p>Diseñado y Desarrollado por
                    <span className='footer-authors'>Jair y Yire</span>
                </p>
            </div>
        </footer>
    );
}

export default Footer;