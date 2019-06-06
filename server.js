const express = require('express');

//routers

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    res.send(`<h3> The Server is Online. </h3>`);
});

// server.use routers

module.exports = server;