import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, onMovieClick }) => (
  <div className="movie-list">
    {movies.map((movie) => (
      <MovieCard 
        key={movie.imdbID} 
        movie={movie} 
        onClick={onMovieClick} 
      />
    ))}
  </div>
);

export default MovieList;