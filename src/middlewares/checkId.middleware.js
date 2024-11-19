import { ProductManager } from "../managers/productManager.js  "
const productManager = new ProductManager();

export const checkId = async (req, res, next) => {
  const { pid } = req.params;
  try {
    const products = await productManager.getProducts();
    const product = products.find((product) => product.id === pid);
    if (!product) {
      const error = new Error();
      error.message = `No se encuentra el producto con el id ${pid}`
      error.code = 404;
      throw error;}
  } catch (error) {
    console.log(`ERROR ${error.code} (${error.message})`);
    res.status(error.code).send(`No se encuentra el producto con el id ${pid}`);
  }
  next();
};
