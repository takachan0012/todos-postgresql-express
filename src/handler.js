const { nanoid } = require('nanoid');
const client = require('./db');
const tableName = process.env.DB_TABLE;

const addTodo = async (req, res) => {
    const { title, isFinished, description } = req.body;
    console.log({ title })
    if (title === undefined) {
        res.status(400);
        return res.send({
            status: 'error',
            message: 'error added todo, please add title correctly',
        })
    }
    const id = nanoid(16);
    const query = {
        name: 'add-todo',
        text: `INSERT INTO ${tableName}(id,title,isfinished,description) VALUES($1, $2, $3, $4)`,
        values: [id, title, isFinished, description]
    }
    const response = await client.query(query);
    if (response.rowCount === 1) {
        res.status(201);
        return res.send({
            status: 'success',
            message: 'todo added successfully',
            data: {
                id
            }
        })
    }
}
const getTodos = async (req, res) => {
    const query = {
        name: 'fetch-todos',
        text: `SELECT * FROM ${tableName} ORDER BY updatedat DESC`
    }
    const response = await client.query(query);
    if (response.rowCount === 0) {
        res.status(400);
        return res.send({
            status: 'error',
            message: 'error fetching todos',
        })
    }
    res.status(200);
    return res.send({
        status: 'success',
        data: {
            todos: response.rows,
        }
    })
}

const getTodoById = async (req, res) => {
    const { id } = req.params;
    const query = {
        name: 'fetch-todo-by-id',
        text: `SELECT * FROM ${tableName} WHERE id = $1`,
        values: [id]
    }
    const response = await client.query(query);
    if (response.rowCount === 0) {
        res.status(404);
        return res.send({
            status: 'error',
            message: 'error todo not found',
        })
    }
    res.status(200);
    return res.send({
        status: 'success',
        data: {
            todo: response.rows[0],
        }
    })
}

const updateTodoById = async (req, res) => {
    const { id } = req.params;
    const { title, isFinished, description } = req.body;
    if (title === undefined) {
        res.status(400);
        return res.send({
            status: 'error',
            message: 'error updating todo, please add title correctly',
        })
    }
    const query = {
        name: 'update-todo',
        text: `UPDATE ${tableName} SET title = $1, isfinished = $2, description = $3, updatedat = CURRENT_TIMESTAMP WHERE id = $4`,
        values: [title, isFinished, description, id]
    }
    const response = await client.query(query);
    if (response.rowCount === 1) {
        res.status(200);
        return res.send({
            status: 'success',
            message: 'todo updated successfully',
        })
    } else {
        res.status(400);
        return res.send({
            status: 'error',
            message: 'error updating todo, id not found',
        })
    }
}

const deleteTodoById = async (req, res) => {
    const { id } = req.params;
    const query = {
        name: 'delete-todo',
        text: `DELETE FROM ${tableName} WHERE id = $1`,
        values: [id]
    }
    const response = await client.query(query);
    if (response.rowCount === 1) {
        res.status(200);
        return res.send({
            status: 'success',
            message: 'todo deleted successfully',
        })
    } else {
        res.status(400);
        return res.send({
            status: 'error',
            message: 'error deleting todo, id not found',
        })
    }
}

module.exports = { getTodos, addTodo, getTodoById, updateTodoById, deleteTodoById };