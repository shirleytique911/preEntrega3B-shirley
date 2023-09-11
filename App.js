const express = require('express');
const app = express();
const port = 3000; // Puedes cambiar el puerto según tus preferencias

const { ProductManager } = require('./productManager'); // Asegúrate de que la ruta sea correcta

const productManager = new ProductManager();

app.get('/products', async (req, res) => {
  try {
    const { limit } = req.query;

    if (limit) {
      const products = await productManager.getProducts(+limit); // Convierte limit a un número
      res.json(products);
    } else {
      const products = await productManager.getProducts();
      res.json(products);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los productos.' });
  }
});

app.get('/products/:pid', async (req, res) => {
  try {
    const productId = +req.params.pid; // Convierte pid a un número
    const product = await productManager.getById(productId);

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

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

