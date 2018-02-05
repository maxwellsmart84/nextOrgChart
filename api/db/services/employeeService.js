const Employee = require('../models/employee');
const shapers = require('../../shapers/employeeShaper');


exports.getEmployees = function(db) {
  return Employee.find({});
}

exports.getEmployee = function(id) {
  return Employee.findById(id);
}

exports.createEmployee = function(data) {
  console.log('inside create',  data)
  return Employee.create(data);
}

exports.createEmployees = function(data) {
  return Employee.insertMany(data);
}

exports.updateEmployee = function(id, data) {
  return Employee.findByIdAndUpdate(id, data, { new: true });
}

exports.deleteEmployee = function(id) {
  return Employee.findByIdAndRemove(id);
}

exports.getSupervisorEmployee = function(superVisorId) {
  return Employee.find({ supervisorId })
}