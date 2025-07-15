var mongoose = require('mongoose');

var CartSchema = require('../schemas/cart.schema');
module.exports = mongoose.model('Cart', CartSchema); 