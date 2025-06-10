import React from 'react';
import './BlogCard.scss';

interface BlogCardProps {
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  excerpt: string;
  authorMatch: number;
  buttonText: string;
  buttonLink: string;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  category,
  readTime,
  publishedDate,
  excerpt,
  authorMatch,
  buttonText,
  buttonLink,
}) => (
  <div className="blog-card">
    <img src="/write.png" alt="Blog logo" />
    <div className="main">
      <h2>{title}</h2>
      <h4>{category}</h4>
      <h5>{excerpt}</h5>
    </div>
    <div className="details">
      <span className="read-time">
        {readTime}
        <em> min read</em>
      </span>
      <span className="date">{publishedDate}</span>
    </div>
    <div className="footer">
      <div className="badge">
        <img src="/avatar.jpg" alt="Author avatar" />
        <p>
          <em>{authorMatch}%</em>
          <span className="text"> Completed</span>
        </p>
      </div>
      <div className="actions">
        <a 
          href={buttonLink} 
          target={buttonLink.startsWith('http') ? "_blank" : undefined}
          rel={buttonLink.startsWith('http') ? "noopener noreferrer" : undefined}
          className="read-more-btn"
        >
          {buttonText}
        </a>
      </div>
    </div>
  </div>
); 