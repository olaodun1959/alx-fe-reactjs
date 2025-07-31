// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import RecipeDetails from './components/RecipeDetails';
import AddRecipeForm from './components/AddRecipeForm';
import EditRecipeForm from './components/EditRecipeForm';
import RecipeList from './components/RecipeList';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Router>
      <div style={{ padding: '2rem' }}>
        <header>
          <h1>🍽️ Recipe Sharing App</h1>
          <nav style={{ marginBottom: '1rem' }}>
            <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
            <Link to="/add" style={{ marginRight: '1rem' }}>Add Recipe</Link>
            <Link to="/favorites" style={{ marginRight: '1rem' }}>Favorites</Link>
            <Link to="/recommendations" style={{ marginRight: '1rem' }}>Recommendations</Link>
          </nav>
          <SearchBar />
        </header>

        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <RecipeList />
            </>
          } />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
