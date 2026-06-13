import { useState } from 'react'
import Navbar from './components/Navbar';
import './App.css'
import Footer from './components/Footer';
import About from './components/About';
import Nosotros from './components/Nostros';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <About />
      <Nosotros />
      <Footer />
    </>
  )
}

export default App
