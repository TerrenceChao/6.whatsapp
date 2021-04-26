
const messagingServiceDomain = 'http://localhost:{}/processMsg'
const hash = 5

module.exports = {
    hashIP: (clientId) => {
        const port = 4000 + (clientId % hash)
        return messagingServiceDomain.replace('{}', port)
    }
}