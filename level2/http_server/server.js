const http = require('http')

const PORT = process.argv[2]

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello world\n')
}).listen(PORT)

console.log(`Server running at http://127.0.0.1:${PORT}`)
