import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Theme } from 'types';
import { AppContext } from 'App/AppContext';
import { useContext } from 'react';

interface LikeCounterProps {
  postId: string;
  initialLikes?: number;
}

const LikeButton = styled.button<{ $theme: Theme; $isLiked: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 20px;
  transition: all 0.3s ease;
  color: ${({ $theme, $isLiked }) => $isLiked ? '#ff4d4d' : $theme.secondaryTextColor};
  
  &:hover {
    background-color: ${({ $theme }) => $theme.shadowColor};
    transform: translateY(-2px);
  }

  svg {
    width: 20px;
    height: 20px;
    fill: ${({ $isLiked }) => $isLiked ? '#ff4d4d' : 'none'};
    stroke: currentColor;
    stroke-width: 2;
    transition: all 0.3s ease;
  }

  span {
    font-size: 14px;
    font-weight: 500;
  }
`;

export const LikeCounter: React.FC<LikeCounterProps> = ({ postId, initialLikes = 0 }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  const { theme } = useContext(AppContext);

  useEffect(() => {
    // Check if this post was liked before
    const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '{}');
    setIsLiked(likedPosts[postId] || false);
  }, [postId]);

  const handleLike = () => {
    const newLikes = isLiked ? likes - 1 : likes + 1;
    setLikes(newLikes);
    setIsLiked(!isLiked);

    // Save like state to localStorage
    const likedPosts = JSON.parse(localStorage.getItem('likedPosts') || '{}');
    likedPosts[postId] = !isLiked;
    localStorage.setItem('likedPosts', JSON.stringify(likedPosts));
  };

  return (
    <LikeButton 
      onClick={handleLike} 
      $theme={theme}
      $isLiked={isLiked}
      aria-label={isLiked ? 'Unlike this post' : 'Like this post'}
    >
      <svg viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      <span>{likes}</span>
    </LikeButton>
  );
}; 