const express = require('express')
const formRoutes = express.Router()

formRoutes.get('/form', (req, res) => {
    res.render('form', {
        title: 'Whats your age?',
        navs: [
            {'href': '/', 'text': 'Home'},
            {'href': '/form', 'text': 'form page'}
        ]
    })
})

//Accepting input from examining form request body data
formRoutes.post('/form', (req, res) => {
    if (req.body.name && typeof req.body.name == 'string' && req.body.name.trim()) {
        res.render('formResponse', {
            title: `Your name is ${req.body.name}`,
        navs: [
            {'href': '/', 'text': 'Home'},
            {'href': '/form', 'text': 'form page'}
        ]
        })
    }
    else {
        res.status(400).render('error', {
            title: 'Error',
            message: 'Please enter a valid string input',
            code: res.statusCode,
            href: '/form',
        navs: [
            {'href': '/', 'text': 'Home'},
            {'href': '/form', 'text': 'form page'}
        ]
        })
    }
})
module.exports = {formRoutes}