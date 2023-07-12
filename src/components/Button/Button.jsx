import PropTypes from 'prop-types';
import { Button } from './Button.style';

export const ButtonLoadMore = ({ onClick }) => (
  <Button type="button" onClick={onClick}>
    Load More
  </Button>
);

ButtonLoadMore.propTypes = { onClick: PropTypes.func.isRequired };
