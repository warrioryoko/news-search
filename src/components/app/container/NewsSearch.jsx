import React, { Component } from 'react';
import ArticleList from '../articles/ArticleList';
import SearchBar from '../search/SearchBar';
import LoadingSpinner from '../articles/LoadingSpinner';
import { fetchDasArticles } from './services/das-news-api';

export default class ArticleResults extends Component {
  state = {
    articles: [],
    search: '',
    loading: true
  }

  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  }

  handleSearch = async() => {
    const fetchedArticles = await fetchDasArticles(this.state.search);
    this.setState({ articles: fetchedArticles, loading: false });
  }

  render() {
    const { articles, search, loading } = this.state;

    if(loading) return <>
      <SearchBar
        search={search}
        onSubmit={this.handleSearch}
        onChange={this.handleChange}
      />
      <LoadingSpinner />
    </>;
    return (
      <>
        <SearchBar
          search={search}
          onSubmit={this.handleSearch}
          onChange={this.handleChange}
        />
        <ArticleList
          articles={articles}
        />
      </>
    );
  }
}
