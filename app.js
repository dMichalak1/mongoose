require('./db/mongoose')
const User = require('./db/models/user')
const Book = require('./db/models/books')
const Loan = require('./db/models/loans')
const fs = require('fs');
let userdata = fs.readFileSync('./data/usersData.json');  
let users = JSON.parse(userdata);  
User.insertMany(users)
let bookslist = fs.readFileSync('./data/booksList.json');  
let book = JSON.parse(bookslist);  
Book.insertMany(book)
let loanlist = fs.readFileSync('./data/loansBook.json');  
let loan = JSON.parse(loanlist);  
Loan.insertMany(loan)


const createUser = async(data) =>{
    try{
        const user = new User(data)
        await user.save()
        console.log(user)
    }catch(error){
        console.log(error)
    }
   
}
const removeUser = async(data) =>{
    User.deleteMany(data, function(err, result) {
        if (err) {
          console.log(err)
        } else {
          console.log(result)
        }
      })
   
}
/*
removeUser(
    {
        firstName: "Daniel"
    }
)*/

const findUsers = async (data) => {
    try{
        const users = await User.find(data)
        console.log(users)
    }catch(error){
        console.log(error)
    }
}
const addBook = async(data) =>{
    try{
        const book = new Book(data)
        await book.save()
        console.log(book)
    }catch(error){
        console.log(error)
    }
   
}
const findBooks = async () => {
    try{
        const books = await Book.find({})
        console.log(books)
    }catch(error){
        console.log(error)
    }
}

const createLoan = async(data) =>{
    try{
        const loan = new Loan(data)
        await loan.save()
        console.log(loan)
    }catch(error){
        console.log(error)
    }
   
}
const findLoan = async () => {
    try{
        const loan = await Loan.find({})
        console.log(loan)
    }catch(error){
        console.log(error)
    }
}

/*
createUser({
    firstName: 'Agnieszka',
    lastName: 'piasecki',
    age: 22,
    tel: 2321331
})
*/
/*
addBook({
    title : "Hobbit",
    author: "J.R.R. Tolkiena",
    description : "Zabili smoka",
    publishingHouse: " J.R.R. Tolkiena",
    quantity: 42,
    borrowed: 32 
})*/
/*
createLoan({
    
        id_loan: 111112,
        user:{
            firstname: "Bożena",
            lastname: "Nowak"
                },
        book:{
            title: "Hobbit 3",
            author: "J.R.R. Tolkiena"
          }
    
          
})*/
findUsers(
    {firstName: "Daniel"}
)
//findBooks()
//findLoan()