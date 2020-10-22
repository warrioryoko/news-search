import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NewsSearch from './NewsSearch';
import { fetchDasArticles } from './services/das-news-api';

jest.mock('./services/das-news-api.js');

describe('Does the NewsSearch component render?', () => {
  it('should display a list of articles', async() => {
    fetchDasArticles.mockResolvedValue([
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
      }
    ]);

    render(<NewsSearch />);
    const button = screen.getByTestId('dasbutton');

    await fireEvent.click(button);
    const articleList = await screen.findByTestId('articles');

    expect(articleList).not.toBeEmptyDOMElement();
  });
});
