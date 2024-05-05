const express = require('express');
const router = express.Router();
const { getInvoice, createInvoice } = require('../controller/Invoice.js');

router.get('/get-invoice', getInvoice);
router.post('/create-invoice', createInvoice);

module.exports = router;
