const express = require('express')
const server = require("../portfolio/src/api/server")

server.listen(4000, () => {
    console.log('Server is listening on port 4000')
})