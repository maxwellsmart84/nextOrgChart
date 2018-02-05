// const dbService = require('services');
// const errors = require('./responses/standardErrors')
// import { sendSuccess } from './responses/standardSuccesses';
const shaper = require('./shapers/employeeShaper');
const employeeService = require('./db/services/employeeService');





exports.getEmployees = async function(req, res, next) {
  const db = req.db;
  const employees = await employeeService.getEmployees(db);
  return shaper.shapeEmployees(employees);
}

exports.getEmployee = async function (req, res, next) {
  const db = req.db;
  const id = req.params.id;
  const employee = await employeeService.getEmployee(id)
  return shaper.shapeEmployee(employee);
}

exports.insertEmployee = async function(req, res, next) {
  const db = req.db;
  const data = req.body;
  console.log('inside insert');
  const newEmployee = await employeeService.createEmployee(data);
  return shaper.shapeEmployee(newEmployee);
}

exports.insertManyEmployees = async function(req, res, next) {
  const db = req.db;

}


