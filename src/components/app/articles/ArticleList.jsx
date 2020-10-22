import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({ articles }) => {
  const articleListItems = articles.map(article => (
    <li key={article.title}>
      <Article {...article} />
    </li>
  ));

  return (
    <ul data-testid="articles">
      {articleListItems}
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })).isRequired
};

export default ArticleList;
