const Employee = require('../models/employee');


exports.getEmployees = function() {
  return Employee.find({}).sort({rank: 1})
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
  return Employee.findByIdAndUpdate(id, data, { new: true });
}
// if an employee being deleted is a supervisor, make his workers his supervisor until he is ursurped!
exports.deleteEmployee = async function(id) {
  const employee = await exports.getEmployee(id);
  const employeeWorkers = await exports.getSupervisorWorkers(id);
  const employeeSupervisor = employee.supervisorId;
  const employeeTitle = employee.title;


  if (employeeWorkers.length !== 0) {
    // sorted by rank so lets make the highest rank the new supervisor (employees of the same rank can be edited later)
    const newSuper = employeeWorkers[0]
    const newWorkers = employeeWorkers.slice(1);
    // much easier to work with async when you write your loops like this, map/filter/forEach all return promises
    for (let i = 0; i < newWorkers.length; i++) {
      const worker = newWorkers[i];
      await exports.updateEmployee(worker._id, { supervisorId: newSuper._id });
    }
    // new supservisor's  title and supervisor is the one of the employee being deleted.
    await exports.updateEmployee(newSuper._id, { title: employeeTitle, supervisorId: employeeSupervisor })
  }
  return Employee.findByIdAndRemove(id);
}

exports.getSupervisorWorkers = function(supervisorId) {
  return Employee.find()
    .where({ supervisorId })
    .sort({rank: 1})
}