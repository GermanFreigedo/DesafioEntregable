const express = require("express");
require("dotenv").config();

const app = express();
const PORT = 8080;
const productsRouter = require('./routes/products');
const cartRouter = require('./routes/cart');

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api/products", productsRouter)
app.use("/api/cart", cartRouter)
app.get('/', (req, res)=>{
    res.send("Bienvenidos")
})


const server = app.listen(PORT, ()=> console.log(`Server listening on port ${PORT}`))
server.on("error", error => console.log(error))