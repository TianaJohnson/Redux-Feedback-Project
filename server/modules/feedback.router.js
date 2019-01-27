const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/results', async (req, res) => {
    const client = await pool.connect();