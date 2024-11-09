// src/components/Testimonials.js
import React from 'react';
import styled from 'styled-components';
import { testimonialData } from '../data/constants';

const TestimonialsSection = () => {
  return (
    <Section>
      <h2>What Our Students Say</h2>
      <TestimonialList>
        {testimonialData.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <p>{`"${testimonial.feedback}"`}</p>
            <p>- {testimonial.name}</p>
          </TestimonialCard>
        ))}
      </TestimonialList>
    </Section>
  );
};

// Styled components for Testimonials Section
const Section = styled.section`
  margin-bottom: 3rem;
  h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1rem;
    color: white;
  }
`;


const TestimonialList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;

  /* Adding smooth scale transition */
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const TestimonialCard = styled.div`
  background: ${({ theme }) => theme.bg || '#fff'};
  border: 1px solid ${({ theme }) => theme.primary || '#007bff'};
  border-radius: 8px;
  padding: 1.5rem;
  width: 80%;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }

  p {
    color: ${({ theme }) => theme.cement || '#d3d3d3'};
  }
`;

export default TestimonialsSection;
