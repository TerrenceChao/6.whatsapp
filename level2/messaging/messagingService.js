const express = require('express')
const app = express()
const hashIP = require('./hashFunc').hashIP
const parsePortFromCmd = require('../parsePortFromCmd')

const port = parsePortFromCmd()

app.get('/', (req, res) => {
  res.send('Hello world! I\'m Messaging Service')
})


app.get('/processMsg', (req, res) => {
    const clientId = req.query.clientId
    console.log(req.xhr)
    const domain = hashIP(clientId)
    res.redirect(301, domain)
})


app.listen(port, () => console.log(`\tMessaging Service listening at http://localhost:${port}`))