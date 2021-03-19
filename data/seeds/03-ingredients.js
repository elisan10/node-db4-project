exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients").insert([
    { ingredient_id: 1, ingredient_name: "cheese" },
    { ingredient_id: 2, ingredient_name: "chicken" },
    { ingredient_id: 3, ingredient_name: "tortilla" },
  ]);
};
