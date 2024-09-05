import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductInfoCard from '../components/ProductInfoCard';
import './Marketplace.css';
import rhino from '../assets/rhino.jpeg'; // Importing the image explicitly

const products = [
  { id: 1, image: rhino, name: 'Product 1', price: '0.5' },
  { id: 2, image: rhino, name: 'Product 2', price: '0.8' },
  { id: 3, image: rhino, name: 'Product 3', price: '0.7' },
  { id: 4, image: rhino, name: 'Product 4', price: '0.3' },
  { id: 5, image: rhino, name: 'Product 5', price: '1.2' },
  { id: 6, image: rhino, name: 'Product 6', price: '1.0' },
  { id: 7, image: rhino, name: 'Product 7', price: '0.9' },
  { id: 8, image: rhino, name: 'Product 8', price: '1.1' },
  { id: 9, image: rhino, name: 'Product 9', price: '2.0' },
  { id: 10, image: rhino, name: 'Product 10', price: '1.5' },
];

const Marketplace = () => {
  return (
    <Container className="marketplace">
      <Row>
        {products.map(product => (
          <Col key={product.id} md={4} className="mb-4">
            <ProductInfoCard
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Marketplace;
