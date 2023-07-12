import PropTypes from 'prop-types';
import { Image, Item } from './ImageGalleryItem.style';

import { Modal } from 'components';
import { useState } from 'react';

export const ImageGalleryItem = ({
  photo: { largeImageURL, webformatURL, tags },
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Item>
      <Image
        onClick={() => {
          setShowModal(true);
        }}
        src={webformatURL}
        alt={tags}
      />
      {showModal && (
        <Modal
          showModal={() => {
            setShowModal(false);
          }}
        >
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  photo: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};
