import React, { useState } from 'react';
import './NftListing.css';
import footerImage from '../assets/footer.jpg';
import ProductInfoCard from './ProductInfoCard';

const NftListing = ({ title }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const nfts = [
    { id: 1, name: 'NFT 1', image: footerImage, price: 2 },
    { id: 2, name: 'NFT 2', image: footerImage, price: 3 },
    { id: 3, name: 'NFT 3', image: footerImage, price: 1.5 },
    { id: 4, name: 'NFT 4', image: footerImage, price: 4 }
  ];

  const filteredNfts = nfts.filter(nft => nft.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="nft-listing">
      <h2 className="nft-listing-title">{title}</h2>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="nft-search-input"
      />
      <div className="nft-grid">
        {filteredNfts.map(nft => (
          <ProductInfoCard key={nft.id} id={nft.id} image={nft.image} name={nft.name} price={nft.price} />
        ))}
      </div>
    </div>
  );
};

export default NftListing;
