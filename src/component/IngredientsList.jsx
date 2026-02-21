export default function IngredientsList(prop){
   
    const ListIngredent= prop.TheIngred.map((MyIngredent)=>
       ( <li key={MyIngredent}> {MyIngredent} </li>)
    )
    return (
        
        <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ListIngredent}</ul>
               { prop.TheIngred.length > 3 && <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={prop.getRecipe} >Get a recipe</button>
                </div>}
            </section>
    )
}