// const dbService = require('services');
// const errors = require('./responses/standardErrors')
// import { sendSuccess } from './responses/standardSuccesses';
const shaper = require('./shapers/employeeShaper');
const employeeService = require('./db/services/employeeService');


exports.getEmployees = async function(req, res, next) {
  const employees = await employeeService.getEmployees();
  return shaper.shapeEmployeesOut(employees);
}

exports.getEmployee = async function(req, res, next) {
  const id = req.params.id;

  const employee = await employeeService.getEmployee(id);
  return shaper.shapeEmployeeOut(employee);
}

exports.insertEmployee = async function(req, res, next) {
  const data = req.body;

  const shapedData = shaper.shapeEmployeeIn(data);
  const newEmployee = await employeeService.createEmployee(shapedData);
  return shaper.shapeEmployeeOut(newEmployee);
}

exports.updateEmployee = async function(req, res, next) {
  const data = req.body;
  const id = req.params.id;

  const shapedData = shaper.shapeEmployeeIn(data);
  const updatedEmployee = await employeeService.updateEmployee(id, shapedData);
  return shaper.shapeEmployeeOut(updatedEmployee);
}

exports.deleteEmployee = async function (req, res, next) {
  const id = req.params.id;
  await employeeService.deleteEmployee(id);
}

exports.getWorkers = async function (req, res, next) {
  const id = req.params.id;

  const workers =  await employeeService.getSupervisorWorkers(id);
  return shaper.shapeEmployeesOut(workers);
}

// exports.changeSupervisor = async function(req, res, next) {
//   const db = req.db;
//   const data = req.body;
//   const supervisors = await employeeService.getSupervisors()
// }


