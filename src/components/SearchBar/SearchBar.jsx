import {
  Button,
  ErrorsMessage,
  Input,
  SearchForm,
  SearchIcon,
} from './SearchBar.style';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

const SearchScheme = Yup.object().shape({
  searchValue: Yup.string().min(2, 'Too Short!').required('Required'),
});

const SearchBar = ({ onSubmit }) => (
  <Formik
    initialValues={{
      searchValue: '',
    }}
    onSubmit={values => {
      onSubmit(values);
    }}
    validationSchema={SearchScheme}
  >
    {({ errors, touched }) => (
      <SearchForm>
        <Button type="submit">
          <SearchIcon />
        </Button>

        <Input
          name="searchValue"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        {errors.searchValue && touched.searchValue ? (
          <ErrorsMessage>{errors.searchValue}</ErrorsMessage>
        ) : null}
      </SearchForm>
    )}
  </Formik>
);

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
