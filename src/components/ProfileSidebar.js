import React, { useState } from 'react';
import './ProfileSidebar.css';
import defaultProfilePic from '../assets/zapiro.jpeg';
import footerImage from '../assets/footer.jpg';
import ProductInfoCard from './ProductInfoCard'; // Ensure it's imported

const ProfileSidebar = ({ isOpen, closeSidebar }) => {
  const [profilePic, setProfilePic] = useState(defaultProfilePic);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState(''); // State variable to manage the view mode

  const nfts = [
    { id: 1, name: 'NFT 1', image: footerImage, price: 2 },
    { id: 2, name: 'NFT 2', image: footerImage, price: 3 },
    { id: 3, name: 'NFT 3', image: footerImage, price: 1.5 },
    { id: 4, name: 'NFT 4', image: footerImage, price: 4 }
  ];

  const filteredNfts = nfts.filter(nft => nft.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleProfilePicChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleViewClick = (mode) => {
    setViewMode(mode);
  };

  const preventClose = (e) => {
    e.stopPropagation(); // Prevent event propagation to avoid closing the sidebar
  }

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`} onClick={preventClose}>
      <div className="profile-content">
        <div className="profile-header">
          <input 
            type="file" 
            accept="image/*" 
            id="profilePicInput" 
            style={{ display: 'none' }} 
            onChange={handleProfilePicChange} 
          />
          <label htmlFor="profilePicInput" className="profile-pic-label">
            <img 
              src={profilePic} 
              alt="Profile" 
              className="profile-pic" 
              onClick={() => document.getElementById('profilePicInput').click()} 
            />
          </label>
          <h2>Lionel Messi</h2>
        </div>
        {viewMode === '' ? (
          <div className="profile-options">
            <button className="profile-button" onClick={() => handleViewClick('owned')}>
              View owned NFT’s
            </button>
            <button className="profile-button" onClick={() => handleViewClick('listed')}>
              View listed NFT’s
            </button>
            <div className="profile-input-group">
              <label>Username</label>
              <input type="text" placeholder="Update username" />
            </div>
            <div className="profile-input-group">
              <label>Password</label>
              <input type="password" placeholder="Update password" />
            </div>
            <div className="profile-input-group">
              <label>Bio</label>
              <input type="text" placeholder="Update bio" />
            </div>
            <button className="profile-button">Update details</button>
          </div>
        ) : (
          <div className="nft-listing-section">
            <button className="back-button" onClick={() => setViewMode('')}>
              Back
            </button>
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
        )}
      </div>
    </div>
  );
}

export default ProfileSidebar;
