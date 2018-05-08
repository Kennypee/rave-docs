const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/guides/web', (req, res) => {
    const actualPage = '/web'
    app.render(req, res, actualPage)
  })

  server.get('/guides/web/:section', (req, res) => {
    const actualPage = '/web/sections'
    const queryParams = { section: req.params.section } 
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/guides/mobile', (req, res) => {
    const actualPage = '/mobile'
    app.render(req, res, actualPage)
  })

  server.get('/guides/mobile/:section', (req, res) => {
    const actualPage = '/mobile/sections'
    const queryParams = { section: req.params.section } 
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/guides/others', (req, res) => {
    const actualPage = '/others'
    app.render(req, res, actualPage)
  })

  server.get('/guides/others/:section', (req, res) => {
    const actualPage = '/others/sections'
    const queryParams = { section: req.params.section } 
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/guides/api', (req, res) => {
    const actualPage = '/api/sections'
    app.render(req, res, actualPage)
  })

  server.get('/guides/api/:section', (req, res) => {
    const actualPage = '/api/sections'
    const queryParams = { section: req.params.section } 
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(process.env.PORT || 3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})