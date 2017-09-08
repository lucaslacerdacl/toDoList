const express = require('express')

module.exports = function(server){

    const router = express.Router()
    server.use('/api', router)

    const toDoService = require('../api/todo/todoService')
    toDoService.register(router, '/todos')
}