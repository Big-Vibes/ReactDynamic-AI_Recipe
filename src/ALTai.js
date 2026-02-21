import { InferenceClient } from '@huggingface/inference'

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make.
Format your response in markdown.
`

const hf = import.meta.env.VITE_HF_RECIPE_KEY
  ? new InferenceClient(import.meta.env.VITE_HF_RECIPE_KEY)
  : null


export async function getRecipeFromMistral(ingredientsArr) {

    if (!hf) {
        console.error("HF client not initialized");
        return "Missing API key";
    }

    const ingredientsString = ingredientsArr.join(", ")

    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mistral-7B-Instruct-v0.2",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please suggest a recipe.` }
            ],
            max_tokens: 1000,
        })

        return response.choices[0].message.content  // ✅ not response.generated_text

    } catch (err) {
        console.error("FULL ERROR:", err)
        return "Failed to generate recipe"
    }
}