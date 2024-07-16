'use strict';

const express = require('express');
const crypto = require('crypto');
const post_control = express.Router();
const connection = require('../config_controller/db_connect');

post_control.post('/insert', function (req, res, next) {
    connection.execute(`INSERT INTO std_school_tbl (std_id ,sch_name ,sch_province) VALUES (?, ?, ?);`,
        [req.body.std_id, req.body.sch_name, req.body.sch_province])
        .then(() => {
            console.log('Insert Successfully');
        }).catch((err) => {
            console.log(err);
        });
    res.end();
});

post_control.use('/', function (req, res, next) {
    res.sendStatus(404);
})
module.exports = post_control;