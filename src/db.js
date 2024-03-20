const { Client } = require('pg');
const client = new Client({
    user: 'jun',
    host: 'localhost',
    database: 'belajar',
    password: '',
    port: 5432
})
client.connect();

module.exports = client;
