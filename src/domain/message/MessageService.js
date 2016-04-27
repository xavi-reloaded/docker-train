const MessageRepository = require('./MessageRepository');
const Message = require('./Message');

function MessageService(repository) {
    this.repository = repository || new MessageRepository();
}

MessageService.prototype.writeMessage = function (text) {
    const message = Message.makeMessage(text);
    return this.repository.save(message);
};

MessageService.prototype.listMessages = function () {
    return this.repository.findLatest();
};


module.exports = MessageService;
