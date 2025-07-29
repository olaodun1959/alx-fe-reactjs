// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  return (
    <Router>
      <div style={{ padding: '2rem' }}>
        <header>
          <h1>🍽️ Recipe Sharing App</h1>
          <nav style={{ marginBottom: '1rem' }}>
            <Link to="/" style={{marginRight: '1rem' }}>Home</Link>
            <Link to="/add" style={{ marginRight: '1rem' }}>Add Recipe</Link>
            <Link to="/favorites" style={{ marginRight: '1rem' }}>Favorites</Link>
            <Link to="/recommendations">Recommendations</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
