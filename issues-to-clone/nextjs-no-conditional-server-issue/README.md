# Minimal Repro: Next.js can't conditionally serve different Next directories (custom Express server)

## Goal

I want to conditionally serve different Next directories to different sessions (based on a cookie value) within a custom Express server.

## Issue Summary

After Next app server serves one directory (`next({ dir: 'a' })`) in a server runtime, it seems impossible to later serve a different directory (`next({ dir: 'b' })`), even to an entirely different session or machine.

## Repro

1.  Clone this repo
2.  Run `yarn serve`
3.  Visit `localhost:4000` in a private browser window
4.  Read: `Visit /a or /b to continue`
5.  Visit `localhost:4000/a` (for this example)
6.  Read: `Your choice is a. Now, return to /`
7.  Visit `localhost:4000`
8.  Read: `Welcome to a`
9.  Now, visit `localhost:4000` in a different private browser window (or different machine) and read instruction
10. Visit `localhost:4000/b` and read message
11. Finally, visit `localhost:4000`

**Expected:** Read: `Welcome to b`

**Actual:** Read: `Welcome to a`

*Note:* Visiting `/b` first will indeed persist `Welcome to b` instead.

## Code

Here's the code in `server.js`, minimally changed from the official [Custom Express Server example](https://github.com/vercel/next.js/tree/canary/examples/custom-server-express):

```js
// server.js
const cookieParser = require('cookie-parser')
const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 4000
const dev = process.env.NODE_ENV !== 'production'

// Want different next apps & handlers to conditionally source different directories
const appA = next({ dev, dir: 'a' })
const handleA = appA.getRequestHandler()
const appB = next({ dev, dir: 'b' })
const handleB = appB.getRequestHandler()

const server = express()

server.use(cookieParser())

// Visit /a to receive cookie with choice=a
server.get('/a', (req, res) => {
  res.cookie('choice', 'a')
  res.status(200).send('Your choice is a. Now, return to /')
})

// Visit /b to receive cookie with choice=b
server.get('/b', (req, res) => {
  res.cookie('choice', 'b')
  res.status(200).send('Your choice is b. Now, return to /')
})

server.all('*', (req, res, goNext) => {
  const cookieChoice = req.cookies['choice'] || ''
  const chooseMessage = 'Visit /a or /b to continue'

  if (!cookieChoice) {
    // When no cookie, send message
    res.send(chooseMessage)
  } else {
    let app
    let handle
    switch (cookieChoice) {
      case 'a':
        // Set app & handler to serve directory 'a/'
        app = appA
        handle = handleA
        break
      case 'b':
        // Set app & handler to serve directory 'b/'
        app = appB
        handle = handleB
        break
      default:
        res.send(chooseMessage)
    }

    // Want to conditionally serve 'a/' or 'b/' here
    app.prepare()
      .then(() => {
        handle(req, res) 
      })

    goNext()
  }
})

server.listen(port, (err) => {
  if (err) throw err
  console.log(`> Ready on http://localhost:${port}`)
})
```
