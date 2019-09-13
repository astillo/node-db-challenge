const express = require('express');
const router = express.Router();

const Project = require('./projectsModel');

router.get('/', async (req, res) => {
    try {
        const project = await Project.getProjects();
        res.status(201).json({ project });
    } catch (err) {
        res.status(500).json({ message: `${err}` });
    }
});

router.post('/', async (req, res) => {
    const projectData = req.body;

    try {
        const project = await Project.addProject(projectData);
        res.status(201).json(project);
    } catch (err) {
        res.status(500).json({ message: `${err}` });
    }
});

module.exports = router