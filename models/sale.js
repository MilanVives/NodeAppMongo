const Joi = require('joi');
const mongoose = require('mongoose');

//ToDo Motivatie keuze datamodel


const Sale = mongoose.model('Sale', new mongoose.Schema({
  //ToDo vervolledig het schema
}));

function validateSale(sale) {
  const schema = Joi.object({
    //ToDo vervolledig validatieschema
  });

  return schema.validate(sale);
}

exports.Sale = Sale; 
exports.validate = validateSale;

//ToDo sale model vervolledigen