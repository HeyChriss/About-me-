import { Config } from 'types';
import { Email, GitHub, LinkedIn, Resume } from 'icons';
import { Projects } from 'icons/Projetcs';
import { AboutMe } from 'icons/AboutMe';
import { BlogIcon } from 'icons';

export const config: Config = {
  name: {
    display: 'Christian Mijangos',
  },
  title: {
    display: 'Software Engineer',
  },
  buttons: [
    {
      name: 'github',
      display: 'GitHub',
      ariaLabel: 'GitHub profile (opens in new window)',
      icon: <GitHub />,
      href: 'https://github.com/HeyChriss',
    },
    {
      name: 'linked-in',
      display: 'LinkedIn',
      ariaLabel: 'LinkedIn profile (opens in new window)',
      icon: <LinkedIn />,
      href: 'https://www.linkedin.com/in/christianmijangos5454/',
    },
    {
      name: 'resume',
      display: 'Resume',
      ariaLabel: 'Resume in Google Drive (opens in new window)',
      icon: <Resume />,
      href: 'https://drive.google.com/file/d/1r7f3OISl9Dw_t8boOS-ewd-7Ea3oDD04/view?usp=sharing',
    },
    {
      name: 'email',
      display: 'Email',
      ariaLabel: 'Email contact (opens in new window)',
      icon: <Email />,
      href: 'mailto:mij17001@byui.edu',
    },
    {
      name: 'blog',
      display: 'Blog',
      ariaLabel: 'Blog (opens in new window)',
      icon: <BlogIcon />,
      href: '/blog',
    },
    {
      name: 'projects',
      display: 'Projects',
      ariaLabel: 'Projects (opens in new window)',
      icon: <Projects />,
      href: '/projects',
    },
    {
      name: 'about me',
      display: 'About me',
      ariaLabel: 'About me (opens in new window)',
      icon: <AboutMe />,
      href: '/aboutme',
    },
    
  ],
};
