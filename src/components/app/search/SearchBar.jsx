import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ search, onSubmit, onChange }) => (
  <>
    <label htmlFor="search">Search here!</label>
    <input
      id="search"
      type="search"
      name="search"
      value={search}
      onChange={onChange}
    />
    <button onClick={onSubmit} data-testid="dasbutton">Push me!</button>
  </>
);

SearchBar.propTypes = {
  search: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SearchBar;
