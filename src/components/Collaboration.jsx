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
              the PROOF Collective passholders community. More revealed in time.
            </p>
          </div>
          <CollabItem
            image={grails}
            type="Original Collection"
            title="Grails: Choose Wisely"
            text="20 artists. 20 unique pieces of art. Artist names revealed only after the mint. Grails is an exclusive mint only available to PROOF Collective passholders. Each piece is a unique work of art made for the Grails drop in collaboration with some of the top artists in the space"
            link="#"
            linkText="Learn more"
          />
          <CollabItem
            image={emotes}
            type="Artist Collaborationn"
            title="Emotes by Heart You"
            text="Emotes are the first Proof + Artist PFP collaboration project featuring 1433 generated NFTs. Emotes was an exclusive drop for Proof and Heart You holders. Heart You is a project of self understanding, love and acceptance of the whole self, including our shadow self. “Emotes find their owners” Heart You says about these NFTs - encouraging the owner to explore the embedded messages and symbolism of the work."
            link="#"
            linkText="View collection on OpenSea"
          />
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
