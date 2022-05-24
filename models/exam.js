const Joi = require('joi');
const mongoose = require('mongoose');

//ToDo Motivatie keuze datamodel


const Exam = mongoose.model('Exam', new mongoose.Schema({
  //ToDo vervolledig het schema
}));

function validateExam(exam) {
  const schema = Joi.object({
    //ToDo vervolledig validatieschema
  });

  return schema.validate(exam);
}

exports.Exam = Exam; 
exports.validate = validateExam;

//ToDo exam model vervolledigen