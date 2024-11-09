// src/components/Navbar/index.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for client-side routing
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent'; // Import styled-components
import { MdCastForEducation } from "react-icons/md"; // Icon for the logo
import { FaBars } from 'react-icons/fa'; // Mobile menu icon
import { useTheme } from 'styled-components'; // Hook to use the theme
import ApplicationFormModal from './ApplicationFormModal'; // Modal component for the application form

const Navbar = () => {
  // State to manage mobile menu (toggle on/off)
  const [isOpen, setIsOpen] = useState(false);
  // State to control modal visibility (toggle on/off)
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Access the current theme (useTheme hook)
  const theme = useTheme();

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Nav>
      <NavbarContainer>
        {/* Logo Section with navigation */}
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20px', cursor: 'pointer', padding: "0rem" }}>
            {/* Education Icon and the Logo text */}
            <MdCastForEducation size="3rem" /> <Span>Proviz School of AI</Span>
          </a>
        </NavLogo>

        {/* Mobile Icon (Hamburger menu) */}
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />  {/* Toggle mobile menu visibility */}
        </MobileIcon>

        {/* Navigation Items for Desktop */}
        <NavItems>
          <NavLink as={Link} to="/about">About</NavLink> {/* About page link */}
          <NavLink as={Link} to="/testimonials">Testimonials</NavLink> {/* Testimonials page link */}
          <NavLink as={Link} to="/courses">Courses</NavLink> {/* Courses page link */}
          <NavLink as={Link} to="/team">Team</NavLink> {/* Team page link */}
        </NavItems>

        {/* Button to open Application Form Modal */}
        <ButtonContainer>
          <GitHubButton onClick={toggleModal}>Apply</GitHubButton> {/* Open the application modal */}
        </ButtonContainer>

        {/* Mobile Menu (Appears when the hamburger icon is clicked) */}
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink as={Link} to="/about" onClick={() => setIsOpen(false)}>About</MobileLink> {/* Mobile menu link for About */}
            <MobileLink as={Link} to="/testimonials" onClick={() => setIsOpen(false)}>Testimonials</MobileLink> {/* Mobile menu link for Testimonials */}
            <MobileLink as={Link} to="/courses" onClick={() => setIsOpen(false)}>Courses</MobileLink> {/* Mobile menu link for Courses */}
            <MobileLink as={Link} to="/team" onClick={() => setIsOpen(false)}>Team</MobileLink> {/* Mobile menu link for Team */}
            
            {/* Apply button in the mobile menu */}
            <GitHubButton 
              onClick={toggleModal} 
              style={{ padding: '10px 16px', background: theme.primary, color: 'white', width: 'max-content' }}>
              Apply
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>

      {/* Application Form Modal */}
      {isModalOpen && <ApplicationFormModal onClose={toggleModal} />}  {/* Show modal when isModalOpen is true */}
    </Nav>
  );
};

export default Navbar;
