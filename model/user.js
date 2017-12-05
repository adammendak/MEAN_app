import * as Schema from "mongoose";

const mongoose = require('mongoose');

const userSchema =  new Schema({

    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    messages: [{type: Schema.Types.ObjectId}]

})

module.exports = mongoose.model('User', userSchema)
