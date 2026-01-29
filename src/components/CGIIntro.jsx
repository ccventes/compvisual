
import Carousel from './Carousel';
import SpinalStage from '../assets/sesion1/images/kispinal.gif';

export default function CGIIntro() {
  const carouselItems = [

    {
      type: 'image',
      src: SpinalStage,
      title: '¿Se mueven los personajes a traves de la plataforma? NO!',
      buttonText: null,
      buttonLink: '#',
      showButton: false
    },


    {
      type: 'video',
      src: 'https://www.youtube.com/embed/bKBDKDmadJc',
      title: 'Ejemplo de CGI en el Cine',
      buttonText: 'Ver Más',
      buttonLink: 'https://www.youtube.com/watch?v=bKBDKDmadJc',
      showButton: true
    },
    {
      type: 'image',
      src: 'https://via.placeholder.com/900x500/0a0e27/00fff5?text=CGI+Moderno',
      title: 'CGI Fotorrealista',
      buttonText: 'Explorar',
      buttonLink: '#',
      showButton: true
    },
    {
      type: 'gif',
      src: 'https://via.placeholder.com/900x500/0a0e27/ff00ff?text=Animación+GIF',
      title: 'Animación en Tiempo Real',
      buttonText: null,
      showButton: false
    },
    {
      type: 'video',
      src: 'https://www.youtube.com/embed/kaX63hTIfhA',
      title: 'Historia del CGI',
      buttonText: 'Ver Timeline',
      buttonLink: '#timeline',
      showButton: true
    }
  ];

  return (
    <section className="section">
      <h2>¿Qué es CGI?</h2>
      <p>
        La computación visual (CGI, Computer-Generated Imagery) es el conjunto de técnicas y 
        herramientas que permiten crear imágenes, animaciones y efectos visuales mediante el 
        uso de computadoras. Hoy en día, el CGI es un pilar fundamental en cine, publicidad, 
        videojuegos, experiencias inmersivas y diseño digital.
      </p>
      
      <Carousel items={carouselItems} />
    </section>
  );
}