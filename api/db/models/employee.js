'use strict';


const mongoose = require('mongoose');


const EmployeeSchema = new mongoose.Schema ({
  name: {
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
  supervisor: {
    type: Boolean,
  },
  supervisorId: {
    type: String
  },
})

module.exports = mongoose.model('Employee', EmployeeSchema);
