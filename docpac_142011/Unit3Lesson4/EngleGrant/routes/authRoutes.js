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

const username = String(submission.username).trim()
const email = String(submission.email).trim()
const password = String(submission.password).trim()
const confirmPassword = String(submission.confirm_password).trim()

const validationStatus = validate(username, email, password, confirmPassword)



   function validate(username, email, password, confirmPassword) {

    usernameValid = typeof username == "string" && username.length >= 2 && username.length <= 20
    emailValid = typeof email == "string" && email.length >= 7 && email.includes("@") && email.includes(".") 
    passwordValid = typeof password == "string" && password.length <= 64
    passwordConfirmationValid = password === confirmPassword

    if (usernameValid &&
        emailValid &&
        passwordValid &&
        passwordConfirmationValid
    ) {
        return true
    } else {
        issues = {
            usernameValid: true,
            emailValid: true,
            passwordValid: true,
            passwordConfirmationValid: true
        }

        if (!usernameValid) {
            issues.usernameValid = false
        }

        if (!emailValid) {
            issues.emailValid = false
        }

        if (!passwordValid) {
            issues.passwordValid = false
        }

        if (!passwordConfirmationValid) {
            issues.passwordConfirmationValid = false
        }
        return issues
    }
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