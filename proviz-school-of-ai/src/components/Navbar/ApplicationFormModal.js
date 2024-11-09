import styled from 'styled-components';
import React, { useState } from 'react';
import axios from 'axios';

// Modal Overlay styling (background layer behind the modal)
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);  // Semi-transparent dark background
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;  // Ensure it's displayed above other content
`;

// Modal content styling (the actual modal box that contains form)
const ModalContent = styled.div`
  background: ${({ theme }) => theme.bg || '#f0f0f0'};  // Background color, uses theme or fallback
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);  // Subtle shadow for depth
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

// Button styling for closing or submitting the form
const CloseButton = styled.button`
  background: ${({ theme }) => theme.primary || '#007bff'};  // Primary color, fallback
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
  border-radius: 5px;
  width: 100%;
  transition: background-color 0.3s;  // Smooth hover effect

  &:hover {
    background-color: ${({ theme }) => theme.secondary || '#ff6347'};  // Change on hover
  }
`;

// Form field styling (containers for labels and inputs)
const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
`;

// Label styling (for input fields)
const Label = styled.label`
  font-size: 1rem;
  color: white;
  font-weight: bold;
  transition: all 0.3s ease;
`;

// Input field styling (for text-based inputs like name, phone, email)
const InputField = styled.input`
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.primary || '#007bff'};  // Border color using theme
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: 0.5rem;

  &:focus {
    border-color: ${({ theme }) => theme.secondary || '#ff6347'};  // Focus effect
  }

  &:hover {
    border-color: ${({ theme }) => theme.secondary || '#ff6347'};  // Hover effect
  }
`;

// Textarea field styling (for longer text input like a statement)
const TextAreaField = styled.textarea`
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.primary || '#007bff'};  // Border color using theme
  border-radius: 5px;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
  outline: none;
  transition: all 0.3s ease;
  width: 100%;
  margin-top: 0.5rem;

  &:focus {
    border-color: ${({ theme }) => theme.secondary || '#ff6347'};  // Focus effect
  }

  &:hover {
    border-color: ${({ theme }) => theme.secondary || '#ff6347'};  // Hover effect
  }
`;

// Main component for the application form modal
const ApplicationFormModal = ({ onClose }) => {
  // State to manage form data inputs
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    statement: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });  // Update the corresponding field in state
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent the default form submission behavior
    try {
      // Send the form data to a server API
      const response = await axios.post('http://localhost:5000/api/applications', formData);
      alert(response.data.message); // Show success message
      onClose();  // Close the modal after successful submission
    } catch (error) {
      console.error('Error submitting form:', error.response ? error.response.data : error.message);
      alert('There was an error submitting your application.');
    }
  };

  return (
    // Modal overlay to darken the background and show the form
    <ModalOverlay>
      <ModalContent>
        {/* Modal header */}
        <h2 style={{ textAlign: 'center', color: "white", marginBottom: '1.5rem' }}>Application Form</h2>
        {/* Form for data input */}
        <form onSubmit={handleSubmit}>
          {/* Name input field */}
          <FormField>
            <Label htmlFor="name">Name:</Label>
            <InputField type="text" id="name" required value={formData.name} onChange={handleChange} />
          </FormField>
          {/* Phone number input field */}
          <FormField>
            <Label htmlFor="phone">Phone Number:</Label>
            <InputField type="tel" id="phone" required value={formData.phone} onChange={handleChange} />
          </FormField>
          {/* Email input field */}
          <FormField>
            <Label htmlFor="email">Email:</Label>
            <InputField type="email" id="email" required value={formData.email} onChange={handleChange} />
          </FormField>
          {/* Statement input field */}
          <FormField>
            <Label htmlFor="statement">Brief Statement:</Label>
            <TextAreaField id="statement" required value={formData.statement} onChange={handleChange} />
          </FormField>
          {/* Submit and Cancel buttons */}
          <div style={{ display: 'flex', gap: '1rem' }}>
            <CloseButton type="submit">Submit</CloseButton> {/* Submit button */}
            <CloseButton type="button" onClick={onClose}>Cancel</CloseButton> {/* Cancel button to close modal */}
          </div>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ApplicationFormModal;
