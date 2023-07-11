import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import { List } from './ImageGallery.style';

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Modal from 'components/Modal/Modal';

export default class ImageGallery extends Component {
  static propTypes = {
    photos: PropTypes.arrayOf(
      PropTypes.shape({
        largeImageURL: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        tags: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  };

  state = {
    showModal: false,
    largeImageURL: '',
  };

  galleryRef = React.createRef();

  getSnapshotBeforeUpdate(prevProps) {
    if (prevProps.photos.length < this.props.photos.length) {
      const list = this.galleryRef.current;

      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }

  componentDidUpdate(_, __, snapshot) {
    if (snapshot !== null) {
      window.scrollBy({
        top: snapshot,
        behavior: 'smooth',
      });
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  showModal = largeImageURL => {
    this.setState({ showModal: true, largeImageURL: largeImageURL });
  };

  render() {
    const { photos } = this.props;
    const { showModal, largeImageURL } = this.state;
    return (
      <>
        <List ref={this.galleryRef}>
          <ImageGalleryItem showModal={this.showModal} photos={photos} />
        </List>
        {showModal && (
          <Modal toggleModal={this.toggleModal}>
            <img src={largeImageURL} alt="largeImage" />
          </Modal>
        )}
      </>
    );
  }
}
