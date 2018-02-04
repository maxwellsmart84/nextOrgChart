const controller = require('./controllers')

const express = require('express');

module.exports = db => {
  const router = express.Router();
  const wrapAsync = handler => (req, res) => handler(req)
    .then(result => res.json(result))
    .catch(error => res.status(500).json({ error: error.message }))


  router.get('/employee', wrapAsync(controller.getEmployees))

  return router;
}

// module.exports = (app) => {
//   const router = express.Router();
//   router.get('/employee', wrapAsync(controller.getEmployees))
  // router.get('/employee/:id')
  // router.patch('/employee/:id')
  // router.get('/employee/search')
  // router.delete('employee/:id')
  // router.post('/csv')
// }


// export default router;