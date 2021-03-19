const db = require("../../data/db-config");

//This is how the SQL query looks like

// SELECT
// 	r.*, s.step_id, s.step_number, s.step_instructions, i.*, si.quantity
// FROM recipes as r
// JOIN steps as s
// 	ON r.recipe_id = s.recipe_id
// JOIN step_ingredients as si
// 	ON s.step_id = si.step_id
// JOIN ingredients as i
// 	ON si.ingredient_id = i.ingredient_id

async function getAllRecipes() {
  const recipeLayout = await db("recipes as r")
    .select(
      "r.*",
      "s.step_id",
      "s.step_number",
      "s.step_instructions",
      "i.*",
      "si.quantity"
    )
    .join("steps as s", "r.recipe_id", "s.recipe_id")
    .join("step_ingredients as si", "s.step_id", "si.step_id")
    .join("ingredients as i", "si.ingredient_id", "i.ingredient_id")
    .orderBy("s.step_number", "desc");

  //   if (recipeLayout[0].recipe_id !== null) {
  //     const recipe = {
  //       recipe_id: recipeLayout[0].recipe_id,
  //       recipe_name: recipeLayout[0].recipe_name,
  //       created_at: recipeLayout[0].created_at,
  //       steps: recipeLayout.map((step) => {
  //         return {
  //           step_id: step.step_id,
  //           step_number: step.step_number,
  //           step_instructions: step.step_instructions,
  //           ingredients: recipeLayout.map((ingredient) => {
  //             return {
  //               ingredient_id: ingredient.ingredient_id,
  //               ingredient_name: ingredient.ingredient_name,
  //               quantity: ingredient.quantity,
  //             };
  //           }),
  //         };
  //       }),
  //     };
  //     return recipe;
  //   } else {
  //     const noIngredients = {
  //       recipe_id: recipeLayout.recipe_id,
  //       recipe_name: recipeLayout.recipe_name,
  //       created_at: recipeLayout.created_at,
  //       steps: recipeLayout.map((step) => {
  //         return {
  //           step_id: step.step_id,
  //           step_number: step.step_number,
  //           step_instructions: step.step_instructions,
  //           ingredients: [],
  //         };
  //       }),
  //     };

  //     return noIngredients;
  //   }

  //   const recipe = recipeLayout.map((data) => {
  //     data.recipe_id
  //   });

  return recipeLayout;
}

async function getRecipeById(recipe_id) {
  const recipeLayout = await db("recipes as r")
    .select(
      "r.*",
      "s.step_id",
      "s.step_number",
      "s.step_instructions",
      "i.*",
      "si.quantity"
    )
    .join("steps as s", "r.recipe_id", "s.recipe_id")
    .join("step_ingredients as si", "s.step_id", "si.step_id")
    .join("ingredients as i", "si.ingredient_id", "i.ingredient_id")
    .orderBy("s.step_number", "desc");

  return recipeLayout;
}

module.exports = {
  getAllRecipes,
  //   getRecipeById,
};
