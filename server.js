const express = require('express');
const server = express();

const projectsRouter = require('./projects/projectRouter');
const tasksRouter = require('./tasks/tasksRouter');

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json('hello from base');
});

server.use('/api/projects', projectsRouter);
server.use('/api/tasks', tasksRouter);

module.exports = server;