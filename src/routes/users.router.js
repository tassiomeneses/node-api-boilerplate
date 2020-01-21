const { Router } = require('express');
const routes = Router();

const usersController = require('../controllers/users.controller');

routes.get('/users', usersController.index);
routes.post('/users', usersController.create);
routes.get('/users/:id', usersController.show);
routes.delete('/users/:id', usersController.delete);
routes.patch('/users/:id', usersController.update);

module.exports = routes;