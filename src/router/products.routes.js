import { Router } from "express";
import { ProductManager } from "../managers/productManager.js";
import { checkId } from "../middlewares/checkId.middleware.js";
import { checkCode } from "../middlewares/checkCode.middleware.js";
import { checkUndefined } from "../middlewares/checkUndefined.middleware.js";

const productManager = new ProductManager();
const router = Router();



router.get("/", async (req, res) => {
  const { limit } = req.query;
  try {
    const products = await productManager.getProducts(limit);
    res.send(products);
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

router.get("/:pid",checkId, async (req, res) => {
  
  const { pid } = req.params;
  const product = await productManager.getProductById(pid);
  console.log(product)
  res.send(product);
  
  });

router.post("/", checkCode, checkUndefined, async (req, res) => {

  const body = req.body;
  const product = await productManager.addProduct(body);
  console.log(product)
  res.send(product);
  
});

router.put("/:pid", checkId, checkUndefined, async (req, res) => {

  const { pid } = req.params;
  const body = req.body;

    const product = await productManager.updateProduct(pid, body);

    res.send(product);
});

router.delete("/:pid", checkId, async (req, res) => {
  const { pid } = req.params;
  const product = await productManager.deleteProduct(pid);
  console.log(product);
  res.send(product);

});

export default router;
