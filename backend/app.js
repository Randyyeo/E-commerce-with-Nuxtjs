const express = require("express");

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next)=>{
    console.log(`${req.method} - ${req.url}`)
    next()
})