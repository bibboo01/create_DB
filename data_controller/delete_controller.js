'use strict';

const express = require('express');
const crypto = require('crypto');
const delete_control = express.Router();
const connection = require('../config_controller/db_connect');

delete_control.delete('/del/:std_id', function (req, res, next) {
    connection.execute("DELETE FROM std_school_tbl WHERE std_id=?;",
     [req.params.std_id])
      .then(() => {
        console.log('Delete Successfully');
     }).catch((err) => {
        console.log(err);
     });
      res.end();
});

delete_control.use('/', function (req, res, next) {
    res.sendStatus(404);
})
module.exports = delete_control;