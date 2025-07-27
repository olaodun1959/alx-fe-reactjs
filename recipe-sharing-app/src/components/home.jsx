// Home.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Home = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      <SearchBar />
      <ul>
        {filteredRecipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
