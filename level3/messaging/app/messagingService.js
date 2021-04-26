const express = require('express')
const app = express()
const hashIP = require('./hashFunc').hashIP
const parsePortFromCmd = require('./parsePortFromCmd')

const port = parsePortFromCmd()

app.get('/', (req, res) => {
  res.send('Hello world! I\'m Messaging Service')
})

app.get('/processMsg', (req, res) => {
  const clientId = req.query.clientId
  const wsServer = req.query.wsServer
  console.log(req.xhr)
  const domain = hashIP(clientId)
    .concat(`?clientId=${clientId}&wsServer=${wsServer}&msgService=xxxx:${port}`)
  console.log(`Messaging Service: xxxx:${port} redirect to ${domain}`)

  res.redirect(301, domain)
})

app.listen(port, () => console.log(`\tMessaging Service listening at http://localhost:${port}`))