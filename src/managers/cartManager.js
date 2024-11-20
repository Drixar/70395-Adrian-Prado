import fs from "fs";
import { v4 as uuid } from "uuid";

export class CartManager {
  constructor() {
    this.carts = [];
    this.path = "./src/managers/data/carts.json";
  }

  async getCarts(limit) {
    const file = await fs.promises.readFile(this.path, "utf-8");
    const fileParse = JSON.parse(file);

    this.carts = fileParse || [];

    if (!limit) return this.carts;

    return this.carts.slice(0, limit);
  }

  async addCart() {
    await this.getCarts();

    const newCart = {
      id: uuid(),
      products: []
    };

    this.carts.push(newCart);
    await fs.promises.writeFile(this.path, JSON.stringify(this.carts));
    return newCart;
  }

  async getCartById(id) {

    await this.getCarts();
    const cart = this.carts.find((cart) => cart.id === id);
    return cart;
  }

  
  async updateCart(id, data) {
    await this.getProductById(id);

    const index = this.carts.findIndex((cart) => cart.id === id);

    this.products[index] = {
      ...this.products[index],
      ...data,
    };

    await fs.promises.writeFile(this.path, JSON.stringify(this.products));

    return this.products[index];
  }

  async deleteProduct(id) {
    await this.getProductById(id);

    this.products = this.products.filter((products) => products.id !== id);

    await fs.promises.writeFile(this.path, JSON.stringify(this.products));

    return `Producto con el id ${id} eliminado`;
  }
}
