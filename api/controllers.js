// const dbService = require('services');
// const errors = require('./responses/standardErrors')
// import { sendSuccess } from './responses/standardSuccesses';






exports.getEmployees = async function(req, res, next) {
  console.log('getting here?');
  const userTest = {
    id: 1,
    firstName: 'Max',
    lastName: 'Krause',
    supervisorId: 1,
  }

  return res.send(('userTest'));
}


