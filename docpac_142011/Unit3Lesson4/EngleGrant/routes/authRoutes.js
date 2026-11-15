const express = require("express")
const router = express.Router()
const userModel = require("../models/userModel")

router.get("/register", (req,res) => {
    res.render('register', {pageTitle: "Sign Up"})
})
router.post("/register", (req,res) => {
/*
Add POST /register.
Before creating a user, validate that:
    - Every required field exists
    - Username is not blank
    - Email address is not blank
    - Password is not blank
    - Repeated password is not blank
    - The two password values match
    - Username and email meet reasonable length requirements
    - The email has a reasonable format
Return or render a 400 Bad Request response for invalid registration data.
Do not rely only on browser-side attributes such as required.
*/

submission = req.body

if (submission.username &&
    submission.email &&
    submission.password &&
    submission.confirm_password
) {
   console.log("User Input Valid") 
}

res.end("test")
})



router.get("/login", (req,res) => {

})
router.post("/login", (req,res) => {

})
router.post("/logout", (req,res) => {

})



router.get("/account", (req,res) => {

})

module.exports = router