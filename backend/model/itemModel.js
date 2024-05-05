const mongoose = require('mongoose');

const ItemModel = new mongoose.Schema({
    itemId: { type: Number, unique: true }, 
    customerName: { type: String },
    itemName: { type: String}, 
    price: { type: Number },
    tax: { type: Number },
    subTotal: { type: Number },
    date: {type: Date, required: true},
});

module.exports = mongoose.model('items', ItemModel);
