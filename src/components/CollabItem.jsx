import React from 'react';

const CollabItem = ({ image, title, type, text, link, linkText }) => {
  return (
    <div className="collaboration__item">
      <div className="collaboration__item-left">
        <img
          src={image}
          className="collaboration__image"
          alt="collaborations"
        />
      </div>
      <div className="collaboration__item-right">
        <span className="collaboration__type">{type}</span>
        <h3 className="collaboration__item-title">{title}</h3>
        <p className="collaboration__text">{text}</p>
        <a href={link} className="btn btn-link">
          {linkText}
          <span className="arrow-icon">
            <svg
              width="9"
              height="14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="m1 1 6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"></path>
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
};

export default CollabItem;
