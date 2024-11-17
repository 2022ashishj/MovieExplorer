import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieModal from './components/MovieModal';
import LoadingSpinner from './components/LoadingSpinner';
import './styles/styles.css';

const API_KEY = '4eced327';
const API_URL = 'https://www.omdbapi.com';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const searchMovies = async (searchTerm, pageNumber = 1) => {
    if (!searchTerm?.trim()) {
      setMovies([]);
      setError(null);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(
        `${API_URL}/?apikey=${API_KEY}&s=${searchTerm}&page=${pageNumber}&type=movie`
      );
      const data = await response.json();
      
      if (data.Response === 'True') {
        setMovies(data.Search);
        setError(null);
      } else {
        setError(data.Error || 'No movies found');
        setMovies([]);
      }
    } catch (err) {
      setError('Failed to fetch movies');
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchMovieDetails = async (imdbID) => {
    try {
      const response = await fetch(
        `${API_URL}/?apikey=${API_KEY}&i=${imdbID}&plot=full`
      );
      const data = await response.json();
      
      if (data.Response === 'True') {
        setSelectedMovie(data);
      }
    } catch (err) {
      console.error('Failed to fetch movie details:', err);
    }
  };

  const fetchInitialMovies = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Using a popular movie title that's likely to return results
      const response = await fetch(
        `${API_URL}/?apikey=${API_KEY}&s=Avengers&type=movie`
      );
      const data = await response.json();
      
      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setError('No movies found');
        setMovies([]);
      }
    } catch (err) {
      setError('Failed to fetch initial movies');
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInitialMovies();
  }, []);

  const handleMovieClick = async (movie) => {
    await fetchMovieDetails(movie.imdbID);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <SearchBar onSearch={(term) => {
          setPage(1);
          searchMovies(term, 1);
        }} />
        
        {error && (
          <p style={{ textAlign: 'center', color: 'var(--secondary-color)' }}>
            {error}
          </p>
        )}
        
        {loading ? (
          <LoadingSpinner />
        ) : (
          <MovieList movies={movies} onMovieClick={handleMovieClick} />
        )}
        
        {selectedMovie && (
          <MovieModal
            movie={selectedMovie}
            onClose={() => setSelectedMovie(null)}
          />
        )}
      </div>
    </div>
  );
};

export default App;