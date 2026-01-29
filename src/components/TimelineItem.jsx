// components/TimelineItem.jsx
export default function TimelineItem({ era, onClick }) {
  return (
    <div className="timeline-item" onClick={onClick}>
      <h4>{era.title}</h4>
      <p>{era.description}</p>
      <p className="click-hint">Click para ver más ›</p>
    </div>
  );
}