// components/Modal.jsx
import { useEffect } from 'react';

export default function Modal({ content, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{content.modalTitle || content.title}</h3>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        <div 
          className="modal-body" 
          dangerouslySetInnerHTML={{ __html: content.content }}
        />
      </div>
    </div>
  );
}