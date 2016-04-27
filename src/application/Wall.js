/**
 * Created by xavi on 11/22/15.
 */
const MessageService = require('../domain/message/MessageService');

function Wall(messageService) {
    this.messageService = messageService || new MessageService();
}

Wall.prototype.lastMessages = function () {
    return this.messageService.listMessages().map(function (e) { return e.toDTO(); });
};

Wall.prototype.writeMessage = function (message) {
    return this.messageService.writeMessage(message).toDTO();
};

module.exports = Wall;
