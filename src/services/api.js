import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

const API_KEY = '36230302-a98b57dafca503e591043ee2d';

export const fetchPhotosWithQuery = async ({ searchQuery, page, perPage }) => {
  const response = await axios.get('/?', {
    params: {
      q: searchQuery,
      page: page,
      key: API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: perPage,
    },
  });

  return response.data;
};
