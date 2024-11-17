import React from 'react';

const MovieCard = ({ movie, onClick }) => (
  <div className="movie-card" onClick={() => onClick(movie)}>
    <img 
      src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.jpg'} 
      alt={movie.Title} 
    />
    <div className="movie-info">
      <h3>{movie.Title}</h3>
      <p className="movie-year">{movie.Year}</p>
    </div>
  </div>
);

export default MovieCard;