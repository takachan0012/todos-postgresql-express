const client = require('./db');

const getTodos = async (req, res) => {
    const query = {
        name: 'fetch-todos',
        text: 'SELECT * FROM todos'
    }
    try {
        const response = await client.query(query);
        res.send(response.rows)
    } catch (e) {
        console.log(e)
    }
}

module.exports = { getTodos };