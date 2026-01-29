// components/LandingMenu.jsx
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import './LandingMenu.css';

export default function LandingMenu({ onSelectSession }) {
  const mountRef = useRef(null);
  const [hoveredSession, setHoveredSession] = useState(null);

  const sessions = [
    { id: 1, title: 'Sesión 1', enabled: true },
    { id: 2, title: 'Sesión 2', enabled: false },
    { id: 3, title: 'Sesión 3', enabled: false },
    { id: 4, title: 'Sesión 4', enabled: false },
    { id: 5, title: 'Sesión 5', enabled: false },
    { id: 6, title: 'Sesión 6', enabled: false },
  ];

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x0a0e27, 1);
    mountRef.current.appendChild(renderer.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 100;
      posArray[i + 1] = (Math.random() - 0.5) * 100;
      posArray[i + 2] = (Math.random() - 0.5) * 100;

      // Neon colors: cyan and magenta
      const color = Math.random() > 0.5 
        ? new THREE.Color(0x00fff5) // Cyan
        : new THREE.Color(0xff00ff); // Magenta
      
      colorArray[i] = color.r;
      colorArray[i + 1] = color.g;
      colorArray[i + 2] = color.b;
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    );
    particlesGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(colorArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Create geometric shapes
    const shapes = [];
    
    // Torus
    const torusGeometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: 0x00fff5,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.set(-20, 0, -30);
    scene.add(torus);
    shapes.push(torus);

    // Icosahedron
    const icoGeometry = new THREE.IcosahedronGeometry(8, 0);
    const icoMaterial = new THREE.MeshBasicMaterial({
      color: 0xff00ff,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const icosahedron = new THREE.Mesh(icoGeometry, icoMaterial);
    icosahedron.position.set(20, 10, -40);
    scene.add(icosahedron);
    shapes.push(icosahedron);

    // Sphere
    const sphereGeometry = new THREE.SphereGeometry(6, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x00fff5,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(0, -15, -25);
    scene.add(sphere);
    shapes.push(sphere);

    camera.position.z = 30;

    // Animation
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate particles
      particlesMesh.rotation.y += 0.0005;
      particlesMesh.rotation.x += 0.0002;

      // Rotate shapes
      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.003 * (index + 1);
        shape.rotation.y += 0.005 * (index + 1);
      });

      // Camera movement based on mouse
      camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      torusGeometry.dispose();
      torusMaterial.dispose();
      icoGeometry.dispose();
      icoMaterial.dispose();
      sphereGeometry.dispose();
      sphereMaterial.dispose();
    };
  }, []);

  const handleSessionClick = (session) => {
    if (session.enabled) {
      onSelectSession(session.id);
    }
  };

  return (
    <div className="landing-container">
      <div ref={mountRef} className="three-background"></div>
      
      <div className="landing-content">
        <div className="landing-header">
          <h1 className="landing-title">Computación Visual</h1>
          <h2 className="landing-subtitle">y Metaverso</h2>
        </div>

        <div className="sessions-grid">
          {sessions.map((session) => (
            <div
              key={session.id}
              className="session-card-wrapper"
              onMouseEnter={() => !session.enabled && setHoveredSession(session.id)}
              onMouseLeave={() => setHoveredSession(null)}
            >
              <button
                className={`session-card ${session.enabled ? 'enabled' : 'disabled'}`}
                onClick={() => handleSessionClick(session)}
                disabled={!session.enabled}
              >
                <span className="session-number">{String(session.id).padStart(2, '0')}</span>
                <span className="session-title">{session.title}</span>
                
                {session.enabled && (
                  <span className="session-arrow">→</span>
                )}
              </button>

              {!session.enabled && hoveredSession === session.id && (
                <div className="tooltip">
                  Próximamente...
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}