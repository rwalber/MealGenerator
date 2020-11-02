const { Router } = require('express');
const express = require('express');

const routes = express.Router();

const RandomMeal = require('./controllers/RandomMeal');

routes.get('/randomMeal', RandomMeal.show);

module.exports = routes;