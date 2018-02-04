const express = require('express');
const next = require('next');
const router = require('./routes');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

//special next js magic
app.prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.json({ limit: '50mb'}))
    //anything to api we let express router handle
    server.use('/api', router);

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
