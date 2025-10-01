const mongoose = require('mongoose');
const db = require('../config/db');
const bcrypt = require('bcrypt');
const UserModel = require('./user.model');

const { Schema } = mongoose;


const todoSchema = new Schema({

    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: UserModel.modelName,
        required: true,
    },

    title:{
        type: String,
        required: true,
        
    },

    desc:{
        type: String,
        required: true,
    }
});


const TodoModel = db.model('todo', todoSchema);

module.exports = TodoModel;