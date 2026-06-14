import { useState } from 'react'
import Navbar from './components/Navbar';
import './App.css'
import Footer from './components/Footer';
import Nosotros from './components/Nosotros';
import About from './components/About';
import LibroReclamaciones from "./components/LibroReclamaciones";

function App() {
  const [count, setCount] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Navbar />
      <About />
      <Nosotros />
      <Footer onOpenReclamaciones={() => setIsModalOpen(true)}/>
      <LibroReclamaciones isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}/>
    </>
  )
}

export default App
