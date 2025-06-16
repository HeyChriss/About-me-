import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from 'App/AppContext';
import { Toggle } from './Toggle';
import { Theme } from 'types';
import { LikeCounter } from './LikeCounter';
import { HomeButton } from './HomeButton';
import { Citation } from './Citation';
import './BlogPost.scss';

interface BlogPostProps {
  title: string;
  author: string;
  date: string;
  postId: string;
  children: React.ReactNode;
}

const BlogPostContainer = styled.div<{ $theme: Theme }>`
  min-height: 100vh;
  width: 100%;
  background-color: ${({ $theme }) => $theme.background};
  color: ${({ $theme }) => $theme.primaryTextColor};
  transition: background-color 0.3s ease, color 0.3s ease;
  position: relative;
  
  /* Ensure background fills entire viewport and beyond */
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ $theme }) => $theme.background};
    z-index: -1;
    transition: background-color 0.3s ease;
  }
`;

const BlogPostContent = styled.article<{ $theme: Theme }>`
  max-width: 700px;
  margin: 0 auto;
  padding: 80px 20px 60px;
  
  @media (max-width: 768px) {
    padding: 60px 16px 40px;
  }
`;

const BlogPostHeader = styled.header`
  margin-bottom: 48px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.2);
  padding-bottom: 32px;
`;

const BlogPostTitle = styled.h1<{ $theme: Theme }>`
  font-size: clamp(28px, 5vw, 48px);
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 24px 0;
  color: ${({ $theme }) => $theme.primaryTextColor};
  word-wrap: break-word;
`;

const BlogPostMeta = styled.div<{ $theme: Theme }>`
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  color: ${({ $theme }) => $theme.secondaryTextColor};
  margin-bottom: 16px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

const MetaContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`;

const AuthorName = styled.span<{ $theme: Theme }>`
  font-weight: 500;
  color: ${({ $theme }) => $theme.primaryTextColor};
`;

const PublishDate = styled.span`
  &::before {
    content: "•";
    margin-right: 8px;
    
    @media (max-width: 480px) {
      display: none;
    }
  }
  
  @media (max-width: 480px) {
    &::before {
      display: none;
    }
  }
`;

const BlogPostBody = styled.div<{ $theme: Theme }>`
  font-size: 18px;
  line-height: 1.6;
  color: ${({ $theme }) => $theme.primaryTextColor};
  
  h2 {
    font-size: 32px;
    font-weight: 600;
    margin: 48px 0 16px 0;
    line-height: 1.3;
    color: ${({ $theme }) => $theme.primaryTextColor};
  }
  
  h3 {
    font-size: 24px;
    font-weight: 600;
    margin: 40px 0 12px 0;
    line-height: 1.4;
    color: ${({ $theme }) => $theme.primaryTextColor};
    text-align: left;
  }
  
  h4 {
    font-size: 20px;
    font-weight: 600;
    margin: 32px 0 8px 0;
    line-height: 1.4;
    color: ${({ $theme }) => $theme.primaryTextColor};
  }
  
  p {
    margin: 0 0 24px 0;
    text-align: justify;
  }
  
  img {
    max-width: 100%;
    height: auto;
    margin: 32px 0;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
  
  blockquote {
    margin: 32px 0;
    padding: 0 0 0 24px;
    border-left: 4px solid ${({ $theme }) => $theme.secondaryTextColor};
    font-style: italic;
    color: ${({ $theme }) => $theme.secondaryTextColor};
  }
  
  code {
    background-color: ${({ $theme }) => $theme.shadowColor};
    padding: 2px 6px;
    border-radius: 4px;
    font-family: 'Monaco', 'Consolas', monospace;
    font-size: 16px;
  }
  
  pre {
    background-color: ${({ $theme }) => $theme.shadowColor};
    padding: 20px;
    border-radius: 8px;
    overflow-x: auto;
    margin: 24px 0;
    
    code {
      background: none;
      padding: 0;
    }
  }
  
  ul, ol {
    margin: 0 0 24px 0;
    padding-left: 24px;
    text-align: left;
    
    li {
      margin-bottom: 8px;
      text-align: left;
    }
  }
  
  a {
    color: #356aff;
    text-decoration: underline;
    
    &:hover {
      text-decoration: none;
    }
  }
`;

export const BlogPost: React.FC<BlogPostProps> = ({ title, author, date, postId, children }) => {
  const { theme } = useContext(AppContext);

  return (
    <BlogPostContainer $theme={theme} className="blog-post">
      <HomeButton href="/" />
      <Toggle />
      <BlogPostContent $theme={theme}>
        <BlogPostHeader>
          <BlogPostTitle $theme={theme}>{title}</BlogPostTitle>
          <BlogPostMeta $theme={theme}>
            <MetaContent>
              <AuthorName $theme={theme}>By {author}</AuthorName>
              <PublishDate>{date}</PublishDate>
              <LikeCounter postId={postId} />
            </MetaContent>
          </BlogPostMeta>
        </BlogPostHeader>
        <BlogPostBody $theme={theme}>
          {children}
        </BlogPostBody>
      </BlogPostContent>
    </BlogPostContainer>
  );
};

export { LikeCounter, Citation }; 