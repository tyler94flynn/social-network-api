const { Schema, model } = require('mongoose');

const userSchema = new Schema({
//username

//email

//thoughts

//friends
},
{
    toJSON: {
        virtuals: true
    },
    id: false
});

module.exports = User;