const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const cors = require('./cors')
const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({ extended : true }))
server.use(bodyParser.json())
server.use(cors)
server.use(queryParser())

server.listen(port , function() {
    console.log(`Backend is runing on port ${port}`)
})

module.exports = server