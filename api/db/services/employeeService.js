const Employee = require('../models/employee');


exports.getEmployees = function() {
  return Employee.find({});
}

exports.getEmployee = function(id) {
  return Employee.findById(id);
}

exports.createEmployee = function(data) {
  return Employee.create(data);
}

exports.createEmployees = function(data) {
  return Employee.insertMany(data);
}

exports.updateEmployee = function(id, data) {
  try {
    Employee.findByIdAndUpdate(id, data, { new: true });
  } catch(e) {
    console.log(e);
  }
}

exports.deleteEmployee = function(id) {
  return Employee.findByIdAndRemove(id);
}

exports.getSupervisorWorkers = function(supervisorId) {
  return Employee.find()
    .where({ supervisorId })

}