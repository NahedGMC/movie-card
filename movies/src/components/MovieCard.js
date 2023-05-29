import React from 'react';
import Rating from './Rating';



const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <Rating rating={movie.rating} />

    </div>
   
  );
};

export default MovieCard;
