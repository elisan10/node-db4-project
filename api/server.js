const express = require("express");
const helmet = require("helmet");

const server = express();

// create RecipeRouter variable that references recipe-router

server.use(helmet());
server.use(express.json());

// need to use server to run on RecipeRouter

module.exports = server;
