import React, { useContext } from 'react';
import styled from 'styled-components';
import { BlogCard } from 'components';
import { Particles } from 'components';
import { AppContext } from 'App/AppContext';
import { Theme } from 'types';
import './Blog.scss';
import { Toggle } from 'components';
import { HomeButton } from 'components/HomeButton';

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

const Blog = () => {
  const { theme } = useContext(AppContext);

  return (
    <BlogContainer $theme={theme}>
      <Particles />
      <HomeButton href="/" />
      <BlogContent>
        <Toggle />
        <div className="blog-page">
          <h1>Blog Posts & Articles</h1>
          <div className="cards-container">

          <BlogCard
              title="Deep Learning"
              category="Xception CNN Architecture"
              readTime="12"
              publishedDate="June 24, 2025"
              excerpt="What is Xception? How does it work? What makes it special? Understanding depthwise separable convolutions..."
              authorMatch={100}
              buttonText="Read Article"
              buttonLink="/xception"
            />

          <BlogCard
              title="Deep Learning"
              category="Siamese Neural Networks"
              readTime="15"
              publishedDate="June 19, 2025"
              excerpt="What are siamese neural networks? How do they work and what is it for?..."
              authorMatch={100}
              buttonText="Read Article"
              buttonLink="/siamese"
            />

          <BlogCard
              title="Deep Learning"
              category="AlexNet Architecture"
              readTime="10"
              publishedDate="June 15, 2025"
              excerpt="What is AlexNet? How does it work? What are the layers? What are the advantages and disadvantages?"
              authorMatch={100}
              buttonText="Read Article"
              buttonLink="/alexnet"
            />
            
            <BlogCard
              title="Life and Tech"
              category="Getting started with blogging..."
              readTime="5"
              publishedDate="June 10, 2025"
              excerpt="Welcome to my blog! This is my first blog post where I'll be sharing my thoughts, experiences..."
              authorMatch={100}
              buttonText="Read Article"
              buttonLink="/first-blog"
            />
            
          </div>
        </div>
      </BlogContent>
    </BlogContainer>
  );
};

export default Blog; 