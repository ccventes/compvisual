// components/ConceptCard.jsx
export default function ConceptCard({ concept, onClick }) {
  return (
    <div className="concept-card" onClick={onClick}>
      <h4>
        <span className="icon">{concept.icon}</span> {concept.title}
      </h4>
      <p>{concept.description}</p>
      <p className="click-hint">Click para ver ejemplo ›</p>
    </div>
  );
}