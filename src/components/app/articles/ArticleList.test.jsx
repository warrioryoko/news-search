import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ArticleList from './ArticleList.jsx';

const articleTestArray = [
  { title: 'favorite things 1', 
    author: 'Oscar Hammerstein', 
    description: 'Raindrops on roses and whiskers on kittens'
  },
  { title: 'favorite things 2', 
    author: 'Oscar Hammerstein', 
    description: 'Bright copper kettles and warm woolen mittens' 
  },
  { title: 'favorite things 3', 
    author: 'Oscar Hammerstein', 
    description: 'Brown paper packages tied up with strings' 
  },
  { title: 'favorite things 4', 
    author: 'Oscar Hammerstein', 
    description: 'Cream colored ponies and crisp apple strudels' 
  },
  { title: 'favorite things 5', 
    author: 'Oscar Hammerstein', 
    description: 'Door bells and sleigh bells and schnitzel with noodles' 
  },
  { title: 'favorite things 6', 
    author: 'Oscar Hammerstein', 
    description: 'Wild geese that fly with the moon on their wings' 
  },
  { title: 'favorite things 7', 
    author: 'Oscar Hammerstein', 
    description: 'Girls in white dresses with blue satin sashes' 
  },
  { title: 'favorite things 8', 
    author: 'Oscar Hammerstein', 
    description: 'Snowflakes that stay on my nose and eyelashes' 
  },
  { title: 'favorite things 9', 
    author: 'Oscar Hammerstein', 
    description: 'Silver white winters that melt into springs' 
  },
];

describe('Does the ArticleList component render?', () => {
  afterEach(() => cleanup());
  it('should render the ArticleList component', () => {
    const { asFragment } = render(<ArticleList
      articles={articleTestArray}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
