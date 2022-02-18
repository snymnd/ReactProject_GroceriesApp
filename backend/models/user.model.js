//user schema for user DB
const monogoose = require('mongoose') 

const Schema = monogoose.Schema

const userSchema = new Schema ({
    userName : {
        type : String,
        require : true,
        unique : true,
        trim : true,
        minlength : 3
    },
}, {
    timestamps: true,
})

const User = monogoose.model('User', userSchema)

module.exports = User