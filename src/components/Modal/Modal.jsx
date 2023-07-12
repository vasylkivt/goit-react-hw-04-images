import { Backdrop, ModalContent } from './Modal.style';

import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ children, showModal }) => {
  useEffect(() => {
    const handlerKeyDown = evt => {
      if (evt.code === 'Escape') showModal();
    };

    window.addEventListener('keydown', handlerKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handlerKeyDown);
      document.body.style.overflow = '';
    };
  }, [showModal]);

  const handlerBackdropClick = evt => {
    if (evt.currentTarget === evt.target) showModal();
  };

  return createPortal(
    <Backdrop onClick={handlerBackdropClick}>
      <ModalContent>{children}</ModalContent>
    </Backdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  showModal: PropTypes.func.isRequired,
};
