express = require('express')



pageRouter = express.Router()




pageRouter.get('/', (req, res) => {

    res.send('boo')

})



pageRouter.get('/form', (req, res) => {

    res.sendFile(path.join(__dirname, '../public/form.html'))

})

pageRouter.post('/form', (req,res) => {

    body = req.body
    console.log(body.email)
    if(body){
    res.send(body)
    }
    else {
        res.status(400).send("error missing input!")
    }

})


module.exports = pageRouter