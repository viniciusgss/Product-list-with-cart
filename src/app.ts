//importar date.json
//importar entines

import { product } from "./entines/product";

//criar produtos utilizando os dados do data.json

import data from "../data.json";

import { Cart } from "./entines/cart";

const cart = new Cart();

const  product1 = new product("Banana", "Fruta", 10, "http//example.com")

const  product2 = new product("Maça", "Fruta", 5, "http//example.com")

cart.addToCart(product1);
cart.addToCart(product2);

console.log(cart);
console.log(cart.products.length);
console.log(cart.total);
