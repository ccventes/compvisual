// components/ConceptsSection.jsx
import ConceptCard from './ConceptCard';
import { conceptsData } from '../data/conceptsData';

export default function ConceptsSection({ openModal }) {
  return (
    <section className="section">
      <h2>1. Conceptos Básicos</h2>
      
      <h3>Fundamentos Visuales</h3>
      <div className="concepts-grid">
        {conceptsData.fundamentals.map((concept) => (
          <ConceptCard
            key={concept.id}
            concept={concept}
            onClick={() => openModal(concept)}
          />
        ))}
      </div>

      <h3>Elementos de Producción 3D</h3>
      <div className="concepts-grid">
        {conceptsData.production.map((concept) => (
          <ConceptCard
            key={concept.id}
            concept={concept}
            onClick={() => openModal(concept)}
          />
        ))}
      </div>
    </section>
  );
}

// components/ConceptCard.jsx

