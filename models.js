
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/product');

var ProductSchema = new mongoose.Schema({
    title :{ type :String, minlength:4, required: true},
    price :{ type: Number, required: true } ,
    image :{ type :String},
},{timestamps: true });

mongoose.model('Product', ProductSchema);
var Product = mongoose.model('Product')

module.exports = Product;