export const fetchDasArticles = (search) => {
  //https://newsapi.org/account get API key here
  const API_KEY = 'de6d4f8774af4e0cb1a573bc09221f05';

  //https://newsapi.org/docs/endpoints/everything gives query format
  return fetch(
    `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`, {
      header: {
        Origin: null
      }
    })
    .then(res => res.json())
    .then(json => json.articles.map(article => ({
      title: article.title,
      author: article.author,
      description: article.description
    })));
};
