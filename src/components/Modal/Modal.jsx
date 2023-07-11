import { Backdrop, ModalContent } from './Modal.style';

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  static propTypes = {
    toggleModal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handlerKeyDown);
    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlerKeyDown);
    document.body.style.overflow = '';
  }

  handlerKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.toggleModal();
    }
  };
  handlerBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.toggleModal();
    }
  };

  render() {
    const { children } = this.props;
    return createPortal(
      <Backdrop onClick={this.handlerBackdropClick}>
        <ModalContent>{children}</ModalContent>
      </Backdrop>,
      modalRoot
    );
  }
}
