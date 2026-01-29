// data/trendsData.js
export const trendsData = [
  {
    id: 'realtime',
    icon: '🎮',
    title: 'Render en Tiempo Real',
    description: 'Motores como Unreal Engine y Unity permiten ver resultados instantáneos.',
    content: `
      <p>Tecnología que permite visualizar escenas 3D complejas instantáneamente, sin espera de renderizado.</p>
      
      <iframe src="https://www.youtube.com/embed/qC5KtatMcUw" frameborder="0" allowfullscreen style="width: 100%; height: 400px; border-radius: 10px; margin: 20px 0; border: 2px solid rgba(0, 255, 245, 0.3);"></iframe>
      
      <p><strong>Aplicaciones:</strong></p>
      <ul style="margin-left: 20px; color: #b0b0b0;">
        <li>Videojuegos AAA de nueva generación</li>
        <li>Previsualización cinematográfica instantánea</li>
        <li>Producción virtual en sets con LED walls</li>
        <li>Experiencias interactivas y arquitectura</li>
      </ul>
      
      <p><strong>Engines principales:</strong> Unreal Engine 5, Unity, CryEngine</p>
    `
  },
  {
    id: 'ia',
    icon: '🤖',
    title: 'Integración con IA',
    description: 'Generación de texturas y animaciones automatizadas.',
    content: `
      <p>La Inteligencia Artificial está revolucionando cada etapa del pipeline de CGI.</p>
      
      <img src="https://via.placeholder.com/800x400/0a0e27/ff00ff?text=AI-Generated+Assets+and+Animation" alt="IA">
      
      <p><strong>Aplicaciones actuales:</strong></p>
      <ul style="margin-left: 20px; color: #b0b0b0;">
        <li><strong>Generación de texturas:</strong> Crear materiales fotorrealistas con prompts</li>
        <li><strong>Animación facial:</strong> Transferencia de expresiones automática</li>
        <li><strong>Upscaling:</strong> Aumentar resolución con AI (DLSS, FSR)</li>
        <li><strong>Rotoscopia automática:</strong> Separación de sujetos del fondo</li>
        <li><strong>Generación 3D:</strong> Modelos 3D desde descripciones de texto</li>
      </ul>
      
      <p><strong>Herramientas:</strong> Runway ML, DALL-E, Stable Diffusion, Wonder Dynamics</p>
    `
  },
  {
    id: 'virtual',
    icon: '🎬',
    title: 'Producción Virtual',
    description: 'Entornos 3D proyectados en pantallas LED.',
    content: `
      <p>Técnica que combina sets físicos con entornos digitales proyectados en pantallas LED gigantes.</p>
      
      <iframe src="https://www.youtube.com/embed/Ufp8weYYDE8" frameborder="0" allowfullscreen style="width: 100%; height: 400px; border-radius: 10px; margin: 20px 0; border: 2px solid rgba(0, 255, 245, 0.3);"></iframe>
      
      <p><strong>Ventajas:</strong></p>
      <ul style="margin-left: 20px; color: #b0b0b0;">
        <li>Elimina pantallas verdes y su complejo post-proceso</li>
        <li>Iluminación realista del entorno sobre actores</li>
        <li>Feedback inmediato del resultado final</li>
        <li>Mayor flexibilidad creativa en set</li>
        <li>Perspectiva correcta con tracking de cámara</li>
      </ul>
      
      <p><strong>Producciones destacadas:</strong> The Mandalorian, Thor: Love and Thunder, The Batman</p>
    `
  },
  {
    id: 'hibrido',
    icon: '🎨',
    title: 'Hibridación 2D–3D',
    description: 'Combinación de ilustración 2D con geometría 3D.',
    content: `
      <p>Estilo que mezcla técnicas de ilustración 2D tradicional con geometría y animación 3D.</p>
      
      <img src="https://via.placeholder.com/800x400/0a0e27/00fff5?text=Spider-Verse+Style:+2D+Look+with+3D+Pipeline" alt="Híbrido">
      
      <p><strong>Características:</strong></p>
      <ul style="margin-left: 20px; color: #b0b0b0;">
        <li>Geometría 3D con shading cel/toon</li>
        <li>Líneas dibujadas a mano sobre modelos 3D</li>
        <li>Timing irregular (animación "en doses/treses")</li>
        <li>Efectos visuales estilizados no fotorrealistas</li>
      </ul>
      
      <p><strong>Ejemplos:</strong> Spider-Man: Into/Across the Spider-Verse, The Mitchells vs the Machines, Arcane</p>
    `
  },
  {
    id: 'simulacion',
    icon: '💧',
    title: 'Simulaciones Físicas',
    description: 'Fuego, fluidos, cabello con mayor realismo.',
    content: `
      <p>Uso de algoritmos que replican comportamientos físicos del mundo real.</p>
      
      <iframe src="https://www.youtube.com/embed/iKAVRgIrUOU" frameborder="0" allowfullscreen style="width: 100%; height: 400px; border-radius: 10px; margin: 20px 0; border: 2px solid rgba(0, 255, 245, 0.3);"></iframe>
      
      <p><strong>Tipos de simulación:</strong></p>
      <ul style="margin-left: 20px; color: #b0b0b0;">
        <li><strong>Fluidos:</strong> Agua, lava, humo (técnicas SPH, FLIP)</li>
        <li><strong>Rigid body:</strong> Destrucción, colisiones de objetos sólidos</li>
        <li><strong>Cloth/Tela:</strong> Ropa, banderas, cortinas</li>
        <li><strong>Cabello/Fur:</strong> Pelo y pelaje realista</li>
        <li><strong>Partículas:</strong> Fuego, explosiones, polvo, magia</li>
      </ul>
      
      <p><strong>Software especializado:</strong> Houdini, RealFlow, Bifrost, PhoenixFD</p>
    `
  },
  {
    id: 'ar',
    icon: '🥽',
    title: 'Realidad Aumentada',
    description: 'CGI en tiempo real en espacios físicos.',
    content: `
      <p>Integración de elementos CGI en tiempo real sobre el mundo físico capturado por cámaras.</p>
      
      <img src="https://via.placeholder.com/800x400/0a0e27/ff00ff?text=AR+in+Live+Broadcasting+and+Events" alt="AR">
      
      <p><strong>Aplicaciones comerciales:</strong></p>
      <ul style="margin-left: 20px; color: #b0b0b0;">
        <li><strong>Deportes:</strong> Marcadores, líneas de offside, estadísticas 3D</li>
        <li><strong>Noticias:</strong> Gráficos informativos flotantes</li>
        <li><strong>Conciertos:</strong> Efectos visuales en vivo con artistas</li>
        <li><strong>Publicidad:</strong> Productos virtuales en espacios reales</li>
        <li><strong>Retail:</strong> "Pruébate" ropa y maquillaje virtualmente</li>
      </ul>
      
      <p><strong>Plataformas:</strong> ARKit (Apple), ARCore (Google), Spark AR (Meta)</p>
    `
  }
];