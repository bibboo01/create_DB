'use strict';

const express = require('express');
const crypto = require('crypto');
const get_control = express.Router();
const connection = require('../config_controller/db_connect');

get_control.get('/show', function (req, res, next) {
    connection.execute('SELECT * FROM std_school_tbl;')
    .then((result) => {
       var rawData = result[0];
       res.send(rawData);
    }).catch((err) => {
       console.log(err);
       res.end();
    });
});

get_control.use('/', function (req, res, next) {
    res.sendStatus(404);
})
module.exports = get_control;