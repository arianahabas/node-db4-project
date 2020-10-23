exports.seed = async function(knex) {
	await knex("recipes").insert([   
    { name: "PbJ", directions: "Step1: do This, Step2: do That" },
    { name: "Toast", directions: "Step1: do This, Step2: do That" },
    { name: "Workout Drink", directions: "Step1: do This, Step2: do That" },
	])
}