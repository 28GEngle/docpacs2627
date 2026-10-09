express = require('express')

testRouter = express.Router()


testRouter.get('/query', (req, res) => {

    res.send("Your message was " + req.query.message)

})

testRouter.get('/urlparams/:urlparam', (req,res) => {

    res.send(req.params.urlparam)

})


module.exports = testRouter