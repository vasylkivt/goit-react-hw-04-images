import React, { useEffect, useState } from 'react';

import { fetchPhotosWithQuery } from 'services';

import {
  Container,
  Header,
  Notification,
  SearchBar,
  Section,
  Loader,
  ImageGallery,
  ButtonLoadMore,
} from 'components';

const PER_PAGE = 12;
//!
const API_KEY = '36230302-a98b57dafca503e591043ee2d';

export const App = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [noPicturesFound, setNoPicturesFound] = useState(false);

  useEffect(() => {
    if (query === '') {
      return;
    }
    updateGallery();

    async function updateGallery() {
      setIsLoading(true);
      try {
        const response = await fetchPhotosWithQuery({
          searchQuery: query,
          page: page,
          perPage: PER_PAGE,
          apiKey: API_KEY,
        });

        if (response.hits.length === 0) {
          setError(null);
          setNoPicturesFound(true);
          return;
        } else {
          setError(null);
          setNoPicturesFound(false);
        }

        const totalPage = Math.ceil(response.totalHits / PER_PAGE);

        setPhotos(prevPhotos => {
          return [...prevPhotos, ...response.hits];
        });

        setIsLastPage(page >= totalPage);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [query, page]);

  const handleSubmit = value => {
    if (value.searchValue.trim() === '') {
      return;
    }

    if (query === value.searchValue) {
      return;
    }

    setPhotos([]);
    setQuery(value.searchValue);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const isGalleryEmpty = photos.length === 0;

  return (
    <>
      <Header>
        <SearchBar onSubmit={handleSubmit} />
      </Header>
      {isGalleryEmpty && !noPicturesFound && !error && (
        <Notification>You can use the search to find images</Notification>
      )}

      {noPicturesFound && (
        <Notification>
          Sorry, there are no images matching your request. Please try again.
        </Notification>
      )}

      {error && (
        <Notification>
          Unfortunately, something went wrong. Please try again or reload the
          page.
        </Notification>
      )}
      {!isGalleryEmpty && (
        <Section>
          <Container>
            <ImageGallery page={page} photos={photos} />
            {!isLoading && !isLastPage && !isGalleryEmpty && (
              <ButtonLoadMore onClick={handleLoadMore} />
            )}
          </Container>
        </Section>
      )}
      {isLoading && <Loader />}
    </>
  );
};
