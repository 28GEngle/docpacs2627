const requestLogger = require('./utils/requestLogger')
const pageRouter = require('./routes/pageRoutes')
const testRouter = require('./routes/testRoutes')

require('dotenv').config()
fs = require('fs')
http = require('http')
url = require('url')
express = require('express')
app = express();
path = require('path')
const PORT = process.env.PORT

app.use(
    express.urlencoded({
        extended: true,
        inflate: true,
        limit: "1mb",
        parameterLimit: 5000,
        type: "application/x-www-form-urlencoded",
    })
);


// MVC control
app.use(requestLogger)
app.use(pageRouter)
app.use(testRouter)


app.use(express.static('public'))

app.listen(PORT, () => {
    console.log('Server started!')
})

