const express = require('express')();
const wait = require('wait.for');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const ApplicationPort = 9000;
const Wall = require('./application/Wall');

express.use(bodyParser.json());

express.use(function (req, res, next) {
    wait.launchFiber(next);
});

express.get('/wall', function (req, res) {
    res.end(JSON.stringify(new Wall().lastMessages()));
});

express.put('/wall/message', function (req, res) {
    res.end(JSON.stringify(new Wall().writeMessage(req.body.content)));
});

mongoose.connect('mongo.service', function (err) {
    if (err) throw err;

    express.listen(ApplicationPort, function (err) {
        if (err) throw err;

        console.log("[Log] Application listening on port: " + ApplicationPort);
    });

});
