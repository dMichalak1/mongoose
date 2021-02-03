const mongoose = require('mongoose')

const loanSchema = new mongoose.Schema({
    id_loan:{
        type: Number,
    },
    user:{
        
        firstname:{
            type:String
        },
        lastname:{
            type:String
        }
    },
    book:{
        title:{
            type: String,
            required: true
        },
        author:{
            type: String,
            required: true
        }
    }
    
})
const Loan = mongoose.model('Loan',loanSchema)
module.exports = Loan