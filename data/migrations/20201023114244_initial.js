exports.up = async function(knex) {
    await knex.schema.createTable("recipes", (table) => {
      table.increments("id")
      table.text("name").notNull()
      table.text('directions').notNull()
    })
  
    await knex.schema.createTable("ingredients", (table) => {
        table.increments("id")
        table.text("name").notNull().unique()
    })
  
   
    await knex.schema.createTable("recipes_ingredients", (table) => {
        table
          .integer("recipeId")
          .references("id")
          .inTable("recipes")
          .onDelete("CASCADE")
          .onUpdate("CASCADE")
          .notNull()
        table 
          .integer("ingredientId")
          .references("id")
          .inTable("ingredients")
          .onDelete("CASCADE")
          .onUpdate("CASCADE")
          .notNull()
      table
          .float("quantity")
          .notNull()
      table.primary(["recipeId", "ingredientId"])
    })
  };
  
  
  
  exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("recipes_ingredients")
    await knex.schema.dropTableIfExists("steps")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("recipes")
  };