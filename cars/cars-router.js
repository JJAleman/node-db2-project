const express = require('express');

const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', async (req, res) =>{
    try {
        const cars = await db('cars');
        res.status(200).json({message: 'Cars retrieved', cars});
    } catch(err) {
        res.status(500).json({message: 'Error retrieving cars'});
    }
});

module.exports = router;