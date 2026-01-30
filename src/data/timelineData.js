// data/timelineData.js
export const timelineData = [
  {
    id: 'era1',
    title: 'Primeros Pasos (1950–1970)',
    description: 'Uso inicial en laboratorios militares y universidades. Primeras imágenes generadas por computador.',
    content: `
      <p>Los inicios de la computación gráfica ocurrieron en laboratorios de investigación militar y universidades.</p>
      
      <img src="https://via.placeholder.com/800x400/0a0e27/ff00ff?text=Primeras+Imágenes+Generadas+por+Computadora+(1960s)" alt="Era 1">
      
      <p><strong>Hitos importantes:</strong></p>
      <ul style="margin-left: 20px; color: #b0b0b0;">
        <li><strong>1958:</strong> Primer videojuego gráfico (Tennis for Two)
            <iframe src="https://www.youtube.com/embed/6QYNlPLzj90" frameborder="0" allowfullscreen style="width: 100%; height: 400px; border-radius: 10px; margin: 20px 0; border: 2px solid rgba(0, 255, 245, 0.3);"></iframe>
      
        
        </li>
        <li><strong>1963:</strong> Ivan Sutherland crea Sketchpad, primer sistema CAD</li>
        <li><strong>1968:</strong> Primera animación 3D por computadora</li>
        <li><strong>1970:</strong> Primeros algoritmos de sombreado (Phong, Gouraud)</li>
      </ul>
    `
  },
  {
    id: 'era2',
    title: 'Consolidación (1980–1990)',
    description: 'Aparición de software clave y primeras películas con CGI destacado.',
    content: `
      <p>Década de explosión comercial del CGI. Las computadoras se vuelven más accesibles y potentes.</p>
      
      <iframe src="https://www.youtube.com/embed/L_o_O7v1V3Y" frameborder="0" allowfullscreen style="width: 100%; height: 400px; border-radius: 10px; margin: 20px 0; border: 2px solid rgba(0, 255, 245, 0.3);"></iframe>
      
      <p><strong>Películas icónicas:</strong></p>
      <ul style="margin-left: 20px; color: #b0b0b0;">
        <li><strong>Tron (1982):</strong> Primera película con uso extensivo de CGI</li>
        <li><strong>The Last Starfighter (1984):</strong> Primera película con naves completamente CGI</li>
        <li><strong>Terminator 2 (1991):</strong> Revoluciona los efectos con el T-1000 líquido</li>
        <li><strong>Jurassic Park (1993):</strong> CGI fotorrealista que cambia la industria</li>
      </ul>
      
      <p><strong>Software:</strong> Aparecen Autodesk 3D Studio, Softimage, Alias/Wavefront</p>
    `
  },
  {
    id: 'era3',
    title: 'Era Digital Moderna (2000–2015)',
    description: 'Uso masivo del 3D en producción audiovisual y videojuegos.',
    content: `
      <p>El CGI se vuelve omnipresente en cine, TV, publicidad y videojuegos. La calidad alcanza niveles fotorrealistas.</p>
      
      <img src="https://via.placeholder.com/800x400/0a0e27/00fff5?text=Avatar+(2009)+y+el+Motion+Capture+Avanzado" alt="Era 3">
      
      <p><strong>Avances técnicos:</strong></p>
      <ul style="margin-left: 20px; color: #b0b0b0;">
        <li>Iluminación global y ray tracing práctico</li>
        <li>Simulación física avanzada (fluidos, tejidos, destrucción)</li>
        <li>Motion capture de alta fidelidad</li>
        <li>Renderizado distribuido en granjas de servidores</li>
      </ul>
      
      <p><strong>Hitos:</strong> Avatar (2009), Life of Pi (2012), Gravity (2013)</p>
    `
  },
  {
    id: 'era4',
    title: 'Avances Recientes (2015–Actualidad)',
    description: 'Render en tiempo real y producción virtual con IA.',
    content: `
      <p>La convergencia de tiempo real, IA y producción virtual redefine los límites del CGI.</p>
      
      <iframe src="https://www.youtube.com/embed/Ufp8weYYDE8" frameborder="0" allowfullscreen style="width: 100%; height: 400px; border-radius: 10px; margin: 20px 0; border: 2px solid rgba(0, 255, 245, 0.3);"></iframe>
      
      <p><strong>Tecnologías disruptivas:</strong></p>
      <ul style="margin-left: 20px; color: #b0b0b0;">
        <li><strong>Unreal Engine 5:</strong> Render cinematográfico en tiempo real</li>
        <li><strong>Nanite y Lumen:</strong> Geometría y luz de nivel next-gen</li>
        <li><strong>LED Volumes:</strong> Producción virtual (usado en The Mandalorian)</li>
        <li><strong>IA generativa:</strong> DALL-E, Midjourney, Stable Diffusion para assets</li>
        <li><strong>NeRF:</strong> Reconstrucción 3D desde fotos</li>
      </ul>
    `
  }
];