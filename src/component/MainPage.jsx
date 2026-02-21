import React from "react";
import ClaudeRecipe from "./ClaudeRecipe.jsx";
import IngredientsList from "./IngredientsList.jsx";
// import { getRecipeFromOpenAI } from "../ai.js";
import { getRecipeFromMistral } from "../ALTai.js";


export default function MainPage(){
 
    // const [ingredients, setIngredients] = React.useState([ "Chicken" ,"Oregano", "Tomatoes"])
 const [ingredients, setIngredients] = React.useState(
    [])
   

    const [recipe, setRecipe] = React.useState("")

    async function getRecipe (){
        // const recipeMarkdown = await getRecipeFromOpenAI(ingredients)
        const recipeMarkdown = await getRecipeFromMistral(ingredients)

        
        setRecipe(recipeMarkdown)
            // setRecipeShown(true)
    }
      
    function addIngredentNew(event) { 
    event.preventDefault();  

    const formData = new FormData(event.target);
    const newIngredient = formData.get("MyIngredent");

    if (!newIngredient.trim()) return;  // optional safety

    setIngredients(prev => [...prev, newIngredient]);

    event.target.reset(); 
}



    return(
        <>
        <main>            
        <form onSubmit={addIngredentNew} className="AddIngrdentForm" 
            // onSubmit={OnTypeSubmit}
        >
            <input 
                type="text"  
                placeholder="e.g. oregano"
                aria-label="Add Ingredent"  
                name="MyIngredent"          
            />
            <button type="submit">Add Ingredient</button>
            
            </form>
         
 
           { ingredients.length > 0 && 
           <IngredientsList 
                TheIngred ={ingredients} 
                getRecipe ={getRecipe}

           />   
           }   

        {recipe && < ClaudeRecipe recipe={recipe} /> }

             
        </main>    
        </>

    )
}

//Opened the file and made the following changes:
// import React from "react";
// import ClaudeRecipe from "./ClaudeRecipe.jsx";
// import IngredientsList from "./IngredientsList.jsx";
// import { getRecipeFromOpenAI } from "../ai.js";

// export default function MainPage() {
//   const [ingredients, setIngredients] = React.useState([]);
//   const [recipe, setRecipe] = React.useState("");
//   const [loading, setLoading] = React.useState(false);

//   async function getRecipe() {
//     setLoading(true);
//     const recipeMarkdown = await getRecipeFromOpenAI(ingredients);
//     setRecipe(recipeMarkdown);
//     setLoading(false);
//   }

//   function addIngredient(event) {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const newIngredient = formData.get("ingredient").trim();
//     if (!newIngredient) return;
//     setIngredients((prev) => [...prev, newIngredient]);
//     event.target.reset();
//   }

//   return (
//     <main>
//       <form onSubmit={addIngredient} className="AddIngrdentForm">
//         <input
//           type="text"
//           placeholder="e.g. oregano"
//           aria-label="Add Ingredient"
//           name="ingredient"
//         />
//         <button type="submit">Add Ingredient</button>
//       </form>

//       {ingredients.length > 0 && (
//         <IngredientsList TheIngred={ingredients} getRecipe={getRecipe} />
//       )}

//       {loading && <p>⏳ Generating your recipe...</p>}

//       {recipe && !loading && <ClaudeRecipe recipe={recipe} />}
//     </main>
//   );
// }
