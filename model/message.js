import * as Schema from "mongoose";

const mongoose = require('mongoose');

const messageSchema =  new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId}
})

module.exports = mongoose.model('Message', messageSchema)
