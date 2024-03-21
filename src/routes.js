const routes = require('express').Router()
const { getTodos, addTodo, getTodoById, updateTodoById, deleteTodoById } = require('./handler')

routes.get('/todos', getTodos);
routes.post('/add', addTodo);
routes.get('/todos/:id', getTodoById);
routes.put('/todos/:id', updateTodoById);
routes.delete('/todos/:id', deleteTodoById);

module.exports = routes;