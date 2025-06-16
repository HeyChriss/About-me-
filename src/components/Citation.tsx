import React from 'react';
import styled from 'styled-components';

interface CitationProps {
  authors: string[];
  year: number;
  title: string;
  url?: string;
}

const CitationContainer = styled.div`
  margin: 20px 0;
  padding: 15px;
  background-color: ${({ theme }) => theme.shadowColor};
  border-left: 4px solid ${({ theme }) => theme.primaryTextColor};
  border-radius: 4px;
`;

const CitationText = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.primaryTextColor};
  margin: 0;
`;

const CitationLink = styled.a`
  color: #356aff;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const Citation: React.FC<CitationProps> = ({
  authors,
  year,
  title,
  url
}) => {
  const formatAuthors = (authors: string[]) => {
    if (authors.length === 1) return authors[0];
    if (authors.length === 2) return `${authors[0]} and ${authors[1]}`;
    return `${authors.slice(0, -1).join(', ')}, and ${authors[authors.length - 1]}`;
  };

  const citationText = [
    formatAuthors(authors),
    `(${year}).`,
    title
  ].filter(Boolean).join(' ');

  return (
    <CitationContainer>
      <CitationText>
        {citationText}
        {url && (
          <>
            {' '}
            <CitationLink href={url} target="_blank" rel="noopener noreferrer">
              [Link]
            </CitationLink>
          </>
        )}
      </CitationText>
    </CitationContainer>
  );
};

export default Citation; 