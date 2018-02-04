// const dbService = require('services');
// const errors = require('./responses/standardErrors')
// import { sendSuccess } from './responses/standardSuccesses';






exports.getEmployees = async function(req, res, next) {
  const userTest = Promise.resolve({
    id: 1,
    firstName: 'Max',
    lastName: 'Krause',
    supervisorId: 1,
  })
  const user = await userTest();
  res.json(('user'));
}


