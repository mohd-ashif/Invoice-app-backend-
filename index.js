const express = require('express');
const cors = require('cors');
const{ db} = require('./db/db.js')
const ItemModel = require('./model/itemModel.js')
const invoice = require('./routes/Invoice.js')
const app = express();



require('dotenv').config() 

app.use(express.json());
app.use(cors({
    origin: `${process.env.FRONTEND_URL}`,
    credentials: true
}));

const port = process.env.PORT  || 5000

app.get('/', (req, res)=> {
    res.send('server running ')
})

app.use('/invoice', invoice)

db()


app.listen(port , () => {
    console.log(`server running at http://localhost:${port}`)
})
