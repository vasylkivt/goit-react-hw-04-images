import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const fetchPhotosWithQuery = async ({
  searchQuery,
  page,
  perPage,
  apiKey,
}) => {
  const response = await axios.get('/?', {
    params: {
      q: searchQuery,
      page: page,
      key: apiKey,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: perPage,
    },
  });

  return response.data;
};
