// components/TrendCard.jsx
export default function TrendCard({ trend, onClick }) {
  return (
    <div className="trend-card" onClick={onClick}>
      <h4>{trend.icon} {trend.title}</h4>
      <p>{trend.description}</p>
      <p className="click-hint">Click para ver más ›</p>
    </div>
  );
}