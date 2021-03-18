exports.seed = function (knex) {
  // Deletes ALL existing entries

  return knex("steps").insert([
    {
      step_id: 1,
      step_number: 1,
      step_instructions: "roll the dough",
      recipe_id: 1,
    },
    {
      step_id: 2,
      step_number: 2,
      step_instructions: "add cheese on top",
      recipe_id: 1,
    },
    {
      step_id: 3,
      step_number: 1,
      step_instructions: "get your ingredients ready",
      recipe_id: 2,
    },
    {
      step_id: 4,
      step_number: 2,
      step_instructions: "add 1 tbsp chicken to tortilla",
      recipe_id: 2,
    },
  ]);
};
