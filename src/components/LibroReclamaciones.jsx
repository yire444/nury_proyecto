import React, {useState} from "react";
import "../styles/LibroReclamaciones.css";
import { FiX, FiCheckCircle} from "react-icons/fi";


const LibroReclamaciones = ({ isOpen, onClose }) => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    const handleCloseAndReset = () => {
        onClose();
        setTimeout(() => {
            setIsSubmitted(false);
        }, 300);
    };

    return (
        <div className="modal-overlay" onClick={handleCloseAndReset}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                
                <button className="modal-close-btn" onClick={handleCloseAndReset} aria-label="Cerrar">
                    <FiX />
                </button>

                {isSubmitted ? (
                    <div className="modal-success-view">
                        <FiCheckCircle className="modal-success-icon" />
                        <h2 className="modal-title">¡Reclamo Enviado!</h2>
                        <p className="modal-success-message">
                            Su queja o reclamo ha sido registrado exitosamente. Nos comunicaremos con usted a la brevedad para resolver el inconveniente.
                        </p>
                        <button className="modal-submit-btn" onClick={handleCloseAndReset}>
                            Entendido
                        </button>
                    </div>
                ) : (
                    <>
                        <h2 className="modal-title">Libro de Reclamaciones</h2>
                        <p className="modal-subtitle">Hoja de reclamación virtual</p>

                        <form className="modal-form" onSubmit={handleSubmit}>
                            <input type="text" placeholder="Nombre Completo" required />
                            <input type="email" placeholder="Correo" required />
                            <input type="tel" placeholder="Teléfono" required />
                            
                            <textarea  
                                placeholder="Por favor añada su reclamo para poder seguir mejorando nuestro servicio" 
                                rows="4"
                                required
                            />
                            
                            <button type="submit" className="modal-submit-btn">
                                Enviar Reclamación
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default LibroReclamaciones;