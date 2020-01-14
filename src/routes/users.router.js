const { Router } = require('express');
const routes = Router();

const usersController = require('../controllers/users.controller');

routes.get('/users', usersController.index);

module.exports = routes;