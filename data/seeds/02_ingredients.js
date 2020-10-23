exports.seed = async function(knex) {
	await knex("ingredients").insert([   
    { name: "slice bread" },
    { name: "tbsp jelly" },
    { name: "tbsp peanut butter" },
    { name: "tbsp butter" },
    { name: "scoop protein powder" },
    { name: "cup milk" },
	
	])
} 
