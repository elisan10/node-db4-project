const express = require("express");

const RecipesRouter = require("./recipes/recipe-router");

const server = express();

server.use(express.json());

server.use("/api/recipes", RecipesRouter);

module.exports = server;
