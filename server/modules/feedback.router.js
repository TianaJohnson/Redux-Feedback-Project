const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/results', async (req, res) => {
    const client = await pool.connect();

    router.post('/feedback', (req, res) => {
        const newData = req.body;
        console.log('in post', newData);
        
        let queryText = `INSERT INTO "feedback" ("felling", "understanding", "support", "comment", "date")
                         VALUES ($1, $2, $3, $4, $5);`;
        pool.query(queryText, [newData.feeling, newData.understanding, newData.support, newData.comment, newData.data ]).then((response) => {
            console.log(response);
            res.sendStatus(201);
        }).catch((error) => {
            console.log('error in POST /feedback', error);
            res.sendStatus(500);
        })
    })
})
module.exports = router;