import React, { useContext } from 'react';
import styled from 'styled-components';
import Card2 from 'components/Card2';
import { Particles, Toggle } from 'components';
import { AppContext } from 'App/AppContext';
import { Theme } from 'types';
import './AboutMe.scss';
import { HomeButton } from 'components/HomeButton';

const AboutMeContainer = styled.div<{ $theme: Theme }>`
  position: relative;
  min-height: 100vh;
  background-color: ${({ $theme }) => $theme.background};
  transition: background-color 0.5s linear;
`;

const AboutMeContent = styled.div`
  position: relative;
  z-index: 1;
`;

const AboutMe = () => {
  const { theme } = useContext(AppContext);

  return (
    <AboutMeContainer $theme={theme}>
      <Particles />
      <HomeButton href="/" />
      <AboutMeContent>
        <Toggle />
        <div className="aboutme-page page card-2-example-page">
          <Card2
            image="/chris.jpg" 
            title="Chris Mijangos"
            subtitle="AI & Machine Learning Graduate Student"
            description="Hi! I'm Chris Mijangos, and I'm currently pursuing a master's degree in Computer Science at BYU with an emphasis in AI and Machine Learning. I completed my undergraduate studies in software engineering, focusing on software design and data science.

            I'm passionate about technology and eager to learn new things. Currently, I'm collaborating with professors on research papers as I work toward my goal of becoming an AI engineer. In my free time, you'll find me reading books about software development, AI, and ML, or enjoying outdoor activities like hiking and playing soccer. I also love playing guitar and working on my car!

            What drives me most is collaboration. I thrive when working with others on software and research projects, or just talking! I'm naturally curious, and if there's something I don't know, I make it a priority to learn it. I strongly believe that knowledge is essential for a fulfilling life and that continuous learning opens doors to innovation. The more I learn, the more I realize how much there is still to discover, which motivates me to continue growing and advancing in my field.

            I enjoy building new things, especially through software development, and I'm always looking for ways to innovate. When I'm not coding or researching, I love spending quality time with family and friends. As a Christian, I find great fulfillment in serving others and contributing to my community.

            Please connect with me and let's talk and innovate together!"
            theme={theme}
            onProfile={() => window.location.href = '/'} // 
            onLinkedIn={() => window.location.href = 'https://www.linkedin.com/in/christianmijangos5454/'}
          />
        </div>
      </AboutMeContent>
    </AboutMeContainer>
  );
};

export default AboutMe;
