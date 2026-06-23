import { useState } from 'react'
import Navbar from './components/Navbar';
import './App.css' 
import Footer from './components/Footer';
import About from './components/About';
import Nosotros from './components/Nosotros';
import LibroReclamaciones from "./components/LibroReclamaciones";
import Servicios from './components/Servicios'; 
import Contacto from './components/Contacto'; 

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentScreen, setCurrentScreen] = useState("home");

  const handleNavigate = (screenName, e) => {
    if (e) e.preventDefault();
    setCurrentScreen(screenName);
    window.scrollTo({ top: 0, behavior: "smooth" }); 
  };

  return (
    <>
      <Navbar 
        onNavigateToInicio={(e) => handleNavigate("home", e)} 
        onNavigateToNosotros={(e) => handleNavigate("nosotros", e)}
        onNavigateToServicios={(e) => handleNavigate("servicios", e)}
        onNavigateToContacto={(e) => handleNavigate("contacto", e)}
      />
      
      {currentScreen === "home" && (
        <>
          <About />
        </>
      )}
      {currentScreen === "nosotros" && (
        <Nosotros esPantallaCompleta={true} />
      )}

      {currentScreen === "servicios" && <Servicios />}

      {currentScreen === "contacto" && <Contacto />}

      <LibroReclamaciones isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
      
      <Footer 
        onOpenReclamaciones={() => setIsModalOpen(true)}
        onNavigateToInicio={(e) => handleNavigate("home", e)} 
        onNavigateToNosotros={(e) => handleNavigate("nosotros", e)}
        onNavigateToServicios={(e) => handleNavigate("servicios", e)}
        onNavigateToContacto={(e) => handleNavigate("contacto", e)}
      />
    </>
  )
}

export default App;