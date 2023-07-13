import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { ImageGalleryItem, List } from 'components';

export const ImageGallery = forwardRef(({ photos }, ref) => {
  return (
    <>
      <List ref={ref}>
        {photos.map(photo => (
          <ImageGalleryItem key={photo.id} photo={photo} />
        ))}
      </List>
    </>
  );
});

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
