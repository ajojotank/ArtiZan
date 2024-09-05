import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import './CardSection.css';

const cardsData = [
  {
    title: "Create Your NFT",
    text: "Artists upload their street art to ArtiZan and mint it as an NFT. Each NFT is a unique digital token representing the artwork, ensuring its originality and ownership on the blockchain."
  },
  {
    title: "Smart Contracts",
    text: "Smart contracts automate transactions and enforce the rules of ownership and royalties. When an NFT is sold, the smart contract ensures that the artist receives their share of the sale and that the transaction is recorded immutably."
  },
  {
    title: "Trade & Collect",
    text: "Collectors can browse and purchase NFTs on the marketplace. Once purchased, the NFT is transferred to the collector’s digital wallet. The entire process is secure and transparent, with blockchain technology ensuring authenticity and ownership."
  },
];

const CardSection = () => {
  return (
    <section className="my-5">
      <Container>
        <h2 className="text-center mb-4">South Africa's Premier NFT Marketplace for Street Art</h2>
        <Row className="justify-content-center">
          {cardsData.map((card, index) => (
            <Col key={index} md={4} className="d-flex align-items-stretch">
              <Card className="mb-4 shadow-sm custom-card">
                <Card.Body>
                  <Card.Title className="card-title">{card.title}</Card.Title>
                  <Card.Text className="card-text">{card.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default CardSection;
