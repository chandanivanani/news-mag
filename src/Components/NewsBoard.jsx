import { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import './Newsboard.css'; // Import the CSS file

const NewsBoard = ({ category = 'general' }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    if (!apiKey) {
      console.error('API key is missing');
      return;
    }

    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

    console.log('Fetching data from URL:', url);

    fetch(url)
      .then(response => {
        console.log('Received response:', response);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Received data:', data);
        setArticles(data.articles);
      })
      .catch(error => {
        console.error('Error fetching the news data:', error);
      });
  }, [category]);

  return (
    <div className="news-board">
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles.length === 0 ? (
        <p className="text-center">No news available</p>
      ) : (
        <div className="news-list">
          {articles.map((news, index) => (
            news && news.title && news.description && news.urlToImage && news.url ? (
              <NewsItem
                key={index}
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
              />
            ) : null
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsBoard;
