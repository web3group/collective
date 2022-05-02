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
            <NFT number="148" name="CryptoPunks" img={cryptopunks} />
            <NFT number="817" name="Bored Apes" img={apes} />
            <NFT number="499" name="Meebits" img={meebits} />
            <NFT number="5,288" name="Art Blocks" img={artBlocks} />
            <NFT number="326" name="SuperRare 1:1 NFTs" img={superrare} />
            <NFT number="273" name="Metaverse" img={metaverse} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intelligence;
