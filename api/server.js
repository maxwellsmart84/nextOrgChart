const express = require('express');
const next = require('next');
const router = require('./routes');
const bodyParser = require('body-parser');
// const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
// move to env
const mongoPass = 'W1nterf3ll!'
// move this to an env
const MONGO_URI = `mongodb://bearpear:${mongoPass}@cluster0-shard-00-00-mu6iv.mongodb.net:27017,cluster0-shard-00-01-mu6iv.mongodb.net:27017,cluster0-shard-00-02-mu6iv.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin`

//special next js magic
startApp();

async function startApp() {
  try {
    await app.prepare()
    const db = await mongoose.connect(MONGO_URI);
    const server = express();
    server.use(bodyParser.json({ limit: '50mb' }))
    server.use((req, res, next) => {
      req.db = db;
      next();
    })
    //anything to api we let express router handle
    server.use('/api', router(db));

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  } catch(err) {
    console.error(err.stack)
    process.exit(1)
  }
}
// app.prepare()
//   .then(() => {
//     const db = await dbConnect(uri);
//     const server = express();
//     server.use(bodyParser.json({ limit: '50mb' }))
//     server.use((req, res, next) => {
//       req.db = db;
//       next();
//     })
//     //anything to api we let express router handle
//     server.use('/api', router(db));

//     server.get('*', (req, res) => {
//       return handle(req, res)
//     })

//     server.listen(3000, (err) => {
//       if (err) throw err
//       console.log('> Ready on http://localhost:3000')
//     })
//   })
//   .catch((ex) => {
//     console.error(ex.stack)
//     process.exit(1)
//   })
// }
