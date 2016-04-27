const Message = require('../../../src/domain/message/Message');
const MessageService = require('../../../src/domain/message/MessageService');
const MessageRepository = require('../../../src/domain/message/MessageRepository');
const sinon = require('sinon');

describe("MessageService", function () {
    const SomeList = [ 1, 2, 3 ];

    function exerciseMessageRepository() {
        const repository = new MessageRepository();
        repository.mock = sinon.mock(repository);
        return repository;
    }

    function exerciseServiceForSaving() {
        const repository = exerciseMessageRepository();
        repository.mock.expects('save').once().returnsArg(0);
        return new MessageService(repository);
    }

    function exerciseServiceForListing() {
        const repository = exerciseMessageRepository();
        repository.mock.expects('findLatest').once().returns(SomeList);
        return new MessageService(repository);
    }

    describe('writeMessage', function () {
        it('should save the created message', function () {
            const service = exerciseServiceForSaving();
            service.writeMessage('Hi!');
            service.repository.mock.verify();
        });
    });

    describe('listMessages', function () {
        it('should save the created message', function () {
            const service = exerciseServiceForListing();
            service.listMessages();
            service.repository.mock.verify();
        });
    });
});
