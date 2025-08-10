import React from 'react';
import Modal from './Modal';
import { useGlossary } from '@/contexts/GlossaryContext';

const GlossaryModal: React.FC = () => {
  const { activeTerm, isModalOpen, closeModal } = useGlossary();

  if (!activeTerm) return null;

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={closeModal}
      title={activeTerm.term}
    >
      <div dangerouslySetInnerHTML={{ __html: activeTerm.explanation }} />
    </Modal>
  );
};

export default GlossaryModal;