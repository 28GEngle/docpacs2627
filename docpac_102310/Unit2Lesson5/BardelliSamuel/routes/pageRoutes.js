const express = require('express')
const pageRoutes = express.Router()

pageRoutes.get('/', (req, res) => {
    res.render('index', {
        title: 'Express server',
        desc: 'example description',
        appname: 'ChristianMartinApp',
        subtitle: 'Vote chris for hoco king',
        navs: [
            {'href': '/', 'text': 'Home'},
            {'href': '/form', 'text': 'form page'}
        ]
    })
})

module.exports = {pageRoutes}