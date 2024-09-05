import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import backgroundImage from '../assets/background.jpg';

const Hero = () => {
  const navigate = useNavigate();

  const handleBuyClick = () => {
    navigate('/marketplace');
  }

  const handleUploadClick = () => {
    navigate('/minting');
  }

  return (
    <div className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Container className="text-center py-5">
        <h1 className="display-4">ArtiZan</h1>
        <p className="lead">Crafting the future of digital art in SA</p>
        <Row className="justify-content-center mt-5">
          <Col xs="auto">
            <Button variant="dark" className="me-3" onClick={handleUploadClick}>Upload/Sell</Button>
          </Col>
          <Col xs="auto">
            <Button variant="dark" onClick={handleBuyClick}>Buy</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
