exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("step_ingredients").insert([
    { step_ingredient_id: 1, step_id: 2, ingredient_id: 1, quantity: 2.0 },
    { step_ingredient_id: 2, step_id: 4, ingredient_id: 2, quantity: 0.014 },
    { step_ingredient_id: 3, step_id: 4, ingredient_id: 3, quantity: 1.0 },
  ]);
};
