const clients = require('./client/client').clients
const {
  receiveClient,
  receiveMessagingService
} = require('./websocket_server/lb')
const processWsServer = require('./messaging_service/lb').processWsServer

const clientToWs = receiveClient(clients())
const msgToWs = processWsServer(clientToWs)
receiveMessagingService(msgToWs)
