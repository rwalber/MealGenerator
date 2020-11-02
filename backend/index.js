const express = require('express');
const cors = require('cors');

const routes = require('./routes');

const server = express();

server.get('/', (req, res) => {
    return res.json('Server started on port 3333');
});

server.use(cors());
server.use(routes);

server.listen(3333);