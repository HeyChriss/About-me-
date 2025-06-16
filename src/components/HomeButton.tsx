import React from 'react';
import styled from 'styled-components';

const StyledHomeButton = styled.a`
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 10;
  border: 0;
  background: linear-gradient(90deg,rgb(255, 255, 255),rgb(255, 255, 255));
  color: rgb(0, 0, 0);
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

  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 14px;
    top: 0.75rem;
    left: 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 12px;
    top: 0.5rem;
    left: 0.5rem;
  }
`;

export const HomeButton: React.FC<{ href: string }> = ({ href }) => (
  <StyledHomeButton href={href}>Home</StyledHomeButton>
); 