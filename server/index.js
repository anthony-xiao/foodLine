const app = require('./server')

const port = 8081

const server = app.listen(port, () => {
  const {address, port} = server.address()
  // eslint-disable-next-line no-console
  console.log(`Listening at http://${address}:${port}`)
})
