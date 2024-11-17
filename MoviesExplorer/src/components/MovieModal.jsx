import React from 'react';

const MovieModal = ({ movie, onClose }) => (
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <div className="modal-header">
        <h2>{movie.Title}</h2>
        <button className="close-button" onClick={onClose}>&times;</button>
      </div>
      <img 
        src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.jpg'} 
        alt={movie.Title}
        style={{ width: '100%', marginBottom: '1rem' }}
      />
      <div className="movie-details">
        <p><strong>Year:</strong> {movie.Year}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>Rating:</strong> {movie.imdbRating}</p>
      </div>
    </div>
  </div>
);

export default MovieModal;