const connect = require('connect')
const serveStatic = require('serve-static')
const open = require('open')
const port = 8080

connect().use(serveStatic(process.cwd())).listen(port, function () {
  console.log('運行伺服器在 Port ' + port + '...')

  open('http://localhost:' + port)
})
