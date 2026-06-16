const express = require('express')
import express from "express"
const app = express()
const port = 3000

app.get('/' , (req , res) => {
    res.send("Helloo")
})

app.listen(port  , () => {
console.log(`example and it is listening in the portal ${port}`)
})



