import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import recipes from "../data.json"; // store recipes here

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = recipes.find((r) => r.id.toString() === id);
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center text-red-500 mt-10">Recipe not found!</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Link to="/" className="text-blue-500 underline">← Back to Home</Link>

      <h1 className="text-4xl font-bold text-gray-800 mt-4 mb-2">
        {recipe.title}
      </h1>

      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
      />

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1">
          {recipe.ingredients.map((item, index) => (
            <li key={index} className="text-gray-600">{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2">
          {recipe.steps.map((step, index) => (
            <li key={index} className="text-gray-600">{step}</li>
          ))}
        </ol>
      </section>
    </div>
  );
}

export default RecipeDetail;
