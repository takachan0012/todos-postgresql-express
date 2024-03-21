const routes = require('express').Router()
const { getTodos, addTodo, getTodoById } = require('./handler')

routes.get('/todos', getTodos);
routes.post('/add', addTodo);
routes.get('/todos/:id', getTodoById);

module.exports = routes;