import React from 'react';
import PropTypes from 'prop-types';

function Member({ title,  textWithoutList, imageSrc, altText, marginLeft, marginRight }) {
  return (
    <article className="card" style={{ marginLeft, marginRight }}>
      <img
        className="card__background"
        src={imageSrc}
        width="300"
        height="250"
        alt={altText}
      />
      <div className="card__content | flow">
        <div className="card__content--container | flow">
          <h2 className="card__title" style={{ color: "white", fontSize:"20px" }}>
            {title}
          </h2>
        
            <p className="card__description" style={{ color: "white",fontSize: "15px" }}>
              {textWithoutList}
            </p>
        </div>
      </div>
    </article>
  );
}

Member.propTypes = {
  title: PropTypes.string.isRequired,
  textWithoutList: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
};

export default Member;
