import React from 'react';
import styled from 'styled-components';

import Ai from '../Assets/Girl.jpg'; // Image import for the hero section
import TestimonialsSection from '../Testimonials'; // Corrected path for testimonials section
import CoursesSection from '../Courses'; // Corrected path for courses section
import TeamSection from '../Team'; // Corrected path for team section

// Main functional component
const HomePage = () => {
  return (
    <Container>
      {/* Hero Section: Displays an image and introductory text */}
      <ImageSection>
        <ImageWrapper>
          <StyledImage src={Ai} alt="AI Education" /> {/* Image of a girl representing AI */}
        </ImageWrapper>
        <TextWrapper>
          <h2>Empowering Future AI Innovators</h2>
          <p>
            {/* Introductory paragraph explaining Proviz School of AI and what it offers */}
            At Proviz School of AI, we are committed to delivering a world-class educational experience designed to equip students with the knowledge and skills necessary to excel in the rapidly evolving field of Artificial Intelligence...
          </p>
        </TextWrapper>
      </ImageSection>

      {/* Introductory Section with heading and paragraph */}
      <IntroSection>
        <h1>Welcome to Proviz School of AI</h1>
        <p>Unlock the future of Artificial Intelligence through comprehensive courses and hands-on projects.</p>
      </IntroSection>

      {/* Mission & Vision Section */}
      <MissionVisionSection>
        <h2>Our Mission & Vision</h2>
        <p>
          {/* Mission & vision statement of Proviz School of AI */}
          At Proviz School of AI, our mission is to bridge the gap between cutting-edge AI technology and practical application...
        </p>
        <h3>Why Choose Proviz?</h3>
        <ul>
          {/* List of reasons to choose Proviz */}
          <li>Comprehensive AI curriculum designed for the future</li>
          <li>Hands-on experience with industry-leading tools</li>
          <li>Mentorship from AI experts</li>
          <li>Collaborative learning environment</li>
          <li>Access to real-world AI projects</li>
        </ul>
      </MissionVisionSection>

      {/* Dynamic sections for Courses, Testimonials, and Team */}
      <CoursesSection />  
      <TestimonialsSection />  
      <TeamSection />  

      {/* Call-to-action Section: Encourages users to apply */}
      <CTASection>
        <h2>Join Us Today!</h2>
        <p>Apply now to start your journey into the world of AI. Learn from industry experts and become part of the AI revolution.</p>
        <ApplyButton href="#top">Apply Now</ApplyButton>
      </CTASection>
    </Container>
  );
};

// Container for overall page layout, sets font and padding
const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 2rem;
`;

// Hero section styling: Image and text aligned in a flexible layout
const ImageSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: left;
  margin-bottom: 3rem;
  position: relative;
  padding: 2rem;
  border-radius: 12px;
  overflow: hidden;
`;

// Text wrapper for description in the hero section
const TextWrapper = styled.div`
  flex: 1;
  padding: 2rem;
  border-radius: 12px;
  color: white;
  max-width: 500px;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: white;
  }

  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.cement || '#d3d3d3'}; // Default cement color if theme is not provided
  }

  transition: transform 0.3s ease-in-out; /* Smooth hover transition */
  &:hover {
    transform: scale(1.05); /* Slight scaling on hover */
  }
`;

// Wrapper for the image in the hero section
const ImageWrapper = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
`;

// Styling for the image, with responsiveness and hover effect
const StyledImage = styled.img`
  width: 50%;
  height: auto;
  object-fit: cover;

  box-shadow: 0 0 20px rgba(0, 255, 255, 0.6); /* Neon shadow effect */
  margin-left: 2rem;
  transition: transform 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.05); /* Slight scaling on hover */
  }

  @media (max-width: 1024px) {
    width: 40%;
  }

  @media (max-width: 768px) {
    width: 30%;
  }

  @media (max-width: 480px) {
    width: 25%;
  }
`;

// Introductory section with centered text
const IntroSection = styled.section`
  text-align: center;
  margin-bottom: 3rem;
  
  h1 {
    font-size: 2.5rem;
    color: white;
  }

  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.cement || '#d3d3d3'};
  }

  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

// Mission and Vision section with centered text and list
const MissionVisionSection = styled.section`
  text-align: center;
  margin: 3rem 0;
  padding: 2rem;
  background: ${({ theme }) => theme.bg || '#fff'}; /* Dynamically set background color */
  border-radius: 10px;
  color: white;
  
  h2 {
    font-size: 2.5rem;
    color: #f4f4f4; /* Light color for the header */
    margin-bottom: 1.5rem;
  }

  p {
    font-size: 1.2rem;
    color: #d1d1d1; /* Light text for better readability */
    line-height: 1.6;
  }

  h3 {
    font-size: 1.8rem;
    color: #f4f4f4; /* Light color for subheading */
    margin-top: 2rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin-top: 1rem;

    li {
      font-size: 1.1rem;
      color: #d1d1d1; /* Lighter text color */
      margin-bottom: 0.8rem;
    }
  }
`;

// Call-to-action (CTA) section with dynamic background color and hover effect
const CTASection = styled.section`
  text-align: center;
  margin-top: 3rem;
  background-color: ${({ theme }) => theme.primary || '#282c34'}; /* Darker background */
  padding: 4rem;
  color: white;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Add subtle shadow for depth */
  transition: background-color 0.3s ease;

  h2 {
    font-size: 2.5rem; /* Larger heading */
    margin-bottom: 1.5rem;
    font-weight: bold;
    letter-spacing: 1px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    line-height: 1.6;
    color: #f4f4f4; /* Lighter text for contrast */
  }

  &:hover {
    background-color: ${({ theme }) => theme.primaryDark || '#1e212d'}; /* Darker on hover */
  }
`;

// Apply Button styling, with dynamic color and hover effect
const ApplyButton = styled.a`
  background-color: ${({ theme }) => theme.secondary || '#ff5733'}; /* Vibrant button color */
  padding: 1.2rem 2.5rem;
  border-radius: 50px; /* More rounded button */
  color: white;
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  display: inline-block; /* Centering button horizontally */

  &:hover {
    transform: scale(1.05);
    background-color: ${({ theme }) => theme.secondaryHover || '#e94e27'}; /* Slight color change */
    box-shadow: 0 8px 20px rgba(255, 87, 51, 0.3); /* Add shadow on hover */
  }
`;

export default HomePage;
