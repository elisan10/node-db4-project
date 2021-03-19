const express = require("express");
const Recipe = require("./recipe-model");

const router = express.Router();

router.get("/", (req, res, next) => {
  Recipe.getAllRecipes()
    .then((recipe) => {
      res.json(recipe);
    })
    .catch(next);
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(500).json({
    sageAdvice: "Finding the real error is 90% of the bug fix",
    error: err.message,
    stack: err.stack,
  });
});

module.exports = router;
