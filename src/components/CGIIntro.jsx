
import Carousel from './Carousel';
import SpinalStage from '../assets/sesion1/images/kispinal.gif';
import spduck from '../assets/sesion1/images/duck.jpg';
import brunos from '../assets/sesion1/images/brunos.png';
import BMW from '../assets/sesion1/images/bmw.jpg';
import expedition33 from '../assets/sesion1/images/expedition33.jpg';
import silksong from '../assets/sesion1/images/silksong.jpg';
import Starwars from '../assets/sesion1/images/starwars.jpg';
import fotorrealismo from '../assets/sesion1/images/fotorrealismo.jpg';
import syd from '../assets/sesion1/images/syd.jpg';
import pekora from '../assets/sesion1/images/pekora.jpg';
import Revit from '../assets/sesion1/images/revit.jpg';

export default function CGIIntro() {
  const carouselItems = [

    {
       type: 'gif',
      src: SpinalStage,
      thumbnail: spduck,
      title: '¿Se mueven los personajes a traves de la plataforma? NO!',
      buttonText: null,
      showButton: false
    },

    {
      type: 'image',
      src: BMW ,
      title: '3D Graphics en sitios web',
      buttonText: 'Explorar',
      buttonLink: 'https://www.bmwusa.com/build-your-own.html#/studio/fszvh1hc/exterior/color',
      showButton: true
    },

    {
      type: 'image',
      src: brunos ,
      title: '3D Graphics en sitios web',
      buttonText: 'Explorar',
      buttonLink: 'https://bruno-simon.com/',
      showButton: true
    },

    {
      type: 'image',
      src: expedition33 ,
      title: 'Videojuegos',
      buttonText: 'Ver mas',
      buttonLink: 'https://www.youtube.com/watch?v=2VaLOc1FpSo',
      showButton: true
    },

    {
      type: 'image',
      src: silksong,
      title: 'Videojuegos',
      buttonText: 'Ver Más',
      buttonLink: 'https://www.youtube.com/watch?v=yQxwbZsL14Y',
      showButton: true
    },


    {
      type: 'image',
      src: Starwars,
      title: 'Ejemplo de CGI en el Cine',
      buttonText: 'Ver Más',
      buttonLink: 'https://youtu.be/OEch4j4KyoU?t=559',
      showButton: true
    },
    {
      type: 'image',
      src: fotorrealismo,
      title: 'CGI Fotorrealista',
      buttonText: '',
      buttonLink: 'https://www.imaginar.co.uk/style/cgi-photo-realistic-owl-renderings/',
      showButton: true
    },
    
    {
      type: 'image',
      src: syd,
      title: 'Video Mapping',
      buttonText: 'Ver Mas',
      buttonLink: 'https://youtu.be/snT8psrPxmA?t=32',
      showButton: true
    },
    {
      type: 'image',
      src: pekora,
      title: 'Animación Holografica - Realidad Aumentada',
      buttonText: 'Ver Mas',
      buttonLink: 'https://youtu.be/zBuJD-ugT_g?t=7',
      showButton: true
    },
    {
      type: 'image',
      src: Revit,
      title: 'Simulación - Realidad Aumentada',
      buttonText: 'Ver Mas',
      buttonLink: 'https://youtu.be/r0ZmaljQlW8?t=25',
      showButton: true
    },

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

      <h3>Algunos ejemplos: </h3>
      
      <Carousel items={carouselItems} />
    </section>
  );
}