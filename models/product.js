const Joi = require('joi');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
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


const Product = mongoose.model('Product', productSchema);

function validateProduct(product) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    code: Joi.string().min(5).max(10).required()
  });

  return schema.validate(product);
}

exports.productSchema = productSchema;
exports.Product = Product; 
exports.validate = validateProduct;