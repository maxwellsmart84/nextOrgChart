// const dbService = require('services');
// const errors = require('./responses/standardErrors')
// import { sendSuccess } from './responses/standardSuccesses';
const { shapeEmployee, shapeEmployees } = require('./shapers/employeeShaper');
const employeeService = require('./db/services/employeeService');





exports.getEmployees = async function(req, res, next) {
  const db = req.db;
  const employees = await employeeService.getEmployees();
  return shapeEmployees(employees);
}

exports.getEmployee = async function (req, res, next) {
  const db = req.db;
  const id = req.params.id;
  const employee = await employee.getEmployee(id)
  return shapeEmployee(employee);
}

exports.insertEmployee = async function(req, res, next) {
  const db = req.db;
  const data = req.body;
  console.log('inside insert');
  const newEmployee = await employeeService.createEmployee(data);
  return shapeEmployee(newEmployee);
}

exports.insertManyEmployees = async function(req, res, next) {
  const db = req.db;

}


