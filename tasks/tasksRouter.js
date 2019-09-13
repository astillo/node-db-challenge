const express = require('express');
const router = express.Router();

const Tasks = require('./tasksModel');

router.get('/', async (req, res) => {
    try {
        const tasks = await Tasks.getTasks();
        res.status(201).json({ tasks });
    } catch (err) {
        res.status(500).json({ message: 'Failed to get tasks' });
    }
});

router.post('/', async (req, res) => {
    const taskData = req.body;

    try {
        const task = await Tasks.addTask(taskData);
        res.status(201).json(task);
    } catch (err) {
        res.status(500).json({ message: `${err}` });
    }
});

module.exports = router