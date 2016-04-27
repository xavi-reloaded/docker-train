const wait = require('wait.for');

function async(test) {
    return function (done) {
        wait.launchFiber(function () {
            try {
                test();
                done();
            } catch (e) {
                done(e);
            }
        });
    }
}

const MessageRepository = require('../../../src/domain/message/MessageRepository');
const Message = require('../../../src/domain/message/Message');

describe('MessageRepository #Integration', function () {
    beforeEach(require('../../integration/TestConnection').connect);

    function exerciseRepository() {
        return new MessageRepository();
    }

    function exerciseMessage() {
        return Message.makeMessage('hello world!');
    }

    describe('basic flow', function () {
        it('when a message is saved, it must be findable', async(function () {
            const repository = exerciseRepository();
            const message = exerciseMessage();

            repository.save(message);
            repository.findLatest().length.should.equal(1);
        }));
    });
});
