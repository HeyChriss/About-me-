import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.scss';
import { AppProvider } from './AppContext';
import { Buttons, Content, Footer, Particles, Toggle } from 'components';
import { config } from './config';
import Projects from './pages/Projects'; // Import the Projects component
import AboutMe from './pages/AboutMe';
import Blog from './pages/Blog';
import FirstBlog from './pages/first_blog';
import AlexNet from './pages/alexnet';
import Siamese from './pages/siamese';
import Xception from './pages/xception';
import DrippedUp1 from './pages/drippedup1';

export const App = () => {
  const [isReady, setIsReady]: [boolean, Function] = useState(false);
  const [isMobile, setIsMobile]: [boolean, Function] = useState(false);

  const init = () => {
    if (
      window.matchMedia(
        '(max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2)',
      )?.matches
    ) {
      setIsMobile(true);
    }

    const localStorageTheme: string | null = localStorage.getItem('theme');
    if (localStorageTheme === 'true') {
      localStorage.setItem('theme', 'dark');
    } else if (localStorageTheme === 'false') {
      localStorage.setItem('theme', 'light');
    }

    setIsReady(true);
  };

  useEffect(() => {
    if (!isReady) init();
  }, [isReady]);

  if (!isReady) {
    return null; // This ensures nothing renders until the app is ready
  }

  return (
    <AppProvider config={config} isMobile={isMobile}>
      <Router>
        <main className="app">
          
          <Routes>

            <Route
              path="/"
              element={
                <>
                  <Toggle />
                  <Content />
                  <Buttons />
                  <Particles />
 
                </>
              }
            />
            <Route path="/projects" element={<Projects />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/first-blog" element={<FirstBlog />} />
            <Route path="/alexnet" element={<AlexNet />} />
            <Route path="/siamese" element={<Siamese />} />
            <Route path="/xception" element={<Xception />} />
            <Route path="/drippedup1" element={<DrippedUp1 />} />
          </Routes>

          <Footer />
        </main>
      </Router>
    </AppProvider>
  );
};
