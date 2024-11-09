// src/App.js
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components'; // Import ThemeProvider for theme management
import Navbar from './components/Navbar'; // Import Navbar component
import styled from 'styled-components'; // Import styled-components for custom styling
import { darkTheme, lightTheme } from './utils/Themes'; // Import the theme objects
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router components
import HomePage from './components/Homepage/Homepage'; // Import HomePage component
import TeamPage from './components/Team'; // Import TeamPage component
import CoursesPage from './components/Courses'; // Import CoursesPage component
import TestimonialsPage from './components/Testimonials'; // Import TestimonialsPage component
import Design from './components/Design'; // Import Design component for background effects

// Body styled-component, applies background and other styles
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg}; // Set background color based on theme
  width: 100%;
  overflow-x: hidden; // Prevent horizontal scrolling
  position: relative;
`;

// Wrapper styled-component, defines visual effects on the main content area
const Wrapper = styled.div`
  position: relative;
  z-index: 2;
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%),
              linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%); // Creates a unique clipping effect
  padding: 2rem;
  text-align: center;
`;

// ParticleWrapper styled-component for positioning particles or background effects
const ParticleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; // Ensures particles are behind the main content
`;

// App component which handles routing and theme management
const App = () => {
  const [darkMode, setDarkMode] = useState(true); // State to toggle dark mode

  // Function to toggle dark mode
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode); // Toggle between dark and light mode
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}> {/* ThemeProvider wraps the app to provide theme */}
      <Router> {/* Router to manage routing between pages */}
        <Navbar toggleTheme={toggleTheme} darkMode={darkMode} /> {/* Navbar with theme toggle */}
        <Body> {/* Main body of the app */}
          <ParticleWrapper> {/* Wrapper for particles or background effects */}
            <Design /> {/* Background design component */}
          </ParticleWrapper>
          <Wrapper> {/* Main content wrapper */}
            <Routes> {/* Route handling */}
              <Route path="/" element={<HomePage />} /> {/* HomePage route */}
              <Route path="/about" element={<HomePage />} /> {/* About Page route */}
              <Route path="/team" element={<TeamPage />} /> {/* Team Page route */}
              <Route path="/courses" element={<CoursesPage />} /> {/* Courses Page route */}
              <Route path="/testimonials" element={<TestimonialsPage />} /> {/* Testimonials Page route */}
            </Routes>
          </Wrapper>
        </Body>
      </Router>
    </ThemeProvider>
  );
};

export default App;
