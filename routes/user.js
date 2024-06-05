const express = require('express')
const router = express.Router()
//This is the middleware between our req and res
router.use((req, res, next) => {
    console.log("User Reqested Time: ", Date.now());
    next()
})
router
    .route("/")
    .get((req, res) =>{
        res.send("Made it to user route")
    })
    .post((req, res) => {
        res.send("Created User")
    })
    .delete((req,res) =>{
        res.send("Deleted User")
    })
router
    .route("/:userID")
    .get((req,res) => {
        res.send(`Navigated to the user page for: ${req.params.userID}`)
    })
router
    .route("/:userID/profile")
    .get((req,res) => {
        res.send(`Navigated to the user profile page for: ${req.params.userID}.`)
    })
router
    .route("/:userID/profile/:data")
    .get((req, res) => {
        res.send(`Navigated to the user profile page for: ${req.params.userID}, with the data: ${req.params.data}.`)
    })
    
module.exports = router
