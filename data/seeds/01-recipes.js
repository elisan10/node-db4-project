exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes").insert([
    {
      recipe_id: 1,
      recipe_name: "Pizza",
      created_at: "2021-01-01 08:23:19.120",
    },
    {
      recipe_id: 2,
      recipe_name: "Tacos",
      created_at: "2021-03-16 06:15:25.100",
    },
  ]);
};
