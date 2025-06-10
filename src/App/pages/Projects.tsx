import React, { useContext } from 'react';
import styled from 'styled-components';
import Card from 'components/Card';
import { Particles } from 'components';
import { AppContext } from 'App/AppContext';
import { Theme } from 'types';
import './Projects.scss';
import { Toggle } from 'components';

const ProjectsContainer = styled.div<{ $theme: Theme }>`
  position: relative;
  min-height: 100vh;
  background-color: ${({ $theme }) => $theme.background};
  transition: background-color 0.5s linear;
`;

const ProjectsContent = styled.div`
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

const Projects = () => {
  const { theme } = useContext(AppContext);

  return (
    <ProjectsContainer $theme={theme}>
      <Particles />
      <HomeButton href="/">Home</HomeButton>
      <ProjectsContent>
      <Toggle />
        <div className="projects-page">
          <h1>Projects and Experience</h1>
          <div className="cards-container">
          <Card
              image="/accent.png"
              title="Accent Detector"
              type="AI application"
              description="A powerful AI-powered accent detection application built with Streamlit that can analyze speech accents from audio files or video URLs. The app uses advanced machine learning to identify different English accents with high accuracy.
              Demostration in Hugging Face (see readme in github)"
              buttonText="Github Link"
              buttonLink="https://github.com/HeyChriss/accent-detector-ai" // Example of internal navigation
            />
          <Card
              image="/summ.png"
              title="SumAi"
              type="Chrome Extension"
              description="SumAI is a Google Chrome extension that transforms any website into an interactive knowledge source. While you browse, SumAI intelligently extracts and processes content, 
              allowing you to ask questions and receive instant, AI-powered answers tailored to the specific page you're viewing."
              buttonText="Github Link"
              buttonLink="https://github.com/HeyChriss/SumAI" // Example of internal navigation
            />
          <Card
              image="/Blank diagram.svg"
              title="AI Multi-Agent Research System"
              type="AI Agent"
              description="A sophisticated multi-agent AI system designed to assist with research tasks using LangChain and various specialized tools. 
              This system employs multiple AI agents working in concert to handle different aspects of the research process."
              buttonText="Github Link"
              buttonLink="https://github.com/HeyChriss/AI-Agent-Research" // Example of internal navigation
            />
          <Card
              image="/rexride.png"
              title="Rex Ride"
              type="Website (Hackaton)"
              description="I led a team during a hackathon to develop a rideshare app tailored for students at my university. We successfully built the app within 24 hours, focusing on user-friendly features and functionality. Currently,
               my group and I are exploring ways to enhance the website and deploy it for broader and more efficient use."
              buttonText="Github Link"
              buttonLink="https://github.com/HeyChriss/RexRide" // Example of internal navigation
            />
          <Card
              image="/orbit.png"
              title="Orbit Simulator"
              type="C++ Software Design"
              description="I am currently designing an orbit simulator from scratch in C++. The primary goal of this project is to deepen my understanding of Object-Oriented Programming (OOP) concepts such as class design, inheritance, polymorphism, and encapsulation.
               This simulator serves as a practical learning tool to explore effective OOP design principles while modeling celestial mechanics."
              buttonText="Github Link"
              buttonLink="https://github.com/HeyChriss/OrbitSimulatorV2" // Example of internal navigation
            />
          <Card
              image="/Chatbot.png"
              title="Chatbot Assistant"
              type="Machine Learning"
              description="I am currently leading a project at my university, inspired by a previous assistant I developed. The goal is to create a specialized AI assistant for the IT department. I have been working on this project using technologies such as Retrieval-Augmented Generation (RAG), Llama 3.1, and LangChain. Due to the use of internal data,
               I am unable to share this project publicly. However, I plan to develop a similar chatbot for personal use, which I intend to post on Hugging Face soon"
              buttonText="Hugging Face Account"
              buttonLink="https://huggingface.co/HeyChriss" // Example of internal navigation
            />
            <Card
              image="/OpenAI.png"
              title="Open AI Assistant"
              type="Machine Learning"
              description="Created and developed an AI assistant tailored to answer specific questions about software and my personal coursework as a Software Engineering student. This project involved learning and utilizing technologies such as React, OpenAI,
               Retrieval-Augmented Generation (RAG), Hugging Face, and web server development frameworks including Flask and Express.js"
              buttonText="Coming up..."
              buttonLink="https://github.com/HeyChriss/" // Example of internal navigation
            />
            <Card
              image="/OrderOfOperations.png"
              title="Order of Operations app"
              type="Kotlin - Android Studio"
              description="Created an order or operations app for kids in a school with the purpose to learn new skills. Made it with friends! "
              buttonText="Github Link"
              buttonLink="https://github.com/Engelito/OOOkv2" 
            />
            <Card
              image="/PythonGames.png"
              title="Python Games"
              type="Python"
              description="These are the games we created with a group of students for software engineering. We had the chance to learn and understand more about classes, functions, and loops. 
              We applied the principles of polymorphism, inheritance, encapsulation, and abstraction in our programs"
              buttonText="Github Link"
              buttonLink="https://github.com/HeyChriss/Games" 
            />
            <Card
              image="/Automation.png"
              title="IT Automation Project"
              type="Web App"
              description="This project was developed to automate the ticket and chat grading process for a Quality Assurance (QA) team. Initially conceived as a personal project during my time at university,
               it quickly gained traction and was adopted by the organization for use in their grading implementation process"
              buttonText="Github Link"
              buttonLink="https://github.com/HeyChriss/ITAutomationProject" 
            />
            <Card
              image="/BYUI.jpg"
              title="Zoom BYU-I Page"
              type="Web Page"
              description="Developed and maintained the official BYU-Idaho Zoom page, which provides a user-friendly interface for students and faculty to join Zoom meetings. While working in the IT department, I noticed that many students encountered issues with Zoom.
               To address this and provide quicker support, I created this website, which was later adopted by the university as the official Zoom page. Source found in Github too. "
              buttonText="View page"
              buttonLink="https://byui.zoom.us/"
            />

          </div>
        </div>
      </ProjectsContent>
    </ProjectsContainer>
  );
};

export default Projects;

