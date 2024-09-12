const express = require('express');

const recipeRouter = require('./data/routers/recipeRouter');
//routers

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    res.send(`<h3> The Server is Online. </h3>`);
});

// server.use routers

server.use('/api/', recipeRouter);

module.exports = server;