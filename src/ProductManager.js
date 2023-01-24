const fs = require('fs');

class ProductManager {
    constructor(path) {
        this.path = path;
        this.products = [];
        this.id = 0;
    }

    async addProduct(product) {
        product.id = this.id++;
        this.products.push(product);
        await this.saveToFile();
    }

    async getProducts() {
        await this.loadFromFile();
        return this.products;
    }

    async getProductById(id) {
        await this.loadFromFile();
        return this.products.find(product => product.id === id);
    }

    async updateProduct(id, newProduct) {
        await this.loadFromFile();
        const productIndex = this.products.findIndex(product => product.id === id);
        this.products[productIndex] = {...this.products[productIndex], ...newProduct};
        await this.saveToFile();
    }

    async deleteProduct(id) {
        await this.loadFromFile();
        this.products = this.products.filter(product => product.id !== id);
        await this.saveToFile();
    }

    async saveToFile() {
        await fs.promises.writeFile(this.path, JSON.stringify(this.products));
    }

    async loadFromFile() {
        try {
            const data = await fs.promises.readFile(this.path, "utf-8" );
            this.products = JSON.parse(data);
        } catch (error) {
            console.log(error);
        }
    }
}



module.exports = ProductManager;
