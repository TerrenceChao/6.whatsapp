// const clients = require('../client/client').clients
const {
  receiveClientByServerA,
  receiveClientByServerB,
  receiveClientByServerC,

  receiveMsgServiceByServerA,
  receiveMsgServiceByServerB,
  receiveMsgServiceByServerC

} = require('./wsServers')

function loadBalancer (client) {
  const hash = client % 3
  switch (hash) {
    case 0:
      return receiveClientByServerA(client)

    case 1:
      return receiveClientByServerB(client)

    default:
      return receiveClientByServerC(client)
  }
}

function innerLoadBalancer (msgService) {
  const hash = msgService[0] % 3
  switch (hash) {
    case 0:
      return receiveMsgServiceByServerA(msgService)

    case 1:
      return receiveMsgServiceByServerB(msgService)

    default:
      return receiveMsgServiceByServerC(msgService)
  }
}

// clients().forEach(client => loadBalancer(client))

module.exports = {
  receiveClient: (clients) => clients.map(client => loadBalancer(client)),
  receiveMessagingService: (msgServices) => msgServices.map(msgService => innerLoadBalancer(msgService))
}
