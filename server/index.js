const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const massive = require('massive');
const controller = require('./products_controller');

const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/api/product', controller.create)//add product to table
app.get('/api/product/:id', controller.getOne)//get one product from table
app.get('/api/products', controller.getAll)//read all products from table
app.put('/api/product/:id', controller.update)//update product description
app.delete('/api/product/:id', controller.delete)//delete product

massive(process.env.CONNECTION_STRING).then(db =>{
    app.set('db', db);
    app.listen(port, () => console.log(`▄︻̷̿┻̿═━一 ${port}`));
})