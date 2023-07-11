import PropTypes from 'prop-types';
import { Image, Item } from './ImageGalleryItem.style';

const ImageGalleryItem = ({ photos, showModal }) => {
  return photos.map(({ largeImageURL, webformatURL, id, tags }) => {
    return (
      <Item key={id}>
        <Image
          onClick={() => showModal(largeImageURL)}
          src={webformatURL}
          alt={tags}
        />
      </Item>
    );
  });
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  showModal: PropTypes.func.isRequired,
};
