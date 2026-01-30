// data/timelineData.js
import radar from '../assets/sesion1/images/whir.jpg';

export const timelineData = [
  {
    id: 'era1',
    title: 'Primeros Pasos (1950–1960)',
    description: 'Uso inicial en laboratorios militares y universidades. Primeras imágenes generadas por computador.',
    content: `
      <p>Los inicios de la computación gráfica ocurrieron en laboratorios de investigación militar y universidades.</p>
      <p>El<a 
            href="https://youtu.be/TJYJexFz8kY?t=180"
            target="_blank"
            rel="noopener noreferrer"
           > proyecto Whirlwind (MIT) </a>  introduce pantallas CRT para visualizar datos de radar en 1951</p>
      
      <img src="${radar}" alt="proyecto Whirlwind (MIT)">
      
      <p><strong>Hitos importantes:</strong></p>
      <ul style="margin-left: 20px; color: #b0b0b0;">
        <li><strong>1958:</strong> Primer videojuego gráfico (Tennis for Two)
            <iframe src="https://www.youtube.com/embed/6QYNlPLzj90" frameborder="0" allowfullscreen style="width: 100%; height: 400px; border-radius: 10px; margin: 20px 0; border: 2px solid rgba(0, 255, 245, 0.3);"></iframe>
      
        
        </li>
        
        
      </ul>
    `
  },
  {
    id: 'era2',
    title: 'Década de 1960 – Interactividad y fundamentos',
    description: ' Surgen hitos como Sketchpad, que introduce el dibujo vectorial y la interacción hombre-máquina.Se establecen las bases matemáticas y conceptuales del 3D y el shading moderno.',
    content: `
      
      <ul style="margin-left: 20px; color: #b0b0b0;">
        <li><p><strong>1963:</strong> Ivan Sutherland crea Sketchpad, primer sistema CAD</p>
        
        <p><img src="https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/19236498/image/medium-283795586f992bfd49d125934fafdc1d.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJB6ZCNNAN7BE7WDQ%2F20260129%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20260129T214657Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=f968e93305d402ad8964efec54ae388bb58ab3a23bf493d86415ebe8d1c8903a" alt="proyecto Whirlwind (MIT)"></p>
        
        </li>

        <li><p>1963 <strong>Larry Roberts desarrolla el primer algoritmo efectivo de hidden-line removal.</p>
             <img src="https://docs.imsidesign.com/projects/DesignCAD-2022-Userguide/DesignCAD-2022-User-Guide/Storage/hidden-line-removal-img00032.png" alt="proyecto Whirlwind (MIT)">
        
        
        </li>
        <li><strong>1968:</strong> Primeras animaciones 3D por computadora

            <iframe src="https://www.youtube.com/embed/GBlQb6Me_1k" frameborder="0" allowfullscreen style="width: 100%; height: 400px; border-radius: 10px; margin: 20px 0; border: 2px solid rgba(0, 255, 245, 0.3);"></iframe>
      
            
        </li>
        
      </ul>
      
      
    `
  },
  {
    id: 'era3',
    title: 'Década de 1970 – Shading, visibilidad y cine',
    description: 'En los años 70 la CGI evoluciona de lo experimental a lo teórico, con avances clave en modelos de iluminación y sombreado.',
    content: `
      
      <ul style="margin-left: 20px; color: #b0b0b0;">
        <li><p><strong>1971:</strong> Primeros algoritmos de sombreado (<strong>shading</strong>) (Phong, Gouraud)</p>
        <p>Shading se define como el proceso matemático y computacional que determina el color y la intensidad de cada punto (o píxel) de una superficie en función de la luz, el material y la geometría.</p>
        <img src="https://i.pcmag.com/imagery/encyclopedia-terms/phong-shading-_shading.fit_lim.size_960x.gif" alt="Shading">
        
        
        
        </li>
        <li><strong>1972:</strong> Atari crea Pong

            <iframe src="https://www.youtube.com/embed/uCqIkgFKHr4" frameborder="0" allowfullscreen style="width: 100%; height: 400px; border-radius: 10px; margin: 20px 0; border: 2px solid rgba(0, 255, 245, 0.3);"></iframe>
      
            
        </li>

        <li><strong>1973:</strong> Westworld usa animación 2D por computadora en cine.

            <iframe src="https://www.youtube.com/embed/MB7YIYER9hk" frameborder="0" allowfullscreen style="width: 100%; height: 400px; border-radius: 10px; margin: 20px 0; border: 2px solid rgba(0, 255, 245, 0.3);"></iframe>
      
            
        </li>
        <li> EN los 70's se forma Lucas Films y su primer grupo de Graficos por computadora</li>
        <li><p><strong>1975:</strong> Gun Fight  de Midway como el primer videojuego que usó sprites de forma clara.</p>
       
        
        
        
        </li>

        
        
      </ul>
      
     
    `
  },
  {
    id: 'era4',
    title: 'Década de 1980 – Realismo y estudios de animación ',
    description: 'En los años 80 la CGI se populariza gracias a los microcomputadores, los videojuegos y el cine experimental.Se consolidan  los sprites y las primeras técnicas de animación y render 3D comercial.',
    content: `
      
      <ul style="margin-left: 20px; color: #b0b0b0;">
        <li>(1980) Turner Whitted formaliza el ray tracing moderno (manejo de luces)
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Recursive_raytrace_of_a_sphere.png" alt="Ray tracing">
        </li>
        
        <li>Dominancia de  Nintendo y Sega en el mundo de los videojuegos, uso del paralax

        <p> <iframe src="https://www.youtube.com/embed/z9tBce8eFqE" frameborder="0" allowfullscreen style="width: 100%; height: 400px; border-radius: 10px; margin: 20px 0; border: 2px solid rgba(0, 255, 245, 0.3);"></iframe>
        </p>

        <p> <iframe src="https://www.youtube.com/embed/nn7ihtdIM2s" frameborder="0" allowfullscreen style="width: 100%; height: 400px; border-radius: 10px; margin: 20px 0; border: 2px solid rgba(0, 255, 245, 0.3);"></iframe>
        </p>

        
        </li>
        <li><strong>1982</strong> Se funda Sillicon Graphics

        <img src="https://images.theconversation.com/files/527551/original/file-20230522-14905-qwgz75.jpg?ixlib=rb-4.1.0&rect=0%2C204%2C3600%2C1800&q=50&auto=format&w=1336&h=668&fit=crop&dpr=2" alt="Jurassic park">
        
            
        
        </li>
        <li><strong>1982</strong> Tron muestra extensivo uso de CGI 3D en cine.</li>
        <li><strong>1984</strong> The Adventures of André and Wally B., primer corto completamente CGI.</li>
        
      </ul>
    `
  },
  {
    id: 'era5',
    title: ' Decada de los 1990 Estandarización y popularización',
    description: 'En los 90 la CGI pasa de experimento a herramienta central en cine y videojuegos.Se logra realismo visual, integración con acción real y el nacimiento del 3D comercial y en tiempo real.En los años 80 la CGI se populariza gracias a los microcomputadores, los videojuegos y el cine experimental.Se consolidan  los sprites y las primeras técnicas de animación y render 3D comercial.',
    content: `
      
      <ul style="margin-left: 20px; color: #b0b0b0;">
        
        
        <li> (1991) Beauty and the Beast combina personajes 2D con escenarios 3D. No es la primera pelicula en hacerlo pero es importante por el uso narrativo de esta

        <p> <iframe src="https://www.youtube.com/embed/iuThvc4Fl9Q" frameborder="0" allowfullscreen style="width: 100%; height: 400px; border-radius: 10px; margin: 20px 0; border: 2px solid rgba(0, 255, 245, 0.3);"></iframe>
        </p>

        

        
        </li>
        <li><strong>(1993)</strong> Se funda Nvidia.</li>

        <li> Donkey Kong country / Killer instinct (renderizan en 3D, digitalizan a 2D) 
        </li>
        <li> Comienza la competencia entre Sony, nintendo y sega por el dominio de las consolas

        <img src="https://imagenes.hobbyconsolas.com/files/image_990_auto/uploads/imagenes/2023/04/25/6901b24ad64d4.jpeg" alt="nintendo vs sony">
        
            
        
        </li>
        
        
      </ul>
    `
  },
  {
    id: 'era5',
    title: ' Años 2000 - Fotorrealismo',
    description: '',
    content: `
      
      <ul style="margin-left: 20px; color: #b0b0b0;">
        
        
        <li> 2001 – Final Fantasy: The Spirits Within impulsa el debate del uncanny valley.
        </li>
        
        

        <li> Generación de consolas “Mas famosa” : Play station 2 (2000), dreamcast (1998),  Gamecube 2001,Xbox (2001)
        </li>
        <li> Era de los FPS "¿Can it run Crysis?"
        
        </li>
        
        
      </ul>
    `
  },
];