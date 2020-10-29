import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('Does the SearchBar component render?', () => {
  afterEach(() => cleanup());
  const dummyFunction = function() {};

  it('should render a SearchBar component', () => {
    const { asFragment } = render(<SearchBar
      search="Anythingdoesntmattererhmahgawd"
      onSubmit={dummyFunction}
      onChange={dummyFunction}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
