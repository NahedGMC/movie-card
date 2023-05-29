import React from 'react';

const Filter = ({ filterTitle, filterRating, onTitleChange, onRatingChange }) => {
  return (
    <div className="filter">
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" value={filterTitle} onChange={onTitleChange} />

      <label htmlFor="rating">Rating:</label>
      <input type="number" id="rating" value={filterRating} onChange={onRatingChange} step="0.1" />

      <button onClick={() => alert('Filtering movies...')}>Filter</button>
    </div>
  );
};

export default Filter;
