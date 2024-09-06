import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import ProfileSidebar from './ProfileSidebar'; // Import the new ProfileSidebar component
import './Header.css';
import logo from '../assets/logo.jpg';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = (e) => {
    e.stopPropagation(); // Prevent event propagation
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = (e) => {
    e.stopPropagation(); // Prevent event propagation
    setIsSidebarOpen(false);
  };

  return (
    <>
      <Navbar expand="lg" className="px-5 navbar">
        <button className="navbar-brand-button" onClick={toggleSidebar}>
          <img src={logo} height="30" alt="Logo" className="navbar-logo" />
        </button>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link className="btn btn-dark mx-2">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/marketplace">
              <Nav.Link className="btn btn-dark mx-2">Marketplace</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/minting">
              <Nav.Link className="btn btn-dark mx-2">Create NFT</Nav.Link>
            </LinkContainer>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link className="btn btn-dark mx-2">Connect to MetaMask</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <ProfileSidebar 
        isOpen={isSidebarOpen} 
        closeSidebar={closeSidebar} 
      />
      {isSidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}
    </>
  );
}

export default Header;

