import React, { Component } from 'react';

import { fetchPhotosWithQuery } from 'services/api';

import Loader from 'components/Loader/Loader';
import Section from 'components/Section/Section';
import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import SearchBar from 'components/SearchBar/SearchBar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import ButtonLoadMore from 'components/Button/Button';
import Notification from 'components/Notification/Notification';

const PER_PAGE = 12;
//!
const API_KEY = '36230302-a98b57dafca503e591043ee2d';

export default class App extends Component {
  perPage = PER_PAGE;

  state = {
    photos: [],
    isLoading: false,
    error: null,
    noPicturesFound: false,
    query: null,
    page: 1,
    totalPage: 0,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.updateGallery();
    }
  }

  async updateGallery() {
    const { photos, query, page } = this.state;

    this.setState({ isLoading: true });
    try {
      const response = await fetchPhotosWithQuery({
        searchQuery: query,
        page: page,
        perPage: this.perPage,
        apiKey: API_KEY,
      });

      if (response.hits.length === 0) {
        this.setState({
          noPicturesFound: true,
          error: null,
        });
        return;
      } else {
        this.setState({
          noPicturesFound: false,
          error: null,
        });
      }

      const totalPage = response.totalHits / this.perPage;
      this.setState({
        photos: [...photos, ...response.hits],
        isLoading: false,
        totalPage,
      });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  }

  handlerSubmit = value => {
    if (value.searchValue.trim() === '') {
      return;
    }

    if (this.state.query === value.searchValue) {
      return;
    }

    this.setState(() => {
      return {
        query: value.searchValue,
        page: 1,
        photos: [],
        totalPage: 0,
      };
    });
  };

  handlerLoadMore = () => {
    this.setState(prevState => {
      return {
        page: prevState.page + 1,
      };
    });
  };

  render() {
    const { photos, isLoading, error, page, totalPage, noPicturesFound } =
      this.state;

    const isGalleryEmpty = photos.length === 0;

    const isLastPage = page > totalPage;
    return (
      <>
        <Header>
          <SearchBar onSubmit={this.handlerSubmit} />
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
              <ImageGallery photos={photos} />

              {!isLoading && !isLastPage && !isGalleryEmpty && (
                <ButtonLoadMore onClick={this.handlerLoadMore} />
              )}
            </Container>
          </Section>
        )}

        {isLoading && <Loader />}
      </>
    );
  }
}
