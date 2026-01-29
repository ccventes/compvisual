import TimelineItem from './TimelineItem';
import { timelineData } from '../data/timelineData';

export default function Timeline({ openModal }) {
  return (
    <section className="section">
      <h2>2. Historia y Evolución</h2>
      
      <div className="timeline">
        {timelineData.map((era) => (
          <TimelineItem
            key={era.id}
            era={era}
            onClick={() => openModal(era)}
          />
        ))}
      </div>
    </section>
  );
}