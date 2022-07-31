const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const moment = require('moment');

const thoughtSchema = new Schema({
//thoughttext

//createdat

//username

//reactions
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

module.exports = Thought;