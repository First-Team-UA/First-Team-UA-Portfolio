// src/Modal/Modal.tsx
import React, { ReactNode } from 'react';
import './Modal.css'; // Optional: Add some CSS for styling

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>Close</button>
        {/* {children} */}
        <img src="" alt="Photo Ostap" />
        <h1>Kryven Ostap</h1>
        <h2>Front-End developer</h2>
        <p>Info - Ostap</p>
        <button> Back </button>
        <button> Next </button>
      </div>
    </div>
  );
};

export default Modal;
