exports.seed = async function(knex) {
	await knex("recipes_ingredients").insert([
    //pbJ
    { recipeId: 1, ingredientId: 1, quantity: 2 },
    { recipeId: 1, ingredientId: 2, quantity: 2},
    { recipeId: 1, ingredientId: 3, quantity: 2 },
     //toast
    { recipeId: 2, ingredientId: 1, quantity: 2},
    { recipeId: 2, ingredientId: 4, quantity: 3},

    //workout drink
    { recipeId: 3, ingredientId: 5, quantity: 2},
    { recipeId: 3, ingredientId: 6, quantity: 2},

	])
}
