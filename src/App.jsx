import { useState } from 'react'
import Navbar from './components/Navbar';
import './App.css'
import Footer from './components/Footer';
import Nosotros from './components/Nosotros';
import About from './components/About';

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
