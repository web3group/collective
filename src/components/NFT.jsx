import React from 'react';

const NFT = ({ number, name, img }) => {
  return (
    <div
      className="intelligence__nft"
      style={{ backgroundImage: `url(${img})` }}>
      <span className="intelligence__nft-number">{number}</span>
      <span className="intelligence__nft-name">{name}</span>
    </div>
  );
};

export default NFT;
