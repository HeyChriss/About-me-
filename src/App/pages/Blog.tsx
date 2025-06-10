import React, { useContext } from 'react';
import styled from 'styled-components';
import { BlogCard } from 'components';
import { Particles } from 'components';
import { AppContext } from 'App/AppContext';
import { Theme } from 'types';
import './Blog.scss';
import { Toggle } from 'components';

const BlogContainer = styled.div<{ $theme: Theme }>`
  position: relative;
  min-height: 100vh;
  background-color: ${({ $theme }) => $theme.background};
  transition: background-color 0.5s linear;
`;

const BlogContent = styled.div`
  position: relative;
  z-index: 1;
`;

const HomeButton = styled.a`
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 10;
  border: 0;
  background: linear-gradient(90deg,rgb(255, 255, 255),rgb(255, 255, 255));
  color:rgb(0, 0, 0);
  font-family: inherit;
  padding: 16px 26px;
  font-size: 16px;
  border-radius: 40px;
  transition: background 0.3s ease, transform 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;

  &:hover {
    background: linear-gradient(90deg,rgb(0, 0, 0),rgb(0, 0, 0));
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    color: #f8f8f8;
  }
`;

const Blog = () => {
  const { theme } = useContext(AppContext);

  return (
    <BlogContainer $theme={theme}>
      <Particles />
      <HomeButton href="/">Home</HomeButton>
      <BlogContent>
        <Toggle />
        <div className="blog-page">
          <h1>Blog Posts & Articles</h1>
          <div className="cards-container">
            <BlogCard
              title="Getting Started with blogging"
              category="Programming"
              subtitle="Writing"
              readTime="5"
              publishedDate="June 10, 2025"
              excerpt="Learn the fundamentals of React development and build your first application step by step..."
              authorMatch={0}
              buttonText="Read Article"
              buttonLink="https://react.dev/learn"
            />
          </div>
        </div>
      </BlogContent>
    </BlogContainer>
  );
};

export default Blog; 