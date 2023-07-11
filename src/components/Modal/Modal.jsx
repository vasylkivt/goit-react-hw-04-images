import { Backdrop, ModalContent } from './Modal.style';

import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, toggleModal }) => {
  useEffect(() => {
    const handlerKeyDown = evt => {
      if (evt.code === 'Escape') {
        toggleModal();
      }
    };
    window.addEventListener('keydown', handlerKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handlerKeyDown);
      document.body.style.overflow = '';
    };
  }, [toggleModal]);

  const handlerBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      toggleModal();
    }
  };

  return createPortal(
    <Backdrop onClick={handlerBackdropClick}>
      <ModalContent>{children}</ModalContent>
    </Backdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};
