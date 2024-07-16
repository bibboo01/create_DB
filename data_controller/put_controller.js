'use strict';

const express = require('express');
const crypto = require('crypto');
const put_control = express.Router();
const connection = require('../config_controller/db_connect');

put_control.put('/edit/:std_id', function (req, res, next) {
    connection.execute("UPDATE std_school_tbl SET sch_name=?,  sch_province	=? WHERE std_id=?;",
        [req.body.sch_name, req.body.sch_province, req.params.std_id])
        .then(() => {
            console.log('Successfully');
        }).catch((err) => {
            console.log(err);
        });
});

put_control.use('/', function (req, res, next) {
    res.sendStatus(404);
})
module.exports = put_control;