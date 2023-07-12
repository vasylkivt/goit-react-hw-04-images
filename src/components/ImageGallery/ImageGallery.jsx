import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';

import { ImageGalleryItem, List } from 'components';

export const ImageGallery = ({ photos, page }) => {
  const galleryRef = useRef();

  useEffect(() => {
    if (page === 1) return;

    window.scrollBy({
      top: galleryRef.current?.scrollHeight || 0,
      behavior: 'smooth',
    });
  }, [page, photos]);

  return (
    <>
      <List ref={galleryRef}>
        {photos.map(photo => (
          <ImageGalleryItem key={photo.id} photo={photo} />
        ))}
      </List>
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
  page: PropTypes.number.isRequired,
};
