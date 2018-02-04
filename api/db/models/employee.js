const mongoose = require('mongoose');


const employeeSchema = new mongoose.Schema ({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  rank: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
  },
  supervisorId: {
    type: Number,
  }
})

module.exports = mongoose.model('Employees', employeeSchema);
