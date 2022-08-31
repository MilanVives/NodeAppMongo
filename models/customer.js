const Joi = require('joi');
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  active: {
    type: Boolean,
    default: false
  },
  email: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 125

  },
  number: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
});

const Customer = mongoose.model('Customer', customerSchema);

function validateCustomer(customer) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    number: Joi.string().min(5).max(50).required(),
    email: Joi.string().email().required(),
    active: Joi.boolean()
  });

  return schema.validate(customer);
}

exports.customerSchema = customerSchema;
exports.Customer = Customer; 
exports.validate = validateCustomer;