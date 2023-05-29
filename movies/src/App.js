import React, { useState } from 'react';
import MovieList from './components/MovieList'; // Update the import path
import Filter from './components/Filter'; // Update the import path


const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'Spider-Man',
      description: 'A superhero film about Spider-Man.',
      posterURL: '/images/spiderman.jpg',
      rating: 8.5,
    },
    {
      title: 'Star Wars',
      description: 'An epic space opera film series.',
      posterURL: '/images/star Wars.jpg',
      rating: 9.0,
    },
    {
      title: 'The Good Dinosaur',
      description: 'An animated film about a dinosaur.',
      posterURL: '/images/the good dinosaur.jpg',
      rating: 7.2,
    },
  ]);

  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState('');

  const handleTitleChange = (e) => {
    setFilterTitle(e.target.value);
  };

  const handleRatingChange = (e) => {
    setFilterRating(e.target.value);
  };

  const handleAddMovie = () => {
    // Create a new movie object based on user input
    const newMovie = {
      title: prompt('Enter the title of the movie:'),
      description: prompt('Enter the description of the movie:'),
      posterURL: prompt('Enter the URL of the movie poster:'),
      rating: parseFloat(prompt('Enter the rating of the movie:')),
    };

    // Add the new movie to the existing list of movies
    setMovies([...movies, newMovie]);
  };

  // Filter movies based on title and rating (you can modify this logic as needed)
  const filteredMovies = movies.filter((movie) => {
    const titleMatch = movie.title.toLowerCase().includes(filterTitle.toLowerCase());
    const ratingMatch = filterRating ? movie.rating >= parseFloat(filterRating) : true;
    return titleMatch && ratingMatch;
  });

  return (
    <div>
      <h1>Movie Library</h1>

      <Filter
        filterTitle={filterTitle}
        filterRating={filterRating}
        onTitleChange={handleTitleChange}
        onRatingChange={handleRatingChange}
      />

      <MovieList movies={filteredMovies} />

      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
};

export default App;
