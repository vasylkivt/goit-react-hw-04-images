import PropTypes from 'prop-types';
import { Button } from './Button.style';

const ButtonLoadMore = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      Load More
    </Button>
  );
};
ButtonLoadMore.propTypes = { onClick: PropTypes.func.isRequired };
export default ButtonLoadMore;
