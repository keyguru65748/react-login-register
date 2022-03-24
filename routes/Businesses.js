const express = require('express');
const businesses = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')

const Business = require('../models/Business')
businesses.use(cors())

businesses.post('/create', (req, res) => {
    const today = new Date()
    const businessData = {
        business_name: req.body.business_name,
        email: req.body.email,
        user_location: req.body.user_location,
        created: today
    }

    console.log(businessData);

    Business.create(businessData)
        .then(business => {
            res.json({ status: 'Created!' })
        })
        .catch(err => {
            res.send('error' + err)
        })
})

businesses.get('/explore', (req, res) => {
    Business
        .findAll()
        .then(business => {
            res.send(business)
        })
})

module.exports = businesses;