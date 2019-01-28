const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// const pg = require('pg');
// const Pool = pg.Pool; //class


// // DB CONNECTION
// const pool = new Pool({
//     database: 'prime_feedback', //the agreed upon name
//     host: 'localhost', // we all have our own on our comps
//     port: 5432, //default
//     max: 10, //to prevent overload
//     idleTimeoutMillis: 10000 //10 secs to not waste time
// });

    router.post('/', (req, res) => {
        const newData = req.body;
        console.log('in post', newData);
        
        let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments", "date")
                         VALUES ($1, $2, $3, $4, $5);`;
        pool.query(queryText, [newData.feeling, newData.understanding, newData.support, newData.comments]).then((response) => {
            console.log(response);
            res.sendStatus(201);
        }).catch((error) => {
            console.log('error in POST /feedback', error);
            res.sendStatus(500);
        })
    })

    
module.exports = router;