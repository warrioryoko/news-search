import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Article from './Article';

describe('does the Article component render?', () => {
  afterEach(() => cleanup());
  it('should render the Article component', () => {
    const { asFragment } = render(<Article
      title="title"
      author="author"
      description="description"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
