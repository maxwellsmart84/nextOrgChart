'use strict';


const mongoose = require('mongoose');


const EmployeeSchema = new mongoose.Schema ({
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
  title: {
    type: String,
  },
  supervisorId: {
    type: String
  },
})

module.exports = mongoose.model('Employee', EmployeeSchema);
