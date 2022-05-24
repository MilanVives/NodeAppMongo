const Joi = require('joi');
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, 
    minlength: 5,
    maxlength: 50
  },
  code: { 
    type: String, 
    required: true,
    min: 0,
    max: 50
  }
});

const Course = mongoose.model('Course', courseSchema);

function validateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    code: Joi.string().min(5).max(10).required()
  });

  return schema.validate(course);
}

exports.courseSchema = courseSchema;
exports.Course = Course; 
exports.validate = validateCourse;