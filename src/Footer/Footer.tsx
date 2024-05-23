import React, { useState } from 'react';
import Modal from '../Modal/Modal';

const modalsContent = [
  {
    imgSrc: '',
    imgAlt: 'Photo Ostap',
    title: 'Kryven Ostap',
    subtitle: 'Front-End Developer',
    info: 'Info - Ostap',
  },
  {
    imgSrc: '',
    imgAlt: 'Photo Alex',
    title: 'Alex Johnson',
    subtitle: 'Back-End Developer',
    info: 'Info - Alex',
  },
  {
    imgSrc: '',
    imgAlt: 'Photo Maria',
    title: 'Maria Garcia',
    subtitle: 'Full-Stack Developer',
    info: 'Info - Maria',
  },
  {
    imgSrc: '',
    imgAlt: 'Photo John',
    title: 'John Doe',
    subtitle: 'Designer',
    info: 'Info - John',
  },
  {
    imgSrc: '',
    imgAlt: 'Photo Jane',
    title: 'Jane Smith',
    subtitle: 'Project Manager',
    info: 'Info - Jane',
  }
];

const Footer: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setCurrentIndex(0); 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleNext = () => {
    if (currentIndex < modalsContent.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const { imgSrc, imgAlt, title, subtitle, info } = modalsContent[currentIndex];

  return (
    <footer>
      <h1>Footer</h1>
      <button onClick={handleOpenModal}>Our team</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <img src={imgSrc} alt={imgAlt} />
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{info}</p>
        <button onClick={handleBack} disabled={currentIndex === 0}>Back</button>
        <button onClick={handleNext} disabled={currentIndex === modalsContent.length - 1}>Next</button>
      </Modal>
    </footer>
  );
};

export default Footer;
