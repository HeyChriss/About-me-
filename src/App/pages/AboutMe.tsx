import React, { useContext } from 'react';
import styled from 'styled-components';
import Card2 from 'components/Card2';
import { Particles, Toggle } from 'components';
import { AppContext } from 'App/AppContext';
import { Theme } from 'types';
import './AboutMe.scss';

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
      <AboutMeContent>
        <Toggle />
        <div className="aboutme-page page card-2-example-page">
          <Card2
            image="/Christian.jpg" // Replace with the actual path to your image
            title="Christian Mijangos"
            subtitle="Software Engineer"
            description="Hi, I'm Christian Mijangos, a passionate software engineer from Guatemala currently studying at BYU-Idaho. I am pursuing a degree in Software Engineering with an emphasis on software design and a minor in Computer Information Technology. My deep love for technology and innovation drives me to build robust, scalable applications, and I excel at solving complex challenges across various programming languages and frameworks. As a naturally curious person,
             I am always eager to learn and expand my knowledge in the ever-evolving field of technology.
                Outside of coding, I enjoy exploring new cultures through travel, playing soccer, and working on exciting
            programming projects in my free time. My current interests include machine learning and generative AI,
            and I'm always keen to embrace new technologies and ideas.
            Thank you for visiting my website! If you're interested in collaborating on innovative projects or simply want to connect,
            I would love to hear from you. I'm always open to new opportunities and ready to take on exciting challenges!"
            onProfile={() => window.location.href = '/'} // 
            onLinkedIn={() => window.location.href = 'https://www.linkedin.com/in/christianmijangos5454/'}
          />
        </div>
      </AboutMeContent>
    </AboutMeContainer>
  );
};

export default AboutMe;
