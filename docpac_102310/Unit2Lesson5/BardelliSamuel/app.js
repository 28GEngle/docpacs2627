require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const {capture} = require('./utils/requestLogger')
const {pageRoutes} = require('./routes/pageRoutes')
const {formRoutes} = require('./routes/formRoutes')
const {parameterRoutes} = require('./routes/parameterRoutes')
const path = require('path')
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(capture)
app.use(express.static('public'))
app.use(express.urlencoded({
    extended: true,
    inflate: true,
    limit: "1mb",
    parameterLimit: 5000
}))
app.use(pageRoutes)
app.use(formRoutes)
app.use(parameterRoutes)


app.all(`*path`, (req, res) => {
    res.status(404).render('error', {
        title: 'error',
        message: 'Incorrect page',
        code: res.statusCode,
        href: '/',
        navs: [
            {'href': '/', 'text': 'Home'},
            {'href': '/form', 'text': 'form page'}
        ]
    })
})

app.listen(port, () => {
    console.log('Server started at port:', port)
})