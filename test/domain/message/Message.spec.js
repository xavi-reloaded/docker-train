const Message = require('../../../src/domain/message/Message');

describe("Message", function () {
    describe("constraints", function () {
        [
            { test: null, fails: true },
            { test: undefined, fails: true },
            { test: "", fails: true },
            { test: " ", fails: true },
            { test: "   ", fails: true },
            { test: "nope", fails: false }
        ].forEach(function (testCase) {
            describe("in case of message '" + testCase.test + "'", function () {
                it(testCase.fails ? "should throw an exception" : "should create a new message", function () {
                    const exercise = (function () { Message.makeMessage(testCase.test) });
                    if (testCase.fails) {
                        exercise.should.throw();
                    } else {
                        exercise.should.not.throw();
                    }
                });
            });
        });
    });

    describe("message content", function () {
        [
            { being: " hi", becomes: "hi" },
            { being: "hi ", becomes: "hi" },
            { being: " hi ", becomes: "hi" },
            { being: "hi", becomes: "hi" }
        ].forEach(function (testCase) {
            describe("in case of message '" + testCase.being + "'", function () {
                it("should become '" + testCase.becomes + "'", function () {
                    Message.makeMessage(testCase.being).toDTO().message.should.equal(testCase.becomes);
                });
            });
        });
    });
});
