// src/components/Courses.js
import React from 'react';
import styled from 'styled-components';
import { courseData } from '../data/constants'; // Import course data from constants file

const CoursesSection = () => {
  return (
    <Section>
      <h2>Key Courses</h2> {/* Heading for the courses section */}
      <CourseList>
        {courseData.map((course, index) => (
          <CourseCard key={index}> {/* Map through each course and create a card */}
            <h3>{course.title}</h3> {/* Display course title */}
            <p>{course.description}</p> {/* Display course description */}
          </CourseCard>
        ))}
      </CourseList>
    </Section>
  );
};

// Styled components for Courses Section
const Section = styled.section`
  margin-bottom: 3rem; /* Add space below the section */
  
  h2 {
    font-size: 2rem;
    text-align: center; /* Center the heading */
    margin-bottom: 1rem; /* Space below the heading */
    color: white; /* White color for the heading text */
  }
`;

const CourseList = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow cards to wrap into multiple rows */
  gap: 2rem; /* Space between course cards */
  justify-content: center; /* Center the cards horizontally */

  transition: transform 0.3s ease-in-out; /* Smooth transition for scale effect */
  &:hover {
    transform: scale(1.05); /* Slightly scale up on hover */
  }
`;

const CourseCard = styled.div`
  background: ${({ theme }) => theme.bg || '#fff'}; /* Use theme background or default white */
  border: 1px solid ${({ theme }) => theme.primary || '#007bff'}; /* Border color from theme */
  border-radius: 8px; /* Rounded corners */
  padding: 1.5rem; /* Space inside the card */
  width: 300px; /* Fixed width for each card */
  text-align: center; /* Center the text inside the card */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow for card */

  transition: transform 0.3s ease-in-out; /* Smooth transition for scale effect */
  &:hover {
    transform: scale(1.05); /* Slightly scale up on hover */
  }

  h3 {
    color: ${({ theme }) => theme.primary || '#007bff'}; /* Use primary color for the title */
  }

  p {
    color: ${({ theme }) => theme.cement || '#d3d3d3'}; /* Light grey color for description */
  }
`;

export default CoursesSection;
