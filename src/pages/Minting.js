import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import './Minting.css';
import defaultImage from '../assets/camera.png';

const Minting = () => {
  const [image, setImage] = useState(defaultImage);
  const [nftName, setNftName] = useState();
  const [nftPrice, setNftPrice] = useState();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="minting-page">
      <Container className="text-center pt-5">
        <Row>
          <Col lg={12} className="position-relative">
            <div className="image-container">
              <img src={image} alt="NFT" className="minting-image" />
              <input
                type="file"
                className="upload-input"
                onChange={handleImageUpload}
                accept="image/*"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  opacity: 0,
                  cursor: 'pointer'
                }}
              />
            </div>
            <Form.Control
              type="text"
              value={nftName}
              onChange={(e) => setNftName(e.target.value)}
              className="nft-name input-field mt-3"
              placeholder="Insert NFT Name"
            />
            <Form.Control
              type="text"
              value={nftPrice}
              onChange={(e) => setNftPrice(e.target.value)}
              className="nft-price input-field mt-3"
              placeholder="Insert NFT Price"
            />
            <p className="usd-price">1 ETH = $ 2,397.65</p>
            <Form>
              <Form.Group controlId="description">
                <Form.Control as="textarea" rows={3} placeholder="Insert description" />
              </Form.Group>
            </Form>
            <Button variant="dark" className="mt-5">Upload to Marketplace</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Minting;

