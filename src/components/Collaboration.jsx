import React from 'react';
import CollabItem from './CollabItem';
import { emotes, grails } from './imports';

const Collaboration = () => {
  return (
    <div className="collaboration">
      <div className="container">
        <div className="collaboration__inner">
          <div className="collaboration__top">
            <h2 className="collaboration__title">Collaborations</h2>
            <p className="collaboration__text">
              Past and upcoming project collaborations available exclusively to
              the WHALE Collective passholders community. More revealed in time.
            </p>
          </div>
          <CollabItem
            image={grails}
            type="Original Collection"
            title="SpaceBirds: Upcoming Collection"
            text="Unique NFT collections, Whale Collective members will always be whitelisted to Mint early with a Whale Discount."
            link="https://mint.whalecollective.io/"
            linkText="Mint your Membership Now"
          />
          <CollabItem
            image={emotes}
            type="Our Ecosystem"
            title="Learn from the Alphas from Blue Chip NFTs"
            text="Mirror and learn from the best investors, see their alpha discussions from: Bored Ape Yacht Club, Azuki, Anonymice, Moonbirds, Coolcats, Habibiz, Karafuru, Kaiju, Zombieclub, MVHQ."
            link="https://mint.whalecollective.io/"
            linkText="Mint your Membership Now"
          />
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
