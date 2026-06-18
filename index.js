const express = require('express')

const app = express()
const port = 4000

app.get('/' , (req , res) => {
    res.send("Helloo")
})

app.get('/twitter' , (req , res) => {res.send('hiteshdotcom')})

app.get('/login' ,(req , res) => {
    res.send('<h1>Please Login at sharade<h1>')
})

app.listen(port  , () => {
console.log(`example and it is listening in the portal ${port}`)
})



