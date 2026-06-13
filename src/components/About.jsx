import React, { useEffect, useState } from "react";
import "../styles/About.css";

import img1 from "../imgfondo/casa1.jpg";
import img2 from "../imgfondo/casa21.png";
import img3 from "../imgfondo/casa31.png";

const About = () => {
  const slides = [
    {
      image: img1,
      title: "Diseño Arquitectónico",
      subtitle: "Creamos espacios modernos y funcionales",
    },
    {
      image: img2,
      title: "Construcción Profesional",
      subtitle: "Calidad y experiencia en cada proyecto",
    },
    {
      image: img3,
      title: "Remodelaciones Integrales",
      subtitle: "Transformamos tus ideas en realidad",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="hero">

      <img
        src={slides[current].image}
        alt=""
        className="hero-image"
      />

      <div className="overlay"></div>

      <div className="hero-content">
        <span className="badge">
          NF Arquitectura • Diseño y Construcción
        </span>

        <h1>{slides[current].title}</h1>

        <p>{slides[current].subtitle}</p>

        <button>Ver Proyectos</button>
      </div>

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>

    </section>
  );
};

export default About;