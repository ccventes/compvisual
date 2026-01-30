// components/Trends.jsx
import TrendCard from './TrendCard';
import { trendsData } from '../data/trendsData';

export default function Trends({ openModal }) {
  return (
    <section className="section">
      <h2>3. Tendencias Actuales</h2>
      
      <div className="trend-grid">
        {trendsData.map((trend) => (
          <TrendCard
            key={trend.id}
            trend={trend}
            onClick={() => openModal(trend)}
          />
        ))}
      </div>
    </section>
  );
}