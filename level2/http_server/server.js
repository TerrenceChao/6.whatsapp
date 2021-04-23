const express = require('express')
const app = express()
const hashIP = require('./hashFunc').hashIP
const parsePortFromCmd = require('../parsePortFromCmd')

const port = parsePortFromCmd()

app.get('/', (req, res) => {
  res.send('Hello world! I\'m App server')
})

app.get('/sendMsg', (req, res) => {
  const clientId = req.query.clientId
  console.log(`client: ${clientId} send msg`)
  const domain = hashIP(clientId)
  res.redirect(301, domain)
})

app.get('/receiveMsg', (req, res) => {
  const clientId = req.query.clientId
  res.json({
    code: 'success',
    data: {
      clientId,
      msg: `client: ${clientId} message delivered!`
    }
  })
})

app.listen(port, () => console.log(`App server listening at http://localhost:${port}`))