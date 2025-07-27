// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'; // Component that lists all recipes
import RecipeDetails from './RecipeDetails'; // Shows individual recipe
import AddRecipeForm from './AddRecipeForm'; // Optional: for adding new recipes

function App() {
  return (
    <Router>
      <div className="App">
        <h1>🍽️ Recipe Sharing App</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/add" element={<AddRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;