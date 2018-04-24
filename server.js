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

  server.get('/guides/ios', (req, res) => {
    const actualPage = '/ios'
    app.render(req, res, actualPage)
  })

  server.get('/guides/ios/:section', (req, res) => {
    const actualPage = '/ios/sections'
    const queryParams = { section: req.params.section } 
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/guides/android', (req, res) => {
    const actualPage = '/android'
    app.render(req, res, actualPage)
  })

  server.get('/guides/android/:section', (req, res) => {
    const actualPage = '/android/sections'
    const queryParams = { section: req.params.section } 
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})