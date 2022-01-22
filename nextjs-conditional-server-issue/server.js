const express = require('express')
const next = require('next')

const cookieParser = require('cookie-parser')

const port = parseInt(process.env.PORT, 10) || 4000
const dev = process.env.NODE_ENV !== 'production'
const appA = next({ dev, dir: 'a' })
const handleA = appA.getRequestHandler()
const appB = next({ dev, dir: 'b' })
const handleB = appB.getRequestHandler()

const server = express()

server.use(cookieParser())

server.get('/a', (req, res) => {
  res.cookie('choice', 'a')
  res.status(200).send('Your choice is a. Now, return to /')
})

server.get('/b', (req, res) => {
  res.cookie('choice', 'b')
  res.status(200).send('Your choice is b. Now, return to /')
})

server.all('*', (req, res, goNext) => {
  const cookieChoice = req.cookies['choice'] || ''
  const chooseMessage = 'Visit /a or /b to continue'
  if (!cookieChoice) {
    res.send(chooseMessage)
  } else {
    let app
    let handle
    switch (cookieChoice) {
      case 'a':
        app = appA
        handle = handleA
        break
      case 'b':
        app = appB
        handle = handleB
        break
      default:
        res.send(chooseMessage)
    }

    server.all('*', (req, res) => {
      app.prepare()
        .then(() => {
          handle(req, res) 
        })
    })

    goNext()
  }
})

server.listen(port, (err) => {
  if (err) throw err
  console.log(`> Ready on http://localhost:${port}`)
})
