import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <footer>
      <h1>Footer</h1>
      <button onClick={handleOpenModal}>Our team</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Our Team</h2>
        <p>Here is the information about our team...</p>
      </Modal>
    </footer>
  );
};

export default Footer;
