class ProductManager  {
    products

    constructor(){
        this.products = []
    }

    addProduct(title, description, price, thumbnail, code, stock){
        if(title && description && price && thumbnail && code && stock && this.validateCode(code)){
            let product = {
                id: this.getNewId(),
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            }
            this.products.push(product)
            console.log(`Se agrego el producto`)
        }else {
            console.log(`No se pudo agregar el producto`)
        }

    }

    getProducts(){
        console.log(this.products)
    }

    getNewId(){
        return this.products.length ++
    }

    getProductById(id){
        let idFound = this.products.find(elem => elem.id == id)
        if(idFound){
            console.log(idFound)
        }else{
            console.log(`Producto no encontrado`)
        }
    }
    validateCode(code){
        let result = true
        let codeFound = this.products.find(elem => elem.code == code)
        if(codeFound){
            result = false
            console.log (`Codigo ya utilizado`)
        }
        return result
    }

}

let productManager = new ProductManager()

productManager.addProduct(`Iphone 13`, `Celular`, 1200, `iphone13.com`, 100, 10)
productManager.addProduct(`Samsung S21`, `Celular`, 1100, `SamsungS21.com`, 101, 20)