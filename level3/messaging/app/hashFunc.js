
const messagingServiceDomain = 'http://localhost:{}/receiveMsg'
const hash = 3

module.exports = {
    hashIP: (clientId) => {
        const port = 3000 + (clientId % hash)
        return messagingServiceDomain.replace('{}', port)
    }
}