const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    publishedYear:{
        type:Number,
        min:1000,
        max:new Date().getFullYear(),
    },
    genre:{
        type:String
    }
})
module.exports = mongoose.model('Book',bookSchema);