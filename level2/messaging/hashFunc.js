
const messagingServiceDomain = 'http://localhost:{}/receiveMsg'
const hash = 3

module.exports = {
    hashIP: (clientId) => {
        const port = 3000 + (clientId % hash)
        const domain = messagingServiceDomain.replace('{}', port)
            .concat(`?clientId=${clientId}`)
        console.log(`Messaging Service redirect to ${domain}`)
        return domain
    }
}