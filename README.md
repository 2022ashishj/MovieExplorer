# MovieExplorer

# Movie Search App

A responsive React-based movie search application that allows users to search for movies and view their details using the OMDB API.

## 📋 Features

- Search movies by title
- Display popular movies on homepage
- View detailed movie information in a modal
- Responsive design for all screen sizes
- Custom styling with modern UI/UX

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/movie-search-app.git
cd movie-search-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your OMDB API key:
```env
REACT_APP_OMDB_API_KEY=your_api_key_here
```

To get an API key, visit [OMDB API](http://www.omdbapi.com/) and request a free API key.

4. Start the development server:
```bash
npm start
```

The application will open in your default browser at `http://localhost:3000`.

## 🛠️ Project Structure

```
movie-search-app/
│
├── src/
│   ├── components/
│   │   └── MovieSearchApp.js
│   │
│   ├── styles/
│   │   └── MovieSearchApp.css
│   │
│   ├── App.js
│   └── index.js
│
├── public/
│   └── index.html
│
├── package.json
└── README.md
```

## 🎯 Usage

1. **Search for Movies**
   - Type a movie title in the search bar
   - Click the "Search" button or press Enter
   - Results will display in a grid layout

2. **View Movie Details**
   - Click on any movie card to view detailed information
   - The modal will display:
     - Movie poster
     - Title and release year
     - Plot summary
     - Genre
     - IMDB rating

3. **Close Movie Details**
   - Click the "×" button in the top-right corner
   - Or click anywhere outside the modal

## 🎨 Customization

### Styling

The app uses custom CSS for styling. You can modify the styles in `src/styles/MovieSearchApp.css`. Key style sections include:

- `.app-container`: Main container styles
- `.movie-card`: Individual movie card styles
- `.modal-container`: Movie details modal styles
- Media queries for responsive design

### API Configuration

You can modify the API calls in `MovieSearchApp.js`:

```javascript
const fetchMoviesByTitle = async () => {
  try {
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${searchTerm}&apikey=${process.env.REACT_APP_OMDB_API_KEY}`
    );
    setMovies(response.data.Search);
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};
```

## 🔧 Troubleshooting

Common issues and solutions:

1. **API Key Issues**
   - Ensure your OMDB API key is correctly set in the `.env` file
   - Verify the API key is active and valid

2. **Images Not Loading**
   - Check if the movie poster URL is valid
   - The app includes a fallback to a placeholder image

3. **Search Not Working**
   - Verify your internet connection
   - Check the browser console for any error messages
   - Ensure the search term is not empty

## 📱 Responsive Design

The app is responsive across different screen sizes:

- Desktop (> 768px): Full grid layout
- Tablet (768px): Adjusted grid and modal size
- Mobile (< 768px): Single column layout
