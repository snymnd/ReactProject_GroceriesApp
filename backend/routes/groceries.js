//groceries API end-point

const router = require('express').Router()
let Groceries = require('../models/groceries.model')

router.route('/').get((req, res)=>{
    //mongoose method to return all list from db of users
    Groceries.find()
        .then( groceries=>res.json(groceries))
        .catch(err =>res.status(400).json('Error : '+ err))
})

router.route('/add').post((req,res)=>{
    const username = req.body.username
    const description = req.body.description
    const duration = Number(req.body.duration)
    const date = Date.parse(req.body.date)

    const newGroceries = new Groceries({
        username,
        description,
        duration,
        date
    })

    newGroceries.save()
        .then(()=>res.json('Groceries Added'))
        .catch(err=>res.status(400).json('Error : '+ err))
})

module.exports = router;