
const express = require('express');
const App = express();
const PORT = 8080;
const fs = require('fs').promises;

class ProductManager {
  constructor(filePath) {
    this.path = filePath;
    this.products = [];
  }

  async initialize() {
    try {
      const data = await fs.readFile(this.path, 'utf8');
      this.products = JSON.parse(data);
    } catch (error) {
      console.error('Error initializing ProductManager:', error.message);
      this.products = [];
    }
  }

  async getProducts() {
    return this.products;
  }

  async getProductById(productId) {
    return this.products.find(product => product.id === productId);
  }
}

const productManager = new ProductManager('products.json');

App.use(express.json());


App.get('/products', async (req, res) => {
  try {
    const { limit } = req.query;
    let products = await productManager.getProducts();

    if (limit) {
      products = products.slice(0, +limit); 
    }

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los productos.' });
  }
});


App.get('/products/:pid', async (req, res) => {
  try {
    const productId = +req.params.pid; 
    const product = await productManager.getProductById(productId);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Producto no encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el producto.' });
  }
});

// Inicia el servidor
productManager.initialize().then(() => {
  App.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
});



