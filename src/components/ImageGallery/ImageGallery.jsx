import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

import { ImageGalleryItem, Modal, List } from 'components';

export const ImageGallery = ({ photos, page }) => {
  const [showModal, setShowModal] = useState(false);
  const [largeImageUrl, setLargeImageUrl] = useState('');

  const galleryRef = useRef();

  useEffect(() => {
    if (page === 1) {
      return;
    }
    const listHeight = galleryRef.current?.scrollHeight;

    smoothScroll(listHeight);
  }, [page, photos]);

  const smoothScroll = listHeight => {
    window.scrollBy({
      top: listHeight,
      behavior: 'smooth',
    });
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onShowModal = largeImageUrl => {
    setShowModal(true);
    setLargeImageUrl(largeImageUrl);
  };

  return (
    <>
      <List ref={galleryRef}>
        <ImageGalleryItem showModal={onShowModal} photos={photos} />
      </List>
      {showModal && (
        <Modal toggleModal={toggleModal}>
          <img src={largeImageUrl} alt="largeImage" />
        </Modal>
      )}
    </>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

//
