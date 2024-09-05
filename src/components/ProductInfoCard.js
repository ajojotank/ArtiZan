import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductInfoCard.css';

const ProductInfoCard = ({ id, image, name, price }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${id}`);
  }

  return (
    <div className="product-info-card" onClick={handleClick}>
      <img src={image} alt={name} className="product-image" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="product-price">{price} ETH</p>
      </div>
    </div>
  );
};

export default ProductInfoCard;
