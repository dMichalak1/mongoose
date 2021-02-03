const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        default: 0
    },
    email:{
            type: String,
            default: "brak"             
    },
    borrowedBooks: {
            type:Number,
            default: 0
    }
    
})
const User = mongoose.model('User',userSchema)
module.exports = User