// data/conceptsData.js
export const conceptsData = {
  fundamentals: [
    {
      id: 'pixel',
      icon: '🔲',
      title: 'Pixel y Resolución',
      description: 'Unidad mínima de información visual',
      modalTitle: '🔲 Pixel y Resolución',
      content: `
        <p><strong>Definición:</strong> Un pixel (picture element) es la unidad mínima de información visual en una imagen digital. La resolución determina cuántos pixels existen en un área determinada.</p>
        
        <img src="https://via.placeholder.com/800x400/0a0e27/00fff5?text=Comparación+de+Resoluciones:+720p+vs+1080p+vs+4K" alt="Resoluciones">
        
        <p><strong>Conceptos clave:</strong></p>
        <ul style="margin-left: 20px; color: #b0b0b0;">
          <li>Baja resolución (720p): 1280×720 pixels</li>
          <li>Full HD (1080p): 1920×1080 pixels</li>
          <li>4K UHD: 3840×2160 pixels</li>
          <li>A mayor resolución, mayor detalle y calidad</li>
        </ul>
        
        <p style="margin-top: 20px;"><em>Reemplaza esta imagen con ejemplos reales de diferentes resoluciones.</em></p>
      `
    },
    {
      id: 'vectores',
      icon: '📐',
      title: 'Gráficos Vectoriales',
      description: 'Imágenes basadas en matemáticas',
      modalTitle: '📐 Gráficos Vectoriales',
      content: `
        <p><strong>Definición:</strong> Los gráficos vectoriales utilizan fórmulas matemáticas para definir formas, líneas y colores, permitiendo escalado infinito sin pérdida de calidad.</p>
        
        <img src="https://via.placeholder.com/800x400/0a0e27/ff00ff?text=Vector+vs+Raster:+Escalado+sin+pérdida" alt="Vectores">
        
        <p><strong>Ventajas:</strong></p>
        <ul style="margin-left: 20px; color: #b0b0b0;">
          <li>Escalabilidad infinita</li>
          <li>Archivos más livianos</li>
          <li>Ideal para logos, tipografía e ilustración</li>
          <li>Editable matemáticamente</li>
        </ul>
        
        <p><strong>Software común:</strong> Adobe Illustrator, Inkscape, Figma</p>
      `
    },
    {
      id: 'espacios',
      icon: '📊',
      title: 'Espacios 2D y 3D',
      description: 'Representación plana vs. tridimensional',
      modalTitle: '📊 Espacios 2D y 3D',
      content: `
        <p><strong>2D (Bidimensional):</strong> Utiliza coordenadas X (horizontal) e Y (vertical) para posicionar elementos en un plano.</p>
        
        <p><strong>3D (Tridimensional):</strong> Añade el eje Z (profundidad), permitiendo representar volumen y perspectiva.</p>
        
        <img src="https://via.placeholder.com/800x400/0a0e27/00fff5?text=Sistema+de+Coordenadas+2D+(X,Y)+vs+3D+(X,Y,Z)" alt="Coordenadas">
        
        <p><strong>Aplicaciones:</strong></p>
        <ul style="margin-left: 20px; color: #b0b0b0;">
          <li>2D: Interfaces, motion graphics, ilustración digital</li>
          <li>3D: Modelado, arquitectura, videojuegos, VFX cinematográficos</li>
        </ul>
      `
    }
  ],
  production: [
    {
      id: 'modelado',
      icon: '🗿',
      title: 'Modelado',
      description: 'Construcción de figuras en 3D',
      modalTitle: '🗿 Modelado 3D',
      content: `
        <p><strong>Definición:</strong> Proceso de crear representaciones tridimensionales de objetos mediante polígonos, superficies o sculpting digital.</p>
        
        <iframe src="https://www.youtube.com/embed/VT5oZndzj68" frameborder="0" allowfullscreen style="width: 100%; height: 400px; border-radius: 10px; margin: 20px 0; border: 2px solid rgba(0, 255, 245, 0.3);"></iframe>
        
        <p><strong>Técnicas principales:</strong></p>
        <ul style="margin-left: 20px; color: #b0b0b0;">
          <li><strong>Box modeling:</strong> Partir de formas primitivas</li>
          <li><strong>Sculpting:</strong> Modelado orgánico como escultura digital</li>
          <li><strong>NURBS:</strong> Superficies curvas matemáticas</li>
          <li><strong>Procedural:</strong> Geometría generada por algoritmos</li>
        </ul>
        
        <p><strong>Software:</strong> Blender, Maya, 3ds Max, ZBrush</p>
      `
    },
    {
      id: 'texturas',
      icon: '🎨',
      title: 'Materiales y Texturas',
      description: 'Apariencia superficial de objetos',
      modalTitle: '🎨 Materiales y Texturas',
      content: `
        <p><strong>Definición:</strong> Las texturas son imágenes aplicadas a modelos 3D para definir color, rugosidad, reflectividad y otros aspectos visuales de la superficie.</p>
        
        <img src="https://via.placeholder.com/800x400/0a0e27/ff00ff?text=PBR+Textures:+Albedo,+Normal,+Roughness,+Metallic" alt="Texturas">
        
        <p><strong>Mapas comunes:</strong></p>
        <ul style="margin-left: 20px; color: #b0b0b0;">
          <li><strong>Albedo/Diffuse:</strong> Color base</li>
          <li><strong>Normal Map:</strong> Detalle de superficie sin geometría adicional</li>
          <li><strong>Roughness:</strong> Qué tan áspera o suave es la superficie</li>
          <li><strong>Metallic:</strong> Propiedades metálicas del material</li>
          <li><strong>Displacement:</strong> Altera la geometría real</li>
        </ul>
      `
    },
    {
      id: 'iluminacion',
      icon: '💡',
      title: 'Iluminación',
      description: 'Interacción de luz con objetos',
      modalTitle: '💡 Iluminación',
      content: `
        <p><strong>Definición:</strong> La iluminación simula cómo la luz interactúa con objetos y superficies, creando atmósfera y realismo.</p>
        
        <iframe src="https://www.youtube.com/embed/j-O4xEJybF8" frameborder="0" allowfullscreen style="width: 100%; height: 400px; border-radius: 10px; margin: 20px 0; border: 2px solid rgba(0, 255, 245, 0.3);"></iframe>
        
        <p><strong>Tipos de luz:</strong></p>
        <ul style="margin-left: 20px; color: #b0b0b0;">
          <li><strong>Direccional:</strong> Simula luz solar (rayos paralelos)</li>
          <li><strong>Puntual:</strong> Emite desde un punto en todas direcciones</li>
          <li><strong>Spot:</strong> Cono de luz direccional</li>
          <li><strong>Área:</strong> Luz que emite desde una superficie</li>
          <li><strong>HDRI:</strong> Iluminación basada en imagen 360°</li>
        </ul>
      `
    },
    {
      id: 'animacion',
      icon: '🎬',
      title: 'Animación',
      description: 'Generación de movimiento',
      modalTitle: '🎬 Animación',
      content: `
        <p><strong>Definición:</strong> Proceso de crear movimiento mediante fotogramas secuenciales o simulaciones.</p>
        
        <iframe src="https://www.youtube.com/embed/9RyYwv_WRvQ" frameborder="0" allowfullscreen style="width: 100%; height: 400px; border-radius: 10px; margin: 20px 0; border: 2px solid rgba(0, 255, 245, 0.3);"></iframe>
        
        <p><strong>Técnicas principales:</strong></p>
        <ul style="margin-left: 20px; color: #b0b0b0;">
          <li><strong>Keyframe Animation:</strong> Definir poses clave, el software interpola el resto</li>
          <li><strong>Motion Capture:</strong> Captura de movimiento real</li>
          <li><strong>Procedural:</strong> Movimiento generado por algoritmos</li>
          <li><strong>Rigging:</strong> Esqueleto digital para controlar personajes</li>
        </ul>
      `
    },
    {
      id: 'render',
      icon: '⚡',
      title: 'Renderización',
      description: 'Cálculo de imagen final',
      modalTitle: '⚡ Renderización',
      content: `
        <p><strong>Definición:</strong> Proceso computacional que calcula la imagen final considerando geometría, materiales, luces y cámara.</p>
        
        <img src="https://via.placeholder.com/800x400/0a0e27/00fff5?text=Render+Process:+Wireframe+→+Shading+→+Final" alt="Render">
        
        <p><strong>Métodos de renderizado:</strong></p>
        <ul style="margin-left: 20px; color: #b0b0b0;">
          <li><strong>Rasterización:</strong> Rápido, usado en videojuegos y tiempo real</li>
          <li><strong>Ray Tracing:</strong> Simula rayos de luz físicamente, ultra realista</li>
          <li><strong>Path Tracing:</strong> Múltiples rebotes de luz, calidad máxima</li>
        </ul>
        
        <p><strong>Engines populares:</strong> V-Ray, Arnold, Octane, Cycles, Unreal Engine</p>
      `
    }
  ]
};