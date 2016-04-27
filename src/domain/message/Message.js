/**
 * Created by xavi on 11/22/15.
 */
const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    text: String,
    date: Date
});

MessageSchema.statics.makeMessage = function (text) {
    if (text == null || text.trim() === "") {
        throw new Error('Message must not be empty');
    }

    return new Message({ text: text.trim(), date: new Date });
};

MessageSchema.methods.toDTO = function () {
    return { message: this.text, sent: this.date };
};

const Message = mongoose.model('Message', MessageSchema);
module.exports = Message;
