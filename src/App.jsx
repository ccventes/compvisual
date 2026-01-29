// App.jsx
import { useState, useEffect } from 'react';
import './App.css';
import LandingMenu from './components/LandingMenu';
import Header from './components/Header';
import CGIIntro from './components/CGIIntro';
import ConceptsSection from './components/ConceptsSection';
import Timeline from './components/Timeline';
import Trends from './components/Trends';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
  const [currentSession, setCurrentSession] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (content) => {
    setModalContent(content);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalContent(null);
    document.body.style.overflow = 'auto';
  };

  const handleSelectSession = (sessionId) => {
    setCurrentSession(sessionId);
  };

  // Show landing menu if no session is selected
  if (!currentSession) {
    return <LandingMenu onSelectSession={handleSelectSession} />;
  }

  // Show session content
  return (
    <div className="app">
      <div className="bg-animation"></div>
      <div className="bg-grid"></div>
      <div className="scroll-indicator" style={{ width: `${scrollProgress}%` }}></div>

      <button className="back-to-menu-btn" onClick={() => setCurrentSession(null)}>
        <span className="back-arrow">←</span>
        <span className="back-text">Volver al Menú</span>
      </button>

      <div className="container">
        <Header />
        <CGIIntro />
        <ConceptsSection openModal={openModal} />
        <Timeline openModal={openModal} />
        <Trends openModal={openModal} />
        <Footer />
      </div>

      {modalContent && <Modal content={modalContent} onClose={closeModal} />}
    </div>
  );
}

export default App;