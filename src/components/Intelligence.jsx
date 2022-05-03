import React from 'react';
import {
  apes,
  artBlocks,
  cryptopunks,
  meebits,
  metaverse,
  superrare
} from './imports';
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
            <NFT number="Access" name="Bored Apes" img={cryptopunks} />
            <NFT number="Access" name="Moonbirds" img={apes} />
            <NFT number="Access" name="Coolcats" img={meebits} />
            <NFT number="Access" name="Azuki" img={artBlocks} />
            <NFT number="Access" name="Habibiz" img={superrare} />
            <NFT number="Access" name="Otherland" img={metaverse} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intelligence;
