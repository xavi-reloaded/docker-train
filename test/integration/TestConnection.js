/**
 * Created by xavi on 11/22/15.
 */
const mongoose = require('mongoose');

function TestConnection() {

}

TestConnection.Connected = false;

TestConnection.connect = function (done) {
    if (TestConnection.Connected === true) {
        return done();
    }

    mongoose.connect('mongodb://mongo.service/test-database', function (err) {
        if (err) throw err;

        TestConnection.Connected = true;
        done();
    });
};

module.exports = TestConnection;
