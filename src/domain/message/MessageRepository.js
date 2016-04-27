/**
 * Created by xavi on 11/22/15.
 */
const wait = require('wait.for');

function MessageRepository(model) {
    this.Message = model || require('./Message');
}

MessageRepository.prototype.save = function (message) {
    wait.forMethod(message, 'save');
    return message;
};

MessageRepository.prototype.findLatest = function () {
    return wait.forMethod(this.Message, 'find', {}, null, { sort: { date: -1 } });
};

module.exports = MessageRepository;
