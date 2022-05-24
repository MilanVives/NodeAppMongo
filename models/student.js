const Joi = require('joi');
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  distance: {
    type: Boolean,
    default: false
  },
  number: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
});

const Student = mongoose.model('Student', studentSchema);

function validateStudent(student) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    number: Joi.string().min(5).max(50).required(),
    distance: Joi.boolean()
  });

  return schema.validate(student);
}

exports.studentSchema = studentSchema;
exports.Student = Student; 
exports.validate = validateStudent;