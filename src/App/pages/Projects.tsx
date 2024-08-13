import React from 'react';
import Card from 'components/Card';
import './Projects.scss';

const Projects = () => {
  return (
    <div className="projects-page">
      <h1>Projects and Experience</h1>
      <div className="cards-container">
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
  );
};

export default Projects;

