const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const get_control = require('../data_controller/get_controller');
const put_control = require('../data_controller/put_controller');
const post_control = require('../data_controller/post_controller');
const delete_control = require('../data_controller/delete_controller');

app.use('/get', get_control);
app.use('/put', put_control);
app.use('/post', post_control);
app.use('/del', delete_control);

app.use('/', function (req, res, next) {
    res.sendStatus(404);
});

app.listen(PORT, () =>
    console.log('Server running on localhost:' + PORT)
);