import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import recipes from "../data.json"; // adjust path if needed

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = recipes.find((r) => r.id.toString() === id);
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-gray-500 mt-10">Loading recipe...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Recipe Title */}
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        {recipe.title}
      </h1>

      {/* Recipe Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-xl shadow-md mb-6"
      />

      {/* Ingredients */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold mb-3 text-gray-700">Instructions</h2>
        <ol className="list-decimal list-inside text-gray-600 space-y-2">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
