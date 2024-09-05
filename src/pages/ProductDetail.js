import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import background from '../assets/aboutBackground.jpg';
import zapiro from '../assets/zapiro.jpeg';
import rhino from '../assets/rhino.jpeg';

const ProductDetail = () => {
  useParams();
  const product = {
    name: "Name of NFT",
    price: "0.5",
    description: "Insert description",
    image: rhino,
    artist: {
      name: "Name of Artist",
      description: "This is a description of the artist. Insert sad sob story here. wahhhhhhhhhhhh. now I make street art and I sell it on this platform to make money for my 12 children. I have a whole starting 11 and a substitute."
    }
  };

  return (
    <div className="product-detail">
      <Container>
        <Row className="mt-5">
          <Col md={6}>
            <img src={product.image} alt={product.name} className="product-image" />
          </Col>
          <Col md={6}>
            <h1 className="nft-name">{product.name}</h1>
            <p className="nft-price">{product.price} ETH</p>
            <p className="nft-description">{product.description}</p>
            <Button variant="dark">Buy</Button>
          </Col>
        </Row>
      </Container>
      <div className="about-artist" style={{ backgroundImage: `url(${background})` }}>
        <div className="artist-section">
          <Container>
            <Row className="text-center">
              <Col>
                <img src={zapiro} alt="Artist" className="artist-image" />
                <h2 className="artist-name">{product.artist.name}</h2>
                <p className="artist-description">{product.artist.description}</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
