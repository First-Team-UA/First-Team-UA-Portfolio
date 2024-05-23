
import React from 'react';
import './Modal.css';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>Close</button>
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
