import React from 'react';

import NFT from './NFT';

const Intelligence = () => {
  return (
    <div className="intelligence">
      <div className="container">
        <div className="interlligence__inner">
          <div className="intelligence__top">
            <h2 className="intelligence__title">Collective Intelligence</h2>
            <p className="intelligence__text">
              Our members are sophisticated investors in NFTS, and our ecosystem reaches from BAYC, Azuki to Whales across the globe. We believe in group bottoms-up-driven research. A
              collective working together is stronger than any single member.
            </p>
          </div>
          <div className="intelligence__stats">
            <div className="intelligence__stats-item intelligence__stats-item--members">
              <span className="intelligence__stats-number">10,000</span>
              <span className="intelligence__stats-text">Membership NFTs</span>
            </div>
            <div className="intelligence__stats-item intelligence__stats-item--nft">
              <span className="intelligence__stats-number">0.045</span>
              <span className="intelligence__stats-text">
                Mint Price (ETH)
              </span>
            </div>
          </div>
          <div className="intelligence__nfts">
            <NFT number="Access" name="Bored Apes"  />
            <NFT number="Access" name="Moonbirds"  />
            <NFT number="Access" name="Coolcats"  />
            <NFT number="Access" name="Azuki" />
            <NFT number="Access" name="Habibiz"  />
            <NFT number="Access" name="Otherland"  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intelligence;
