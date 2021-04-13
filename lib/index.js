import express from 'express'
import bodyParser from 'body-parser'
import userRouter from './routres/users.js'
const server = express()
const PORT = 3333

server.use(bodyParser.json())

var homepage = (req,res) =>
res.send("welcome to homepage")

server.use("/user",userRouter)

server.get("/",homepage)
server.listen(PORT)