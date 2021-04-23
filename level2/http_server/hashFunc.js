
const messagingServiceDomain = 'http://localhost:{}/processMsg'
const hash = 5

module.exports = {
    hashIP: (clientId) => {
        const port = 4000 + (clientId % hash)
        const domain = messagingServiceDomain.replace('{}', port)
            .concat(`?clientId=${clientId}`)
        console.log(`App Server redirect to ${domain}`)
        return domain
    }
}