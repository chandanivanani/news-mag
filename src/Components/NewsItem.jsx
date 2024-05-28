import './NewsItem.css';
import image from '../assets/news.jpg';

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="news-item">
      <img src={src?src:image} alt={title} className="news-img" />
      <div className="news-content">
        <h3 className="news-title">{title}</h3>
        <p className="news-description">{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="news-link">
          Read more
        </a>
      </div>
    </div>
  );
};
export default NewsItem;