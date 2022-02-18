//user schema for user DB
const monogoose = require('mongoose') 

const Schema = monogoose.Schema

const userSchema = new Schema ({
    username : {type : String, require : true},
    description : {type : String, require : true},
    duration : {type : String, require: false},
    date : {type : Date, require : false},
}, {
    timestamps: true,
})



const Groceries = monogoose.model('Groceries', userSchema)

module.exports = Groceries