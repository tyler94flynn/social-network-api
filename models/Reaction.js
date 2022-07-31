const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema({
//reaction id

//reaction body

//username

//created at
},
{
    toJSON: {
        getters: true
    },
    id: false

});

module.exports = reactionSchema;