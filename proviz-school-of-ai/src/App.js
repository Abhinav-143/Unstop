import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Navbar from './components/Navbar';
import styled from 'styled-components';
import { darkTheme, lightTheme } from './utils/Themes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage/Homepage';
import TeamPage from './components/Team';
import CoursesPage from './components/Courses';
import TestimonialsPage from './components/Testimonials';
import Design from './components/Design';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  position: relative;
  z-index: 2;
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%),
              linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
  padding: 2rem;
  text-align: center;
`;

const ParticleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
        <Body>
          <ParticleWrapper>
            <Design />
          </ParticleWrapper>
          <Wrapper>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<HomePage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
            </Routes>
          </Wrapper>
        </Body>
      </Router>
    </ThemeProvider>
  );
};

export default App;
