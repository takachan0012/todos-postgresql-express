const routes = require('express').Router()
const { getTodos, addTodo } = require('./handler')

routes.get('/', getTodos)
routes.post('/add', addTodo)

module.exports = routes;