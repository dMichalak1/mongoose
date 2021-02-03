const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    description:{
        type: String,
    },
    publishingHouse:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        default: 0
    },
    borrowed: {
            type:Number,
            default: 0
    },
    
    
})
const Book = mongoose.model('Books',bookSchema)
module.exports = Book