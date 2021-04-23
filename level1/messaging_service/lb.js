const {
  receiveWsServerByMsgServiceA,
  receiveWsServerByMsgServiceB,
  receiveWsServerByMsgServiceC,
  receiveWsServerByMsgServiceD,
  receiveWsServerByMsgServiceE
} = require('../messaging_service/msgServices')

function innerLoadBalancer (wsServer) {
  const hash = wsServer[0] % 5
  switch (hash) {
    case 0:
      return receiveWsServerByMsgServiceA(wsServer)

    case 1:
      return receiveWsServerByMsgServiceB(wsServer)

    case 2:
      return receiveWsServerByMsgServiceC(wsServer)

    case 3:
      return receiveWsServerByMsgServiceD(wsServer)

    default:
      return receiveWsServerByMsgServiceE(wsServer)
  }
}

module.exports = {
  processWsServer: (wsServers) => wsServers.map(wsServer => innerLoadBalancer(wsServer))
}
