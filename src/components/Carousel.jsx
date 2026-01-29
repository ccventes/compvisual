// components/Carousel.jsx
import { useState } from 'react';

export default function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentItem = items[currentIndex];

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <button className="carousel-btn prev" onClick={goToPrev}>
          ‹
        </button>

        <div className="carousel-content">
          {currentItem.type === 'video' ? (
            <div className="carousel-media">
              <iframe
                src={currentItem.src}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div className="carousel-media">
              <img src={currentItem.src} alt={currentItem.title} />
            </div>
          )}

          {currentItem.showButton && currentItem.buttonText && (
            <a
              href={currentItem.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="carousel-overlay-btn"
            >
              {currentItem.buttonText}
            </a>
          )}
        </div>

        <button className="carousel-btn next" onClick={goToNext}>
          ›
        </button>
      </div>

      <div className="carousel-indicators">
        {items.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      <p className="carousel-title">{currentItem.title}</p>
    </div>
  );
}