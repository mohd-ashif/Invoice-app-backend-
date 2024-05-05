const items = require('../model/itemModel');

exports.getInvoice = async (req, res) => {
    try {
        const item = await items.find();
        return res.status(200).json(item);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server Error" });
    }
};
exports.createInvoice = async (req, res) => {
  try {
    const { itemId, itemName,customerName,  price, tax, date } = req.body; 
    
    const parsedPrice = parseFloat(price);
    const parsedTax = parseFloat(tax);
    
    const subTotal = parsedPrice + parsedTax; 

    const newItem = new items({
      itemId,
      itemName,
      customerName,
      price: parsedPrice, 
      tax: parsedTax, 
      subTotal,
      date
    });
    await newItem.save();
    res.status(201).json({
      success: true,
      message: 'Item created successfully',
      item: newItem,
    });
  } catch (error) {
    console.error('Error creating item:', error);
    res.status(500).json({ success: false, message: 'Failed to create item' });
  }
};
