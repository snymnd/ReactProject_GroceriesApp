//user API Endpoint
const router = require('express').Router()
let User = require('../models/user.model')

router.route('/').get((req, res)=>{
    //mongoose method to return all list from db of users
    User.find()
        .then( users=>res.json(users))
        .catch(err =>res.status(400).json('Error : '+ err))
})

router.route('/add').post((req,res)=>{
    const userName = req.body.username

    const newUser = new User({userName})

    newUser.save()
        .then(()=>res.json("user added"))
        .catch(err=>res.status(400).json('Error : '+ err))
})

module.exports = router;