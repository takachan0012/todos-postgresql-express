const routes = require('express').Router()
const { getTodos } = require('./handler')

// routes.post('/add', addTodo)
routes.get('/', getTodos)

module.exports = routes;