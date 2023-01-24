const ProductManager = require('./ProductManager');
const productManager = new ProductManager('./products.json');

const product = {
    title: "TCL Smart TV",
    description: "TCL Smart TV 40” Full HD TCL L40S66E-F",
    price: 67999,
    thumbnail: "https://images.fravega.com/f500/71c66532a2129397660653affe213d13.jpg",
    code: "prod-001",
    stock: 10
};
const product2 = {
    title: "Samsung Smart TV",
    description: "Samsung Smart TV LED 65” 4K UHD Samsung Crystal UN65BU8000GCFV",
    price: 249999,
    thumbnail: "https://images.fravega.com/f500/a99b740b92c32417ea66940275003a78.jpg",
    code: "prod-002",
    stock: 9
};

await productManager.addProduct(product);
await productManager.addProduct(product2);

console.log(productManager)