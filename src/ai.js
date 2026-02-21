export async function getRecipeFromOpenAI(ingredientsArr) {
  try {
    const response = await fetch("http://localhost:5000/api/recipe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ingredients: ingredientsArr }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Server error:", errorData.error);
      return "Failed to generate recipe. Please try again.";
    }

    const data = await response.json();
    return data.recipe;

  } catch (err) {
    console.error("Fetch error:", err.message);
    return "Could not connect to the server. Is it running?";
  }
}