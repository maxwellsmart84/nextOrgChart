const controller = require('./controllers')

const express = require('express');

module.exports = db => {
  const router = express.Router();
  const wrapAsync = handler => (req, res) => handler(req)
    .then(result => res.json(result))
    .catch(error => res.status(500).json({ error: error.message }))


  router.get('/employee', wrapAsync(controller.getEmployees))
  router.post('/employee', wrapAsync(controller.insertEmployee))
  router.get('/supervisors', wrapAsync(controller.getSupervisors))
  router.patch('/employee/:id', wrapAsync(controller.updateEmployee))
  router.get('/employee/:id', wrapAsync(controller.getEmployee))
  router.delete(`/employee/:id`, wrapAsync(controller.deleteEmployee))
  router.get('/employee/workers/:id', wrapAsync(controller.getWorkers))


  router.delete('/')

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