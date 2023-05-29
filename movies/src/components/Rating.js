import React from 'react';

const Rating = ({ rating }) => {
  const stars = [];
  const fullStar = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  // Add full stars
  for (let i = 0; i < fullStar; i++) {
    stars.push(<i key={i} className="fas fa-star"></i>);
  }

  // Add half star if applicable
  if (hasHalfStar) {
    stars.push(<i key={stars.length} className="fas fa-star-half"></i>);
  }

  // Add empty stars to fill up the remaining space
  while (stars.length < 5) {
    stars.push(<i key={stars.length} className="far fa-star"></i>);
  }

  return <div className="rating">{stars}</div>;
};

export default Rating;
