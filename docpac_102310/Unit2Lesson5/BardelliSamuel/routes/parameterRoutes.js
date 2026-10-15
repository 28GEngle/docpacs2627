const express = require('express')
const parameterRoutes = express.Router()

//Accepting input from examining a query string
parameterRoutes.get('/query', (req, res) => {
    if (req.query.message && typeof req.query.message == 'string' && req.query.message.trim()) {
        res.render('queryResponse', {
            title: `Your message was: ${req.query.message}`,
        navs: [
            {'href': '/', 'text': 'Home'},
            {'href': '/form', 'text': 'form page'}
        ]
        })
    }
    else {
        res.status(400).render('error', {
            title: 'Error',
            message: 'Please enter a valid message,    Format: /query?message=message',
            code: res.statusCode,
            href: '/'
        })
    }
})

//Accepting input from examining dynamic url parameters
parameterRoutes.get('/urlparams/:example', (req, res) => {
    if (req.params.example && req.params.example.trim()) {
        res.render('parameterResponse', {
            title: `your parameter was ${req.params.example}`,
        navs: [
            {'href': '/', 'text': 'Home'},
            {'href': '/form', 'text': 'form page'}
        ]
        })
    }
})

parameterRoutes.get('/urlparams', (req, res) => {
    res.status(400).render('error', {
        title: 'Error',
        message: 'Please enter a valid message,    Format: /urlparams/param',
        code: res.statusCode,
        href: '/',
        navs: [
            {'href': '/', 'text': 'Home'},
            {'href': '/form', 'text': 'form page'}
        ]
    })
})
module.exports = {parameterRoutes}