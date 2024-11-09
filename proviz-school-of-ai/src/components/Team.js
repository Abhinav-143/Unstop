// src/components/Team.js
import React from 'react';
import styled from 'styled-components';
import { teamData } from '../data/constants'; // Import team data from constants file

const TeamSection = () => {
  return (
    <Section>
      <h2>Meet Our Team</h2> {/* Heading for the team section */}
      <TeamList>
        {teamData.map((teamMember, index) => (
          <TeamCard key={index}> {/* Map through each team member and create a card */}
            <h3>{teamMember.name}</h3> {/* Display team member name */}
            <p>{teamMember.role}</p> {/* Display team member role */}
            <p>{teamMember.bio}</p> {/* Display team member biography */}
          </TeamCard>
        ))}
      </TeamList>
    </Section>
  );
};

// Styled components for Team Section
const Section = styled.section`
  margin-bottom: 3rem; /* Space below the section */
  
  h2 {
    font-size: 2rem;
    text-align: center; /* Center the heading */
    margin-bottom: 1rem; /* Space below the heading */
    color: white; /* White color for the heading text */
  }
`;

const TeamList = styled.div`
  display: flex;
  gap: 2rem; /* Space between team cards */
  justify-content: center; /* Center the cards horizontally */

  transition: transform 0.3s ease-in-out; /* Smooth transition for scale effect */
  &:hover {
    transform: scale(1.05); /* Slightly scale up on hover */
  }
`;

const TeamCard = styled.div`
  background: ${({ theme }) => theme.bg || '#fff'}; /* Use theme background or default white */
  border: 1px solid ${({ theme }) => theme.primary || '#007bff'}; /* Border color from theme */
  border-radius: 8px; /* Rounded corners */
  padding: 1.5rem; /* Space inside the card */
  width: 250px; /* Fixed width for each card */
  text-align: center; /* Center the text inside the card */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Subtle shadow for card */

  transition: transform 0.3s ease-in-out; /* Smooth transition for scale effect */
  &:hover {
    transform: scale(1.05); /* Slightly scale up on hover */
  }

  h3 {
    color: ${({ theme }) => theme.primary || '#007bff'}; /* Use primary color for the name */
  }

  p {
    color: ${({ theme }) => theme.cement || '#d3d3d3'}; /* Light grey color for the role and bio */
  }
`;

export default TeamSection;
