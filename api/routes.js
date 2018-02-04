const controller = require('./controllers')

const express = require('express');


const router = express.Router();

const asyncMiddleware = fn =>
  (req, res, next) => {
    Promise.resolve(fn(req, res, next))
      .catch(next);
  };

module.exports = (router) => {
  router.get('/employee', asyncMiddleware(controller.getEmployees))
  router.get('/employee/:id')
  router.patch('/employee/:id')
  router.get('/employee/search')
  router.delete('employee/:id')
  router.post('/csv')
}


// export default router;