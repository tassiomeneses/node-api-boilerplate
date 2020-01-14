const { Router } = require('express');
const routes = Router();

const homeRouter = require('./routes/home.router');
const usersRouter = require('./routes/users.router');

routes.use(homeRouter);
routes.use(usersRouter);

module.exports = routes;