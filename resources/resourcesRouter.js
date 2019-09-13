const express = require('express');
const router = express.Router();

const Resources = require('./resourcesModel');

router.get('/', async (req, res) => {
    try {
        const resources = await Resources.getResources();
        res.status(201).json({ resources });
    } catch (err) {
        res.status(500).json({ message: `${err}` });
    }
});

router.post('/', async (req, res) => {
    const resourceData = req.body;

    try {
        const resource = await Resources.addResources(resourceData);
        res.status(201).json(resource);
    } catch (err) {
        res.status(500).json({ message: `${err}` });
    }
});

module.exports = router