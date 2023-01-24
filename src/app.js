const express = require('express');
const app = express();

const ProductManager = require('./ProductManager');
const manager = new ProductManager('products.json');

app.use(express.urlencoded({ extended:true }));

app.get('/', async (req, res) => {
    res.send('Ruta raiz')
});
app.get('/products', async (req, res) => {
    let { limit } = req.query;
    let products = await manager.getProducts();
    if (limit == undefined) {
        res.send(products);
    } else {
        res.send(products.slice(0, limit));
    };
});
app.get('/products/:pId', async (req, res) => {
    let products = await manager.getProducts();
    let pId = req.params.pId;
    let idSelected = await products.find(product => product.id == pId);
    if (idSelected !== undefined) {
        res.send(idSelected);
    } else {
        res.send('Id not found');
    };
});

const server = app.listen(8080, () => console.log('listening on port'));
server.on('error', error => console.log(error));