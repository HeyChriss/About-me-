import React from 'react';
import { BlogPost } from 'components';

const FirstBlog = () => {
  return (
    <BlogPost 
      title="Welcome to My First Blog Post"
      author="Christian Mijangos"
      date="June 10, 2025"
    >
      <p>
        Welcome to my blog! This is my first blog post where I'll be sharing my thoughts, 
        experiences, and insights about technology, programming, and life in general.
      </p>

      <h2>Why I Started This Blog</h2>
      <p>
        I've always been passionate about technology and learning new things. This blog 
        serves as a platform where I can document my journey, share what I've learned, 
        and hopefully help others who are on similar paths. One of my professors encouraged me to start a blog, and I'm glad I did, so kudos to J. Hathaway for the inspiration.
      </p>

      <h3>What You Can Expect</h3>
      <p>
        In this blog, you'll find posts about:
      </p>
      <ul>
        <li>Status of the projects I'm working on</li>
        <li>Technology reviews and insights</li>
        <li>Personal development and learning experiences</li>
        <li>Project showcases and case studies (I'm working on a few)</li>
        <li>Hopefully land a job in the tech industry</li>
      </ul>

      <h2>My Journey So Far</h2>
      <p>
        As a developer, I've worked with various technologies and frameworks. Each project 
        has taught me something new, and I believe in the power of sharing knowledge with 
        the community.
      </p>

      <blockquote>
        "The best way to learn is to teach others what you've learned."
      </blockquote>

      <h3>Technical Background</h3>
      <p>
        My experience includes working with modern web technologies such as:
      </p>
      <ul>
        <li><strong>Frontend:</strong> React, TypeScript, SCSS</li>
        <li><strong>Backend:</strong> Node.js, Express, APIs, Python</li>
        <li><strong>Tools:</strong> Git, VS Code, Docker</li>
      </ul>
      <p>
        If you want to see more about my projects, you can check out my <a href="/projects">projects page</a>. Or if you want to see my resume, you can check out my <a href="https://drive.google.com/file/d/1r7f3OISl9Dw_t8boOS-ewd-7Ea3oDD04/view?usp=sharing">resume page</a>.
      </p>

      <h2>Looking Forward</h2>
      <p>
        I'm excited to share more content with you in the coming weeks. Stay tuned for 
        in-depth tutorials, project walkthroughs, and insights from my development journey.
      </p>

      <p>
        Feel free to reach out if you have any questions or suggestions for future blog posts. 
        I believe the best content comes from addressing real problems and questions from the community.
      </p>

      <h3>Connect With Me</h3>
      <p>
        You can find me on various platforms where I share quick updates and engage with 
        the developer community. I'm always open to discussing new ideas and collaborating 
        on interesting projects. You can find me on <a href="https://www.linkedin.com/in/christianmijangos5454/">LinkedIn</a> or <a href="https://github.com/christianmijangos">GitHub</a>.
      </p>

      <p>
        Thank you for reading my first blog post! I hope you found it interesting and I 
        look forward to sharing more content with you soon.
      </p>
    </BlogPost>
  );
};

export default FirstBlog; 