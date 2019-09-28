const { Status } = require("./Status");

/* const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi'); */

const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    status: {
        type: Status,
        required: true,
    },
    userId: {
        type: String,
        required: true,
        unique: true
    },
 
});

const Task = mongoose.model('Task', taskSchema);

exports.Task = Task;