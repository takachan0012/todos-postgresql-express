const { nanoid } = require('nanoid');
const client = require('./db');
const tableName = process.env.DB_TABLE;

const addTodo = async (req, res) => {
    const { title, isFinished, description } = req.body;
    console.log(req.body)
    const id = nanoid(16);
    const query = {
        name: 'add-todo',
        text: `INSERT INTO ${tableName}(id,title,isfinished,description) VALUES($1, $2, $3, $4)`,
        values: [id, title, isFinished, description]
    }
    try {
        const response = await client.query(query);
        if (response.rowCount === 1) {
            res.send({
                status: 'success',
                message: 'Todo added successfully',
                data: {
                    id
                }
            })
        }
    } catch (error) {
        console.log({ error })
    }
}
const getTodos = async (req, res) => {
    const query = {
        name: 'fetch-todos',
        text: `SELECT * FROM ${tableName}`
    }
    console.log(query.text)
    try {
        const response = await client.query(query);
        res.send(response.rows)
    } catch (e) {
        console.log(e)
    }
}

module.exports = { getTodos, addTodo };